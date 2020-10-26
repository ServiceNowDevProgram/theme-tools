import React, {Fragment, useState, useEffect} from 'react';
import {renderToString} from 'react-dom/server';
import dynamic from 'next/dynamic';
import PageHeader from '../../components/PageHeader';
import Page from '../../components/Page';
import Select from '../../components/Select';
import jsonAst from '../../lib/jsonAst';
import cx from '../../lib/cx';
import tippy from 'tippy.js';
import {runRules} from '../../lib/validateRules';

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

export default function ValidatorPage({data}) {
	const path = [{id: 'validator', href: '/validator', label: 'Validator'}];
	const selectedPath = 'validator';

	const [code, setCode] = useState(fakeData);
	const [syntaxError, setSyntaxError] = useState(null);
	const [lintErrors, setLintErrors] = useState([]);
	const [editor, setEditor] = useState(null);
	const [selectedRelease, setSelectedRelease] = useState(
		data.releases.slice(-1)[0]
	);

	useEffect(() => {
		if (editor) {
			window.editor = editor;
		}
	}, [editor]);

	const releaseItems = React.useMemo(
		() => data.releases.map((id) => ({id, label: id})).reverse(),
		[]
	);

	function runValidation() {
		editor.clearGutter('codelinemarkers');

		const syntax = jsonAst.invalid(code);
		if (syntax) {
			setSyntaxError(syntax);
			setLintErrors([]);
			return;
		}

		const formattedCode = JSON.stringify(JSON.parse(code), null, '  ');
		setCode(formattedCode);

		setTimeout(() => {
			const result = runRules(formattedCode, {release: selectedRelease}, data);
			result.errors.forEach(({node, message}) => {
				const line = node.loc.start.line - 1;
				editor.setGutterMarker(line, 'codelinemarkers', makeMarker(message));
			});
			setSyntaxError(null);
			setLintErrors(result.errors);
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
						/>
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto"
							onClick={runValidation}>
							Validate
						</button>
					</div>
				</div>
				{CodeMirror && (
					<div
						className={cx({
							'border-2': true,
							'p-1': true,
							'border-white': true,
							'border-red-500': syntaxError || lintErrors.length > 0,
						})}>
						<CodeMirror
							value={code}
							options={{
								mode: 'application/json',
								theme: 'material',
								lineNumbers: true,
								gutters: ['CodeMirror-linenumbers', 'codelinemarkers'],
							}}
							onBeforeChange={(editor, data, value) => {
								setCode(value);
							}}
							onChange={(editor, data, value) => {}}
							editorDidMount={(instance) => setEditor(instance)}
						/>
					</div>
				)}
				<div className="mt-4">
					{syntaxError && (
						<div className="text-red-800">
							<p className="font-semibold">
								❌ Invalid JSON, fix the problems identified below:
							</p>
							<div className="bg-gray-400 text-xs p-4 mt-2">
								<pre>
									<code>{syntaxError.message}</code>
								</pre>
							</div>
						</div>
					)}
					{!syntaxError && (
						<div className="text-green-600">
							<p className="font-semibold">✅ JSON syntax is valid</p>
						</div>
					)}
					{lintErrors.length > 0 && (
						<div className="text-red-800">
							<p className="font-semibold">
								❌ Found {lintErrors.length}{' '}
								{lintErrors.length === 1 ? 'error' : 'errors'}:
							</p>
							{lintErrors.map(({node, message, part, fix}) => {
								return (
									<div className="bg-gray-400 text-xs p-4 mt-2">
										<code>
											{node.loc.start.line}: {node.key.raw}: {node.value.raw}
											<br />
											ERROR IN {part.toUpperCase()}: {message}
											{fix && (
												<Fragment>
													<br />
													SUGGESTED FIX: "{node[part].value}" {'>'} "{fix}"
												</Fragment>
											)}
										</code>
									</div>
								);
							})}
						</div>
					)}
					{!syntaxError && lintErrors.length === 0 && (
						<div className="text-green-600">
							<p className="font-semibold">✅ Found no errors</p>
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
