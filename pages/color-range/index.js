import React, {Fragment, useEffect, useState} from 'react';
import Page from '../../components/Page';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Toggle from '../../components/Toggle';
import BaseColorPicker from '../../components/colors/BaseColorPicker';
import ColorSwatch from '../../components/colors/ColorSwatch';
import {generateColorScale} from '../../lib/color-generator/generateColorsP';

const path = [
	{id: 'colors', href: '/colors', label: 'Colors'},
	{id: 'color-range', href: `/color-range`, label: 'Color Range'},
];
const selectedPath = 'color-range';

const renderGeneratedColors = (
	baseColor,
	lightVariations,
	lightPercentage,
	lightSaturation,
	darkVariations,
	darkPercentage,
	darkSaturation,
	isReverse
) => {
	const colors = generateColorScale({
		color: baseColor,
		lightVariations: Number(lightVariations),
		lightPercentage: Number(lightPercentage),
		lightSaturation: Number(lightSaturation),
		darkVariations: Number(darkVariations),
		darkPercentage: Number(darkPercentage),
		darkSaturation: Number(darkSaturation),
		isReverse,
	});

	return <ColorSwatch items={colors} hideName />;
};

const ColorRange = () => {
	const [baseColor, setBaseColor] = useState('#4F5664');
	const [lightVariations, setLightVariations] = useState('10');
	const [lightPercentage, setLightPercentage] = useState('.95');
	const [lightSaturation, setLightSaturation] = useState('1');
	const [darkVariations, setDarkVariations] = useState('9');
	const [darkPercentage, setDarkPercentage] = useState('.9');
	const [darkSaturation, setDarkSaturation] = useState('1');
	const [isReverse, setReverse] = useState(false);

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const base = urlParams.get('baseColor');
		const lightV = urlParams.get('lightVariations');
		const lightP = urlParams.get('lightPercentage');
		const lightS = urlParams.get('lightSaturation');
		const darkV = urlParams.get('darkVariations');
		const darkP = urlParams.get('darkPercentage');
		const darkS = urlParams.get('darkSaturation');
		const rev = urlParams.get('reverse');

		if (base && lightV && lightP && lightS && darkV && darkP && darkS) {
			setBaseColor(base);
			setLightVariations(lightV);
			setLightPercentage(lightP);
			setLightSaturation(lightS);
			setDarkVariations(darkV);
			setDarkPercentage(darkP);
			setDarkSaturation(darkS);
			setReverse(Boolean(String(rev) === 'true'));
		}
	}, []);

	useEffect(() => {
		const searchParams = new URLSearchParams();
		searchParams.set('baseColor', baseColor);
		searchParams.set('lightVariations', lightVariations);
		searchParams.set('lightPercentage', lightPercentage);
		searchParams.set('lightSaturation', lightSaturation);
		searchParams.set('darkVariations', darkVariations);
		searchParams.set('darkPercentage', darkPercentage);
		searchParams.set('darkSaturation', darkSaturation);
		searchParams.set('reverse', isReverse);

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
		lightSaturation,
		darkVariations,
		darkPercentage,
		darkSaturation,
		isReverse,
	]);

	return (
		<Fragment>
			<PageHeader
				label="Color Range"
				path={path}
				selectedPath={selectedPath}
				size="xl"
			/>
			<Page size="xl">
				<div className="mb-8">
					{renderGeneratedColors(
						baseColor,
						lightVariations,
						lightPercentage,
						lightSaturation,
						darkVariations,
						darkPercentage,
						darkSaturation,
						isReverse
					)}
				</div>
				<div className="grid grid-cols-7 gap-3">
					<div>
						<Input
							label="Light Variations"
							value={lightVariations}
							placeholder="3"
							onChange={(value) => setLightVariations(value)}
						/>
					</div>
					<div>
						<Input
							label="Light Percentage"
							value={lightPercentage}
							placeholder=".95"
							onChange={(value) => setLightPercentage(value)}
						/>
						<input
							type="range"
							min="0"
							max="1"
							value={lightPercentage}
							step="0.01"
							onChange={(e) => setLightPercentage(e.target.value)}
						/>
					</div>
					<div>
						<Input
							label="Light Saturation"
							value={lightSaturation}
							placeholder=".95"
							onChange={(value) => setLightSaturation(value)}
						/>
						<input
							type="range"
							min="0"
							max="1"
							value={lightSaturation}
							step="0.01"
							onChange={(e) => setLightSaturation(e.target.value)}
						/>
					</div>
					<div>
						<BaseColorPicker
							label="Base Color"
							value={baseColor}
							position="middle"
							onChange={(color) => setBaseColor(color)}
						/>
					</div>
					<div>
						<Input
							label="Dark Variations"
							value={darkVariations}
							placeholder="3"
							onChange={(value) => setDarkVariations(value)}
						/>
					</div>
					<div>
						<Input
							label="Dark Percentage"
							value={darkPercentage}
							placeholder=".95"
							onChange={(value) => setDarkPercentage(value)}
						/>
						<input
							type="range"
							min="0"
							max="1"
							value={darkPercentage}
							step="0.01"
							onChange={(e) => setDarkPercentage(e.target.value)}
						/>
					</div>
					<div>
						<Input
							label="Dark Saturation"
							value={darkSaturation}
							placeholder=".95"
							onChange={(value) => setDarkSaturation(value)}
						/>
						<input
							type="range"
							min="0"
							max="1"
							value={darkSaturation}
							step="0.01"
							onChange={(e) => setDarkSaturation(e.target.value)}
						/>
					</div>
					<Toggle
						label="Reverse"
						checked={isReverse}
						onChange={() => setReverse(!isReverse)}
					/>
				</div>
			</Page>
		</Fragment>
	);
};

export default ColorRange;
