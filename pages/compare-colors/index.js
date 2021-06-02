import React, {Fragment, useEffect, useState} from 'react';
import Page from '../../components/Page';
import PageHeader from '../../components/PageHeader';
import dynamic from 'next/dynamic';

const path = [
	{id: 'colors', href: '/colors', label: 'Colors'},
	{id: 'compare-colors', href: `/compare-colors`, label: 'Compare Colors'},
];

const selectedPath = 'compare-colors';

const CodeMirror = dynamic(
	async () => {
		const mod = await import('react-codemirror2');
		await import('codemirror/mode/javascript/javascript');
		return mod.Controlled;
	},
	{ssr: false}
);

const orderJson = (json) => {
	return Object.keys(json)
		.sort()
		.reduce((obj, key) => {
			obj[key] = json[key];
			return obj;
		}, {});
};

const renderColors = (json1, json2) => {
	if (!json1 || !json2) return null;

	try {
		JSON.parse(json1);
		JSON.parse(json2);
	} catch (e) {
		return null;
	}

	let colors = [];
	const parsedJson1 = JSON.parse(json1);
	const parsedJson2 = JSON.parse(json2);

	for (let i in parsedJson1) {
		colors.push({
			name: i,
			color1: parsedJson1[i],
			color2: parsedJson2[i],
		});
	}

	return (
		<div className="flex">
			<div className="flex-1">
				{colors.map((color) => {
					return (
						<div
							key={color.name}
							className="flex flex-row-reverse items-center">
							<div
								style={{
									backgroundColor: `RGB(${color.color1})`,
									width: '300px',
									height: '100px',
								}}
								className="ml-8"></div>
							<div className="flex flex-col">
								<p>{color.name}</p>
								<p style={{textAlign: 'right'}}>{color.color1}</p>
							</div>
						</div>
					);
				})}
			</div>

			<div className="flex-1">
				{colors.map((color) => {
					return (
						<div key={color.name} className="flex items-center">
							<div
								style={{
									backgroundColor: `rgb(${color.color2})`,
									width: '300px',
									height: '100px',
								}}
								className="mr-8"></div>
							<div>
								<p>{color.name}</p>
								<p>{color.color2}</p>
								{color.color1 !== color.color2 ? (
									<div
										style={{
											width: '300px',
											height: '3px',
											backgroundColor: 'red',
										}}></div>
								) : null}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

const CompareColors = () => {
	const [json1, setJson1] = useState('{}');
	const [json2, setJson2] = useState('{}');

	return (
		<Fragment>
			<PageHeader
				label="Compare Colors"
				path={path}
				selectedPath={selectedPath}
				size="xxl"
			/>

			<Page size="xxl">
				<Fragment>
					{CodeMirror && (
						<div className="flex">
							<CodeMirror
								className="flex-1 mr-4 mb-16"
								value={json1}
								options={{
									mode: 'application/json',
									theme: 'material',
									lineNumbers: true,
									gutters: ['CodeMirror-linenumbers', 'codelinemarkers'],
								}}
								smartIndent
								onBeforeChange={(editor, data, value) => {
									setJson1(value);
								}}
							/>
							<CodeMirror
								className="flex-1"
								value={json2}
								options={{
									mode: 'application/json',
									theme: 'material',
									lineNumbers: true,
									gutters: ['CodeMirror-linenumbers', 'codelinemarkers'],
								}}
								smartIndent
								onBeforeChange={(editor, data, value) => {
									setJson2(value);
								}}
							/>
						</div>
					)}

					{renderColors(json1, json2)}
				</Fragment>
			</Page>
		</Fragment>
	);
};

export default CompareColors;
