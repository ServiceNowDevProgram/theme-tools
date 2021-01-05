import React, {Fragment, useEffect, useState} from 'react';
import PageHeader from '../../components/PageHeader';
import Page from '../../components/Page';
import BaseColorPicker from '../../components/colors/BaseColorPicker';
import Input from '../../components/Input';
import {getComplimentaryColors} from '../../lib/color-generator/generateColors';
import CopyValue from '../../components/CopyValue';

const path = [
	{id: 'colors', href: '/colors', label: 'Colors'},
	{
		id: 'complimentary-colors',
		href: `/complimentary-colors`,
		label: 'Complimentary Colors',
	},
];
const selectedPath = 'complimentary-colors';

const renderGeneratedColors = (baseColor, variations) => {
	const colors = getComplimentaryColors(baseColor, variations);

	if (colors && colors.length) {
		return colors.map((color, i) => {
			return (
				<div className="flex-1" title={color.name} key={color.hex + i}>
					<div style={{height: '80px', backgroundColor: color.hex}}></div>
					<CopyValue value={color.hex}>
						<small style={{fontSize: '10px'}}>{color.hex}</small>
					</CopyValue>
				</div>
			);
		});
	} else {
		return (
			<div className="flex-1">
				<div style={{height: '80px', backgroundColor: '#f5f5f5'}}></div>
			</div>
		);
	}
};

const ComplimentaryColors = () => {
	const [baseColor, setBaseColor] = useState('#66a0ce');
	const [variations, setVariations] = useState('5');

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const base = urlParams.get('baseColor');
		const vars = urlParams.get('variations');

		if (base && vars) {
			setBaseColor(base);
			setVariations(vars);
		}
	}, []);

	useEffect(() => {
		const searchParams = new URLSearchParams();
		searchParams.set('baseColor', baseColor);
		searchParams.set('variations', variations);

		let newurl =
			window.location.protocol +
			'//' +
			window.location.host +
			window.location.pathname +
			'?' +
			searchParams.toString();
		window.history.replaceState({path: newurl}, '', newurl);
	}, [baseColor, variations]);

	return (
		<Fragment>
			<PageHeader
				label="Complimentary Colors"
				path={path}
				selectedPath={selectedPath}
				wide
			/>
			<Page wide>
				<div className="grid grid-cols-4 gap-4 mb-5">
					<BaseColorPicker
						value={baseColor}
						label="Base color"
						onChange={(color) => setBaseColor(color)}
						position="middle"
					/>
					<Input
						label="Variations"
						value={variations}
						onChange={(value) => setVariations(value)}
					/>
				</div>
				<div className="flex">
					{renderGeneratedColors(baseColor, variations)}
				</div>
			</Page>
		</Fragment>
	);
};

export default ComplimentaryColors;
