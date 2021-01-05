import React, {Fragment, useState, useEffect} from 'react';
import PageHeader from '../../components/PageHeader';
import Page from '../../components/Page';
import BaseColorPicker from '../../components/colors/BaseColorPicker';

import {getContrastRatio} from '../../lib/color-generator/generateColors';
import cx from '../../lib/cx';

const path = [
	{id: 'colors', href: '/colors', label: 'Colors'},
	{
		id: 'contrast-checker',
		href: '/contrast-checker',
		label: 'Contrast Checker',
	},
];
const selectedPath = 'contrast-checker';

const Box = ({children, color, backgroundColor, size = '14px'}) => {
	return (
		<div
			className="rounded inline-flex items-center px-4 py-2 ml-auto"
			style={{color, backgroundColor, fontSize: size}}>
			{children}
		</div>
	);
};

const renderRatios = (foregroundColor, backgroundColor) => {
	const {ratio, normal, large} = getContrastRatio(
		foregroundColor,
		backgroundColor
	);

	return (
		<div>
			<p className="text-xl">Contrast Ratio</p>
			<p className="text-4xl mb-6 font-bold">{`${ratio} : 1`}</p>
			<p className="text-xl mb-3">Normal text</p>
			<div className="flex mb-4 justify-betwen">
				<div className="mr-8">
					<div className="flex">
						<p className="mr-3">WCAG AA</p>
						<p
							className={cx({
								'ml-auto': true,
								'mb-2': true,
								rounded: true,
								'inline-flex': true,
								'items-center': true,
								'px-2': true,
								'py-1': true,
								'bg-green-200': normal.aa === 'Pass',
								'bg-red-200': normal.aa === 'Fail',
							})}>
							{normal.aa}
						</p>
					</div>
					<div className="flex">
						<p>WCAG AAA</p>
						<span
							className={cx({
								'ml-2': true,
								rounded: true,
								'inline-flex': true,
								'items-center': true,
								'px-2': true,
								'py-1': true,
								'bg-green-200': normal.aaa === 'Pass',
								'bg-red-200': normal.aaa === 'Fail',
							})}>
							{normal.aaa}
						</span>
					</div>
				</div>
				<Box color={foregroundColor} backgroundColor={backgroundColor}>
					This is normal text
				</Box>
			</div>

			<p className="text-xl mb-3">Large text</p>
			<div className="flex mb-4 justify-betwen">
				<div className="mr-8">
					<div className="flex">
						<p className="mr-3">WCAG AA</p>
						<p
							className={cx({
								'ml-auto': true,
								'mb-2': true,
								rounded: true,
								'inline-flex': true,
								'items-center': true,
								'px-2': true,
								'py-1': true,
								'bg-green-200': large.aa === 'Pass',
								'bg-red-200': large.aa === 'Fail',
							})}>
							{large.aa}
						</p>
					</div>
					<div className="flex">
						<p>WCAG AAA</p>
						<p
							className={cx({
								'ml-2': true,
								rounded: true,
								'inline-flex': true,
								'items-center': true,
								'px-2': true,
								'py-1': true,
								'bg-green-200': large.aaa === 'Pass',
								'bg-red-200': large.aaa === 'Fail',
							})}>
							{large.aaa}
						</p>
					</div>
				</div>
				<Box
					color={foregroundColor}
					backgroundColor={backgroundColor}
					size="18px">
					This is large text
				</Box>
			</div>
		</div>
	);
};

const ContrastChecker = () => {
	const [foregroundColor, setForegroundColor] = useState('#ffffff');
	const [backgroundColor, setBackgroundColor] = useState('#000000');

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const foreground = urlParams.get('foregroundColor');
		const background = urlParams.get('backgroundColor');

		if (foreground && background) {
			setForegroundColor(foreground);
			setBackgroundColor(background);
		}
	}, []);

	useEffect(() => {
		const searchParams = new URLSearchParams();
		searchParams.set('foregroundColor', foregroundColor);
		searchParams.set('backgroundColor', backgroundColor);

		let newurl =
			window.location.protocol +
			'//' +
			window.location.host +
			window.location.pathname +
			'?' +
			searchParams.toString();
		window.history.replaceState({path: newurl}, '', newurl);
	}, [foregroundColor, backgroundColor]);

	return (
		<Fragment>
			<PageHeader
				label="Contrast Checker"
				path={path}
				selectedPath={selectedPath}
			/>
			<Page>
				<div className="flex justify-between">
					<div className="mr-40">
						<div className="mb-3">
							<BaseColorPicker
								name="foreground color"
								label="Foreground Color"
								value={foregroundColor}
								onChange={(e) => setForegroundColor(e)}
								position="middle"
							/>
						</div>
						<div>
							<BaseColorPicker
								name="background color"
								label="Background Color"
								value={backgroundColor}
								onChange={(e) => setBackgroundColor(e)}
								position="middle"
							/>
						</div>
					</div>
					{renderRatios(foregroundColor, backgroundColor)}
				</div>
			</Page>
		</Fragment>
	);
};

export default ContrastChecker;
