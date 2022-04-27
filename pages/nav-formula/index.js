import React, {Fragment, useState, useEffect} from 'react';
import dynamic from 'next/dynamic';

import Page from '../../components/Page';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import ColorSwatch from '../../components/colors/ColorSwatch';
import BaseColorPicker from '../../components/colors/BaseColorPicker';

import {
	getContrastRatio,
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
const INITIAL_COLORS = {
	colorGroups: {neutrals: [], chromeBrand: [], chromeDivider: []},
	json: {},
};

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
					<div style={{width: '300px'}}>
						<BaseColorPicker
							value={brandPrimary}
							onChange={(value) => setBrandPrimary(value)}
							position="middle"
						/>
					</div>
					<p className="mt-8">Neutrals</p>
					<ColorSwatch items={colors.colorGroups.neutrals} />
					<p className="mt-8">Chrome Brand</p>
					<ColorSwatch items={colors.colorGroups.chromeBrand} />
					<p className="mt-8">Chrome Divider</p>
					<ColorSwatch items={colors.colorGroups.chromeDivider} />

					{CodeMirror && (
						<CodeMirror
							className="mt-8"
							value={JSON.stringify(colors.json, ' ', 4)}
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
