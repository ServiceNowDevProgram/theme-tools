import React, {Fragment, useEffect, useState} from 'react';
import Page from '../../components/Page';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import BaseColorPicker from '../../components/colors/BaseColorPicker';
// import CopyValue from '../../components/CopyValue';
import ColorSwatch from '../../components/colors/ColorSwatch';

import {generateColorRange} from '../../lib/color-generator/generateColors';

const path = [
	{id: 'color-tools', href: '/color-tools', label: 'Color Tools'},
	{id: 'color-range', href: `/color-range`, label: 'Color Range'},
];
const selectedPath = 'color-range';

const renderGeneratedColors = (
	baseColor,
	lightVariations,
	lightPercentage,
	darkVariations,
	darkPercentage
) => {
	const colors = generateColorRange({
		color: baseColor,
		lightVariations: Number(lightVariations),
		lightPercentage: Number(lightPercentage),
		darkVariations: Number(darkVariations),
		darkPercentage: Number(darkPercentage),
	});

	return <ColorSwatch items={colors} />;
};

const ColorRange = () => {
	const [baseColor, setBaseColor] = useState('#1e856d');
	const [lightVariations, setLightVariations] = useState('3');
	const [lightPercentage, setLightPercentage] = useState('.95');
	const [darkVariations, setDarkVariations] = useState('3');
	const [darkPercentage, setDarkPercentage] = useState('.95');

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const base = urlParams.get('baseColor');
		const lightV = urlParams.get('lightVariations');
		const lightP = urlParams.get('lightPercentage');
		const darkV = urlParams.get('darkVariations');
		const darkP = urlParams.get('darkPercentage');

		if (base && lightV && lightP && darkV && darkP) {
			setBaseColor(base);
			setLightVariations(lightV);
			setLightPercentage(lightP);
			setDarkVariations(darkV);
			setDarkPercentage(darkP);
		}
	}, []);

	useEffect(() => {
		const searchParams = new URLSearchParams();
		searchParams.set('baseColor', baseColor);
		searchParams.set('lightVariations', lightVariations);
		searchParams.set('lightPercentage', lightPercentage);
		searchParams.set('darkVariations', darkVariations);
		searchParams.set('darkPercentage', darkPercentage);

		let newurl =
			window.location.protocol +
			'//' +
			window.location.host +
			window.location.pathname +
			'?' +
			searchParams.toString();
		window.history.replaceState({path: newurl}, '', newurl);
	}, [
		baseColor,
		lightVariations,
		lightPercentage,
		darkVariations,
		darkPercentage,
	]);

	return (
		<Fragment>
			<PageHeader
				label="Color Range"
				path={path}
				selectedPath={selectedPath}
				wide
			/>
			<Page wide>
				<div className="mb-8">
					{renderGeneratedColors(
						baseColor,
						lightVariations,
						lightPercentage,
						darkVariations,
						darkPercentage
					)}
				</div>
				<div className="grid grid-cols-5 gap-4">
					<Input
						label="Light Variations"
						value={lightVariations}
						placeholder="3"
						onChange={(value) => setLightVariations(value)}
					/>
					<Input
						label="Light Percentage"
						value={lightPercentage}
						placeholder=".95"
						onChange={(value) => setLightPercentage(value)}
					/>
					<BaseColorPicker
						label="Base Color"
						value={baseColor}
						position="middle"
						onChange={(color) => setBaseColor(color)}
					/>
					<Input
						label="Dark Variations"
						value={darkVariations}
						placeholder="3"
						onChange={(value) => setDarkVariations(value)}
					/>
					<Input
						label="Dark Percentage"
						value={darkPercentage}
						placeholder=".95"
						onChange={(value) => setDarkPercentage(value)}
					/>
				</div>
			</Page>
		</Fragment>
	);
};

export default ColorRange;
