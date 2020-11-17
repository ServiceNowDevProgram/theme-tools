import React, {Fragment, useState, useEffect} from 'react';
import {renderToString} from 'react-dom/server';
import dynamic from 'next/dynamic';
import PageHeader from '../../components/PageHeader';
import Page from '../../components/Page';
import Select from '../../components/Select';
import Button from '../../components/Button';
import jsonAst from '../../lib/jsonAst';
import cx from '../../lib/cx';
import tippy from 'tippy.js';
import {runRules} from '../../lib/validateRules';

/**
 * @param {Object} props
 * @param {"positive"|"negative"} props.status
 */
function StatusDot({status}) {
	return (
		<span
			className={cx({
				'inline-block': true,
				'w-2': true,
				'h-2': true,
				'rounded-full': true,
				'bg-green-600': status === 'positive',
				'bg-red-600': status === 'negative',
			})}></span>
	);
}

function StatusFlag({label, status}) {
	return (
		<div className="flex items-center mr-2">
			<StatusDot status={status} />
			<span className="text-xs ml-1 leading-none">{label}</span>
		</div>
	);
}

const CodeMirror = dynamic(
	async () => {
		const mod = await import('react-codemirror2');
		await import('codemirror/mode/javascript/javascript');
		return mod.Controlled;
	},
	{ssr: false}
);

const fakeData = JSON.stringify(
	{
		'--now-color--primary-0': '1,1,1',
	},
	null,
	'  '
);

function toElement(jsx) {
	const string = renderToString(jsx);
	const wrapper = document.createElement('DIV');
	wrapper.innerHTML = string;
	return wrapper.children[0];
}

function makeMarker(message) {
	const jsx = (
		<div
			className="w-2 h-2 bg-red-600 rounded-full relative"
			style={{top: '6px', left: '10px'}}></div>
	);
	const el = toElement(jsx);
	tippy(el, {content: message});
	return el;
}

function pad(string, n, char = ' ') {
	return string + Array(n).fill(char).join('');
}

