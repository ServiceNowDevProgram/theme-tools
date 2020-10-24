import React, {Fragment, useState, useEffect} from 'react';
import {renderToString} from 'react-dom/server';
import dynamic from 'next/dynamic';
import PageHeader from '../../components/PageHeader';
import Page from '../../components/Page';
import jsonAst from '../../lib/jsonAst';
import {isValidHexString, hexToRgb} from '../../lib/color';
import tippy from 'tippy.js';
import data from '../../data/hooks.json';
import {values} from 'lodash';

const CodeMirror = dynamic(
	async () => {
		const mod = await import('react-codemirror2');
		await import('codemirror/mode/javascript/javascript');
		return mod.Controlled;
	},
	{ssr: false}
);

if (typeof window !== 'undefined') {
	window.jsonAst = jsonAst;
}

const fakeData = JSON.stringify(
	{
		'--now-color--primary-0': '1,1,1',
		'--now-color--foo': '1,1,1',
	},
	null,
	'  '
);

function findDefinition(id) {
	if (id.startsWith('--now')) {
		id = id.replace(/^--/, '');
	}
	const hook = Object.values(data.hooks).find((x) => x.definitions[id]);
	return hook ? hook.definitions[id] : null;
}

function validate(source) {
	const ast = jsonAst.parse(source);
	const errors = [];
	for (const node of ast.children) {
		const err = (message) => errors.push({node, message});
		const name = node.key;
		const value = node.value;
		if (name.value.startsWith('now')) {
			err(`Hook names should start with "--now", update to "--${name.value}"`);
			continue;
		}
		if (value.value.startsWith('$now')) {
			err(
				`Reference values should start with "--" not "$", update to "--${value.value.slice(
					1
				)}"`
			);
			continue;
		}
		const def = findDefinition(name.value);
		if (def) {
			if (def.schema === 'color' && isValidHexString(value.value)) {
				err(
					`Colors should be in RGB format, update to "${hexToRgb(value.value)}"`
				);
				continue;
			}
			if (def.schema === 'color' && !isValidHexString(value.value)) {
				err(
					`Hook expects a color value in RGB format (e.g. "1,2,3") but received "${value.value}"`
				);
				continue;
			}
		}
	}
	return errors;
}

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

export default function ValidatorPage({releases}) {
	const path = [{id: 'validator', href: '/validator', label: 'Validator'}];
	const selectedPath = 'validator';

	const [code, setCode] = useState(fakeData);
	const [syntaxError, setSyntaxError] = useState(null);
	const [lintErrors, setLintErrors] = useState([]);
	const [editor, setEditor] = useState(null);

	useEffect(() => {
		if (editor) {
			window.editor = editor;
		}
	}, [editor]);

	function runValidation() {
		editor.clearGutter('codelinemarkers');

		const syntax = jsonAst.invalid(code);
		if (syntax) {
			setSyntaxError(syntax);
			setLintErrors([]);
			return;
		}

		const errors = validate(code);
		errors.forEach(({node, message}) => {
			const line = node.loc.start.line - 1;
			editor.setGutterMarker(line, 'codelinemarkers', makeMarker(message));
		});
		setSyntaxError(null);
		setLintErrors(errors);
	}

	return (
		<Fragment>
			<PageHeader label="Validator" path={path} selectedPath={selectedPath} />
			<Page>
				{CodeMirror && (
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
				)}
				<div className="mt-4">
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						onClick={runValidation}>
						Validate
					</button>
				</div>
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
							{lintErrors.map(({node, message}) => {
								return (
									<div className="bg-gray-400 text-xs p-4 mt-2">
										<code>
											{'>'} {node.key.raw}: {node.value.raw}
											<br />
											Line: {node.loc.start.line}
											<br />
											Error: {message}
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
