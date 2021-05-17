import React, {Component} from 'react';
import PageHeader from '../../components/PageHeader';
import Page from '../../components/Page';
import Toggle from '../../components/Toggle';
import {generateColorScale} from '../../lib/color-generator/generateColorsP';
import {copyObject} from '../../lib/common/copy';
import cx from '../../lib/cx';
import styles from '../../styles/Home.module.css';
import ColorRangeGenerator from '../../components/colors/ColorRangeGenerator';
import {colorFormulas} from '../../data/color-formulas';

const path = [
	{id: 'colors', href: '/colors', label: 'Colors'},
	{
		id: 'color-generator-advanced',
		href: '/color-generator-advanced',
		label: 'Color Generator Advanced (BETA)',
	},
];
const selectedPath = 'color-generator-advanced';
class ColorGeneratorAdvanced extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isDark: false,
			colors: [...colorFormulas],
		};
	}

	copyColors = () => {
		const out = {};
		this.state.colors.forEach((color) => {
			const newColor = generateColorScale({
				hook: color.hook,
				color: color.light.baseColor,
				lightVariations: Number(color.light.lightVariations),
				lightPercentage: Number(color.light.lightPercentage),
				lightSaturation: Number(color.light.lightSaturation),
				darkVariations: Number(color.light.darkVariations),
				darkPercentage: Number(color.light.darkPercentage),
				darkSaturation: Number(color.light.darkSaturation),
				isDark: color.light.isReverse,
				startIndex: Number(color.light.startIndex),
				includeEnds: color.light.includeEnds,
			});
			newColor.forEach((c) => {
				out[c.name] = c.rgb;
			});
			if (color.light.derived && color.light.derived.length) {
				color.light.derived.forEach((c) => {
					c.group.forEach((group) => {
						out[group.hook] = group.color;
					});
				});
			}
		});

		copyObject(out);
	};

	updateColors = (id, newColorObj) => {
		const newColorFormulas = this.state.colors.map((color) => {
			if (color.label === id) {
				color.light = {
					...color.light,
					...newColorObj,
				};
			}
			return color;
		});
		this.setState({colors: newColorFormulas});
	};

	render() {
		const {isDark} = this.state;

		return (
			<div
				className={cx({
					[styles.dark]: isDark,
				})}>
				<PageHeader
					label="Color Generator Advanced (BETA)"
					path={path}
					selectedPath={selectedPath}
					wide
				/>
				<Page wide>
					<div className="mb-8 flex flex-row-reverse items-center">
						<div>
							<button
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-auto mb-2"
								onClick={this.copyColors}>
								Copy Colors Json
							</button>
							<Toggle
								label="Dark Mode"
								onChange={() =>
									this.setState({isDark: !isDark, isHighContrast: false})
								}
								checked={isDark}
							/>
						</div>
					</div>
					<div>
						{colorFormulas.map((color) => {
							return (
								<div key={color.label}>
									<ColorRangeGenerator
										label={color.label}
										baseColor={color.light.color}
										lightVariations={color.light.lightVariations}
										lightPercentage={color.light.lightPercentage}
										lightSaturation={color.light.lightSaturation}
										darkVariations={color.light.darkVariations}
										darkPercentage={color.light.darkPercentage}
										darkSaturation={color.light.darkSaturation}
										hook={color.hook}
										startIndex={color.light.startIndex}
										includeEnds={color.light.includeEnds}
										onChange={this.updateColors}
										derived={color.light.derived}
									/>
								</div>
							);
						})}
					</div>
				</Page>
			</div>
		);
	}
}

export default ColorGeneratorAdvanced;
