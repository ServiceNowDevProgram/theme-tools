import React, {Component, Fragment} from 'react';
import Input from '../Input';
import {
	getNeutralBaseColorFromColor,
	generateColorScale,
} from '../../lib/color-generator/generateColorsP';
import ColorSwatch from './ColorSwatch';
import BaseColorPicker from './BaseColorPicker';
import Select from '../Select';
import {renderRatios} from '../../pages/contrast-checker';

class NeutralsChecker extends Component {
	constructor(props) {
		super(props);

		this.state = {
			label: props.label,
			baseColor: props.baseColor,
			lightVariations: Number(props.lightVariations),
			lightPercentage: Number(props.lightPercentage),
			lightSaturation: Number(props.lightSaturation),
			darkVariations: Number(props.darkVariations),
			darkPercentage: Number(props.darkPercentage),
			darkSaturation: Number(props.darkSaturation),
			hook: props.hook,
			newBaseColor: getNeutralBaseColorFromColor(props.baseColor),
			isA11yCheckOpen: false,
			selectedA11yColor: '',
			selectedA11yColor2: '#000000',
		};
	}

	onBrandColorChange = (color) => {
		const newColor = getNeutralBaseColorFromColor(color);
		this.setState({
			baseColor: color,
			newBaseColor: newColor,
		});
	};

	openA11y = () => {
		if (!this.state.isA11yCheckOpen) {
			this.setState({
				isA11yCheckOpen: true,
				selectedA11yColor: '',
			});
		} else {
			this.setState({
				isA11yCheckOpen: false,
				selectedA11yColor: '',
			});
		}
	};

