import React, {Fragment, useState, useEffect} from 'react';
import dynamic from 'next/dynamic';

import Page from '../../components/Page';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import ColorSwatch from '../../components/colors/ColorSwatch';

import {
	getNavHooksFromBrandPrimary,
	isHex,
} from '../../lib/color-generator/generateColorsP';

const CodeMirror = dynamic(
	async () => {
		const mod = await import('react-codemirror2');
		await import('codemirror/mode/javascript/javascript');
		return mod.Controlled;
	},
	{ssr: false}
);

const path = [
	{id: 'colors', href: '/colors', label: 'Colors'},
	{id: 'nav-formula', href: `/nav-formula`, label: 'Nav Formula'},
];

const selectedPath = 'nav-formula';
const INITIAL_COLORS = {chromeBrand: [], chromeDivider: []};

const NavFormula = () => {
	const [brandPrimary, setBrandPrimary] = useState('');
	const [colors, setColors] = useState(INITIAL_COLORS);

	useEffect(() => {
		if (isHex(brandPrimary)) {
			setColors(getNavHooksFromBrandPrimary(brandPrimary));
		} else {
			setColors(INITIAL_COLORS);
		}
	}, [brandPrimary]);

	const json = {
		...colors.chromeBrand.reduce((acc, val) => {
			acc[val.name] = val.hex;
			return acc;
		}, {}),
		...colors.chromeDivider.reduce((acc, val) => {
			acc[val.name] = val.hex;
			return acc;
		}, {}),
	};

	return (
		<Fragment>
			<PageHeader
				label="Nav Formula"
				path={path}
				selectedPath={selectedPath}
				size="xl"
			/>
			<Page size="xl">
				<div>
					<Input
						placeholder="Brand Primary"
						value={brandPrimary}
						onChange={(value) => setBrandPrimary(value)}
					/>
					<p className="mt-8">Chrome Brand</p>
					<ColorSwatch items={colors.chromeBrand} />
					<p className="mt-8">Chrome Divider</p>
					<ColorSwatch items={colors.chromeDivider} />

					{CodeMirror && (
						<CodeMirror
							className="mt-8"
							value={JSON.stringify(json, ' ', 4)}
							options={{
								mode: 'application/json',
								theme: 'material',
								lineNumbers: true,
								readOnly: true,
								gutters: ['CodeMirror-linenumbers', 'codelinemarkers'],
							}}
							smartIndent
							onBeforeChange={(editor, data, value) => {
								// setJson(value);
								// this.setState({
								// 	selectedTheme: {...selectedTheme, theme: value},
								// });
							}}
						/>
					)}
				</div>
			</Page>
		</Fragment>
	);
};

export default NavFormula;