export default function ValidatorPage({data}) {
	const path = [{id: 'validator', href: '/validator', label: 'Validator'}];
	const selectedPath = 'validator';

	const [state, setState] = useState({
		commitCount: 0,
		currentCode: fakeData,
		committedCode: fakeData,
		syntaxError: null,
		lintErrors: [],
	});
	const [editor, setEditor] = useState(null);
	const [selectedRelease, setSelectedRelease] = useState(
		data.releases.slice(-1)[0]
	);

	useEffect(() => {
		if (editor) {
			window.editor = editor;
		}
	}, [editor]);

	useEffect(() => {
		// First check if new code is valid JSON, aka if we can even parse it
		const syntaxError = jsonAst.invalid(state.committedCode);
		if (syntaxError) {
			setState({
				currentCode: state.currentCode,
				committedCode: state.currentCode,
				syntaxError,
				lintErrors: [],
			});
			return;
		}
		// Then pretty print the JSON
		const formattedCode = JSON.stringify(
			JSON.parse(state.committedCode),
			null,
			'  '
		);
		// Finally run the lint rules
		const result = runRules(formattedCode, {release: selectedRelease}, data);
		setState({
			currentCode: formattedCode,
			committedCode: formattedCode,
			syntaxError: null,
			lintErrors: result.errors,
		});
	}, [state.committedCode, state.commitCount]);

	useEffect(() => {
		if (!editor) return;
		editor.clearGutter('codelinemarkers');
		state.lintErrors.forEach(({node, message}) => {
			const line = node.loc.start.line - 1;
			editor.setGutterMarker(line, 'codelinemarkers', makeMarker(message));
		});
	}, [editor, state.lintErrors]);

	const releaseItems = React.useMemo(
		() => data.releases.map((id) => ({id, label: id})).reverse(),
		[]
	);

	const autoFixes = React.useMemo(() => {
		const fixesByNode = new Map();
		for (const entry of state.lintErrors) {
			if (typeof entry.fix !== 'string') {
				continue;
			}
			if (!fixesByNode.has(entry.node)) {
				fixesByNode.set(entry.node, []);
			}
			fixesByNode.get(entry.node).push(entry);
		}
		const result = [];
		for (const entries of fixesByNode.values()) {
			if (entries.length === 1) {
				result.push(entries[0]);
			}
		}
		return result;
	}, [state.lintErrors]);

	function commitCode(value) {
		setState((current) => ({
			commitCount: current.count + 1,
			currentCode: value,
			committedCode: value,
			syntaxError: null,
			lintErrors: [],
		}));
	}

	function applyFix(entry) {
		if (jsonAst.invalid(state.currentCode)) {
			window.alert(
				'JSON syntax invalid, fix and re-run validation before continuing'
			);
			return;
		}

		const {node, part, fix} = entry;
		const oldCode = JSON.parse(state.currentCode);
		const newCode = {};
		for (const [k, v] of Object.entries(oldCode)) {
			if (node.key.value === k && node.value.value === v) {
				if (part === 'key') {
					newCode[fix] = v;
				} else {
					newCode[k] = fix;
				}
			} else {
				newCode[k] = v;
			}
		}
		const printedNewCode = JSON.stringify(newCode, null, '  ');
		setState({
			commitCount: 0,
			currentCode: printedNewCode,
			committedCode: printedNewCode,
			syntaxError: null,
			lintErrors: [],
		});
	}

	function applyAutoFixes() {
		if (jsonAst.invalid(state.currentCode)) {
			window.alert(
				'JSON syntax invalid, fix and re-run validation before continuing'
			);
			return;
		}

		const oldCode = JSON.parse(state.currentCode);
		const newCode = {};
		for (const [k, v] of Object.entries(oldCode)) {
			const entry = autoFixes.find(
				(entry) => entry.node.key.value === k && entry.node.value.value === v
			);
			if (!entry) continue;
			const {node, part, fix} = entry;
			if (part === 'key') {
				newCode[fix] = v;
			} else {
				newCode[k] = fix;
			}
		}
		const printedNewCode = JSON.stringify(newCode, null, '  ');
		setState({
			commitCount: 0,
			currentCode: printedNewCode,
			committedCode: printedNewCode,
			syntaxError: null,
			lintErrors: [],
		});
	}

	return (
		<Fragment>
			<PageHeader label="Validator" path={path} selectedPath={selectedPath} />
			<Page>
				<div className="mb-4">
					<div className="flex items-center">
						<Select
							label="Release"
							items={releaseItems}
							selected={selectedRelease}
							onSelect={(id) => setSelectedRelease(id)}
							layout="horizontal"
						/>
						<div className="flex items-center ml-auto">
							<div className="mr-2">
								<StatusFlag
									status={!state.syntaxError ? 'positive' : 'negative'}
									label={!state.syntaxError ? 'Valid JSON' : 'Invalid JSON'}
								/>
							</div>
							<div className="mr-2">
								<StatusFlag
									status={
										state.lintErrors.length === 0 ? 'positive' : 'negative'
									}
									label={
										state.lintErrors.length === 0
											? 'No Errors'
											: `${state.lintErrors.length} Error(s)`
									}
								/>
							</div>

							<Button
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
								onClick={() => commitCode(state.currentCode)}
								size="md">
								Validate
							</Button>
						</div>
					</div>
				</div>
				{CodeMirror && (
					<div
						className={cx({
							'border-2': true,
							'p-1': true,
							'border-white': true,
							'border-red-500':
								state.syntaxError || state.lintErrors.length > 0,
						})}>
						<CodeMirror
							value={state.currentCode}
							options={{
								mode: 'application/json',
								theme: 'material',
								lineNumbers: true,
								gutters: ['CodeMirror-linenumbers', 'codelinemarkers'],
							}}
							onBeforeChange={(editor, data, value) => {
								setState({...state, currentCode: value});
							}}
							onChange={(editor, data, value) => {}}
							editorDidMount={(instance) => setEditor(instance)}
						/>
					</div>
				)}
				<div className="mt-4">
					{state.syntaxError && (
						<div className="text-red-800">
							<p className="font-semibold">
								Invalid JSON, fix the problems identified below:
							</p>
							<div className="bg-gray-400 text-xs p-4 mt-2 overflow-x-auto">
								<pre>
									<code>{state.syntaxError.message}</code>
								</pre>
							</div>
						</div>
					)}
					{state.lintErrors.length > 0 && (
						<div className="text-red-800">
							<div className="flex items-center">
								<p className="text-xl font-semibold">Errors</p>
								<div className="ml-auto">
									{autoFixes.length > 0 && (
										<button
											className="bg-black hover:bg-gray-800 text-white font-bold py-0 px-1 rounded text-xs"
											onClick={() => applyAutoFixes()}>
											Apply {autoFixes.length} Auto{' '}
											{autoFixes.length === 1 ? 'Fix' : 'Fixes'}
										</button>
									)}
								</div>
							</div>
							{state.lintErrors.map((entry, i) => {
								const {node, message, part, fix = ''} = entry;
								const lineNum = String(node.loc.start.line);
								let underline = '';
								let fixUnderline = '';
								underline = pad(underline, lineNum.length + 2, ' ');
								fixUnderline = pad(underline, lineNum.length + 2, ' ');
								if (part === 'key') {
									underline = pad(underline, node.key.raw.length, '^');
									fixUnderline = pad(underline, fix.length, '^');
								} else {
									underline = pad(underline, node.key.raw.length + 2, ' ');
									underline = pad(underline, node.value.raw.length, '^');
									fixUnderline = pad(underline, node.key.raw.length + 2, ' ');
									fixUnderline = pad(underline, fix.length + 2, ' ');
								}
								return (
									<div className="mt-3">
										<p className="mb-2">
											{i + 1}.) {message}
										</p>
										<div className="text-xs bg-red-800 text-white pt-1 pb-1 pl-2 pr-2 uppercase font-semibold">
											Current Code
										</div>
										<div className="bg-gray-400 text-xs p-4 pb-1 text-black overflow-x-auto">
											<pre>
												<code>
													{node.loc.start.line}: {node.key.raw}:{' '}
													{node.value.raw}
													<br />
													{underline}
												</code>
											</pre>
										</div>

										{fix !== '' && (
											<Fragment>
												<div className="text-xs bg-green-800 text-white pt-1 pb-1 pl-2 pr-2 uppercase font-semibold flex">
													<span className="mr-auto">Suggested Fix</span>
													<button
														className="bg-black hover:bg-gray-800 text-white font-bold py-0 px-1 rounded"
														onClick={() => applyFix(entry)}>
														Apply Fix
													</button>
												</div>
												<div className="bg-gray-400 text-xs p-4 pb-1 text-black">
													<pre>
														<code>
															{part === 'key'
																? `${lineNum}: "${fix}": ${node.value.raw}`
																: `${lineNum}: ${node.key.raw}: "${fix}"`}
															<br />
															{underline}
														</code>
													</pre>
												</div>
											</Fragment>
										)}
									</div>
								);
							})}
						</div>
					)}
				</div>
			</Page>
		</Fragment>
	);
}

export function getStaticProps() {
	const data = require('../../data/hooks.json');
	return {props: {data}};
}