	renderA11yCheck = (colors) => {
		let derived = [];
		colors.forEach((color, index) => {
			switch (index) {
				case 0:
					derived.push({
						id: Math.random() * Date.now(),
						label: `background primary ${color.customProperty}`,
						value: `${color.hex}`,
						order: 4,
					});
					derived.push({
						id: Math.random() * Date.now(),
						label: `text primary actionable ${color.customProperty}`,
						value: `${color.hex}`,
						order: 13,
					});
					derived.push({
						id: Math.random() * Date.now(),
						label: `DARK - text primary ${color.customProperty}`,
						value: `${color.hex}`,
						order: 22,
					});
					derived.push({
						id: Math.random() * Date.now(),
						label: `DARK background primary actionable ${color.customProperty}`,
						value: `${color.hex}`,
						order: 37,
					});
					derived.push({
						id: Math.random() * Date.now(),
						label: `DARK border primary actionable ${color.customProperty}`,
						value: `${color.hex}`,
						order: 40,
					});
					break;
				case 1:
					derived.push({
						id: Math.random() * Date.now(),
						label: `background secondary ${color.customProperty}`,
						value: `${color.hex}`,
						order: 5,
					});
					derived.push({
						id: Math.random() * Date.now(),
						label: `text secondary actionable ${color.customProperty}`,
						value: `${color.hex}`,
						order: 14,
					});
					break;
				case 2:
					derived.push({
						id: Math.random() * Date.now(),
						label: `background tertiary ${color.customProperty}`,
						value: `${color.hex}`,
						order: 6,
					});
					derived.push({
						id: Math.random() * Date.now(),
						label: `text tertiary actionable ${color.customProperty}`,
						value: `${color.hex}`,
						order: 15,
					});
					break;
				case 3:
					derived.push({
						id: Math.random() * Date.now(),
						label: `border tertiary ${color.customProperty}`,
						value: `${color.hex}`,
						order: 9,
					});
					derived.push({
						id: Math.random() * Date.now(),
						label: `divider tertiary ${color.customProperty}`,
						value: `${color.hex}`,
						order: 12,
					});
					break;
				case 4:
					derived.push({
						id: Math.random() * Date.now(),
						label: `DARK text secondary ${color.customProperty}`,
						value: `${color.hex}`,
						order: 23,
					});
					derived.push({
						id: Math.random() * Date.now(),
						label: `DARK background secondary actionable ${color.customProperty}`,
						value: `${color.hex}`,
						order: 38,
					});
					derived.push({
						id: Math.random() * Date.now(),
						label: `DARK border secondary actionable ${color.customProperty}`,
						value: `${color.hex}`,
						order: 41,
					});
					break;
				case 5:
					derived.push({
						id: Math.random() * Date.now(),
						label: `border secondary ${color.customProperty}`,
						value: `${color.hex}`,
						order: 8,
					});
					derived.push({
						id: Math.random() * Date.now(),
						label: `divider secondary ${color.customProperty}`,
						value: `${color.hex}`,
						order: 11,
					});
					break;
				case 7:
					derived.push({
						id: Math.random() * Date.now(),
						label: `border primary ${color.customProperty}`,
						value: `${color.hex}`,
						order: 7,
					});
					derived.push({
						id: Math.random() * Date.now(),
						label: `divider primary ${color.customProperty}`,
						value: `${color.hex}`,
						order: 10,
					});
					derived.push({
						id: Math.random() * Date.now(),
						label: `DARK text tertiary ${color.customProperty}`,
						value: `${color.hex}`,
						order: 24,
					});
					derived.push({
						id: Math.random() * Date.now(),
						label: `DARK background tertiary actionable ${color.customProperty}`,
						value: `${color.hex}`,
						order: 39,
					});
					derived.push({
						id: Math.random() * Date.now(),
						label: `DARK border tertiary actionable ${color.customProperty}`,
						value: `${color.hex}`,
						order: 42,
					});
					break;
				case 8:
					derived.push({
						id: Math.random() * Date.now(),
						label: `DARK border primary ${color.customProperty}`,
						value: `${color.hex}`,
						order: 28,
					});
					break;
				case 10:
					derived.push({
						id: Math.random() * Date.now(),
						label: `DARK border secondary ${color.customProperty}`,
						value: `${color.hex}`,
						order: 29,
					});
					derived.push({
						id: Math.random() * Date.now(),
						label: `DARK divider primary ${color.customProperty}`,
						value: `${color.hex}`,
						order: 31,
					});
					break;
				case 12:
					derived.push({
						id: Math.random() * Date.now(),
						label: `background tertiary actionable ${color.customProperty}`,
						value: `${color.hex}`,
						order: 18,
					});
					derived.push({
						id: Math.random() * Date.now(),
						label: `border tertiary actionable ${color.customProperty}`,
						value: `${color.hex}`,
						order: 21,
					});
					derived.push({
						id: Math.random() * Date.now(),
						label: `text tertiary ${color.customProperty}`,
						value: `${color.hex}`,
						order: 3,
					});
					derived.push({
						id: Math.random() * Date.now(),
						label: `DARK border tertiary ${color.customProperty}`,
						value: `${color.hex}`,
						order: 30,
					});
					derived.push({
						id: Math.random() * Date.now(),
						label: `DARK divider secondary ${color.customProperty}`,
						value: `${color.hex}`,
						order: 32,
					});
					break;
				case 14:
					derived.push({
						id: Math.random() * Date.now(),
						label: `DARK divider tertiary ${color.customProperty}`,
						value: `${color.hex}`,
						order: 33,
					});
					break;
				case 15:
					derived.push({
						id: Math.random() * Date.now(),
						label: `background secondary actionable ${color.customProperty}`,
						value: `${color.hex}`,
						order: 17,
					});
					derived.push({
						id: Math.random() * Date.now(),
						label: `border secondary actionable ${color.customProperty}`,
						value: `${color.hex}`,
						order: 20,
					});
					derived.push({
						id: Math.random() * Date.now(),
						label: `text secondary ${color.customProperty}`,
						value: `${color.hex}`,
						order: 2,
					});
					break;
				case 16:
					derived.push({
						id: Math.random() * Date.now(),
						label: `DARK background tertiary ${color.customProperty}`,
						value: `${color.hex}`,
						order: 27,
					});
					derived.push({
						id: Math.random() * Date.now(),
						label: `DARK text tertiary actionable ${color.customProperty}`,
						value: `${color.hex}`,
						order: 36,
					});
					break;
				case 18:
					derived.push({
						id: Math.random() * Date.now(),
						label: `background primary actionable ${color.customProperty}`,
						value: `${color.hex}`,
						order: 16,
					});
					derived.push({
						id: Math.random() * Date.now(),
						label: `border primary actionable ${color.customProperty}`,
						value: `${color.hex}`,
						order: 19,
					});
					derived.push({
						id: Math.random() * Date.now(),
						label: `text primary ${color.customProperty}`,
						value: `${color.hex}`,
						order: 1,
					});
					derived.push({
						id: Math.random() * Date.now(),
						label: `DARK background secondary ${color.customProperty}`,
						value: `${color.hex}`,
						order: 26,
					});
					derived.push({
						id: Math.random() * Date.now(),
						label: `DARK text secondary actionable ${color.customProperty}`,
						value: `${color.hex}`,
						order: 35,
					});
					break;
				case 20:
					derived.push({
						id: Math.random() * Date.now(),
						label: `DARK background primary ${color.customProperty}`,
						value: `${color.hex}`,
						order: 25,
					});
					derived.push({
						id: Math.random() * Date.now(),
						label: `DARK text primary actionable ${color.customProperty}`,
						value: `${color.hex}`,
						order: 34,
					});
					break;

				default:
					break;
			}
		});

		derived.sort((a, b) => {
			return a.order - b.order;
		});

		return (
			<div style={{padding: '16px'}}>
				<Input
					label="Color"
					value={this.state.selectedA11yColor}
					onChange={(e) => this.setState({selectedA11yColor: e})}
				/>
				<Select
					items={derived}
					selected={this.state.selectedA11yColor2}
					valueKey="value"
					onSelect={(e) => this.setState({selectedA11yColor2: e})}
				/>
				{this.state.selectedA11yColor &&
					this.state.selectedA11yColor2 &&
					renderRatios(
						this.state.selectedA11yColor,
						this.state.selectedA11yColor2
					)}
			</div>
		);
	};

	render() {
		const {
			label,
			baseColor,
			lightVariations,
			lightPercentage,
			lightSaturation,
			darkVariations,
			darkPercentage,
			darkSaturation,
			hook,
			newBaseColor,
		} = this.state;

		const colors = generateColorScale({
			color: newBaseColor,
			lightVariations: Number(lightVariations),
			lightPercentage: Number(lightPercentage),
			lightSaturation: Number(lightSaturation),
			darkVariations: Number(darkVariations),
			darkPercentage: Number(darkPercentage),
			darkSaturation: Number(darkSaturation),
			includeEnds: true,
			hook,
		});

		return (
			<Fragment>
				<div className="flex">
					<div className="flex-1">
						<div className="flex items-end mb-3">
							<BaseColorPicker
								label="Brand Neutral"
								value={baseColor}
								onChange={this.onBrandColorChange}
							/>
						</div>
						<ColorSwatch items={colors} />
					</div>
					{this.state.isA11yCheckOpen && this.renderA11yCheck(colors)}
				</div>
				<div className="flex flex-row-reverse">
					<small>
						{this.state.isA11yCheckOpen ? (
							<a
								role="button"
								onClick={() => {
									this.openA11y();
								}}>
								Close
							</a>
						) : (
							<a
								role="button"
								onClick={() => {
									this.openA11y();
								}}>
								Check colors
							</a>
						)}
					</small>
				</div>
			</Fragment>
		);
	}
}

export default NeutralsChecker;
