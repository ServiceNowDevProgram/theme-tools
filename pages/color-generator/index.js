import React, {Component, Fragment, useState} from 'react';
import PageHeader from '../../components/PageHeader';
import Page from '../../components/Page';
import Input from '../../components/Input';
import DATA from '../../data/color-generator/colors.json';
import {getColors} from '../../lib/color-generator/generateColors';
import cx from '../../lib/cx';

const DEFAULT_THEME = {
	neutrals: '#49585a',
	primary: '#1e856d',
	secondary: '#01778e',
	selectionPrimary: '#1e856d',
	selectionSecondary: '#e5eef0',
	interactive: '#01778e',
	link: '#01778e',
	focus: '#01778e',
	alertCritical: '#c83c36',
	alertHigh: '#dd9122',
	alertWarning: '#d2c300',
	alertModerate: '#5456cf',
	alertInfo: '#0e78c4',
	alertPositive: '#25832b',
	alertLow: '#666666',
	surfaceBrand: '#93c0ae',
	chromeBrand: '#4d6061',
	chromeDivider: '#243738',
	groupedBlue: '#78b0cc',
	groupedBrown: '#9c8a77',
	groupedgray: '#8b9196',
	groupedGreen: '#93aa7d',
	groupedGreenYellow: '#9aad5e',
	groupedMagenta: '#cb79c1',
	groupedOrange: '#d7816a',
	groupedPink: '#cb798f',
	groupedPurple: '#b59bd1',
	groupedTeal: '#68aea3',
	groupedYellow: '#f0cf65',
};

const path = [
	{id: 'color-generator', href: '/color-generator', label: 'Color Generator'},
];
const selectedPath = 'color-generator';
class ColorGenerator extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedColors: {
				neutrals: null,
				primary: null,
				secondary: null,
				selectionPrimary: null,
				selectionSecondary: null,
				interactive: null,
				link: null,
				focus: null,
				alertCritical: null,
				alertHigh: null,
				alertWarning: null,
				alertModerate: null,
				alertInfo: null,
				alertPositive: null,
				alertLow: null,
				surfaceBrand: null,
				chromeBrand: null,
				chromeDivider: null,
				groupedBlue: null,
				groupedBrown: null,
				groupedgray: null,
				groupedGreen: null,
				groupedGreenYellow: null,
				groupedMagenta: null,
				groupedOrange: null,
				groupedPink: null,
				groupedPurple: null,
				groupedTeal: null,
				groupedYellow: null,
			},
			selectedColorGroup: 'base',
		};
	}

	componentDidMount() {
		const urlParams = new URLSearchParams(window.location.search);
		const {selectedColors} = this.state;
		const newSelectedColors = {...selectedColors};
		for (const color of Object.keys(selectedColors)) {
			if (urlParams.has(color) && urlParams.get(color).length === 7) {
				newSelectedColors[color] = urlParams.get(color);
			}
		}
		this.setState({selectedColors: newSelectedColors});
	}

	copyColors = () => {
		const generatedColors = getColors(DATA, this.state.selectedColors);
		const out = {};
		for (const [colorId, color] of Object.entries(DATA.colors)) {
			const colors = generatedColors[colorId];
			if (colors) {
				colors.forEach((color) => {
					out[color.name] = color.rgb;
				});
			}
		}
		var aux = document.createElement('input');
		aux.setAttribute('value', JSON.stringify(out, null, 4));
		document.body.appendChild(aux);
		aux.select();
		document.execCommand('copy');
		document.body.removeChild(aux);
		console.log('copied', JSON.stringify(out, null, 4));
	};

	renderTabs = () => {
		const {selectedColorGroup} = this.state;
		return Object.values(DATA.groups).map((tab, i) => {
			return (
				<button
					key={tab.id}
					onClick={() => this.setState({selectedColorGroup: tab.id})}
					className={cx({
						'ml-8': i !== 0,
						'font-medium': true,
						'text-gray-500': true,
						'text-gray-800': selectedColorGroup === tab.id,
						'hover:text-gray-800': true,
						'hover:underline': true,
						transition: true,
						'duration-150': true,
						'ease-in-out': true,
					})}>
					{tab.label}
				</button>
			);
		});
	};

	updateUrl = (updates) => {
		if (!history.replaceState) return;

		const searchParams = new URLSearchParams(window.location.search);
		for (const [key, value] of updates) {
			if (value) {
				searchParams.set(key, value);
			}
		}

		let newurl =
			window.location.protocol +
			'//' +
			window.location.host +
			window.location.pathname +
			'?' +
			searchParams.toString();
		window.history.replaceState({path: newurl}, '', newurl);
	};

	updateBaseColor = (id, value) => {
		this.updateUrl([[id, value]]);
		this.setState({
			selectedColors: {
				...this.state.selectedColors,
				[id]: value,
			},
		});
	};

	renderGeneratedColors = (colors) => {
		if (colors) {
			return colors.map((color) => {
				return (
					<div className="flex-1" title={color.name} key={color.name}>
						<div style={{height: '80px', backgroundColor: color.hex}}></div>
						<small style={{fontSize: '10px'}}>{color.hex}</small>
					</div>
				);
			});
		}
	};

	renderColorGroups = (generatedColors) => {
		const {selectedColorGroup, selectedColors} = this.state;
		const group = DATA.groups[selectedColorGroup];
		if (group) {
			return Object.values(group.colors).map((colorId) => {
				const {label} = DATA.colors[colorId];
				const baseColor = selectedColors[colorId];
				const isNeutral =
					colorId === 'surfaceNeutral' || colorId === 'surfaceDivider';
				return (
					<div key={colorId} className="mb-6">
						{isNeutral && (
							<label
								className={cx({
									block: true,
									'text-sm': true,
									'leading-5': true,
									'text-gray-700': true,
									'mb-1': true,
								})}>
								{label} (generated from neutrals)
							</label>
						)}
						{!isNeutral ? (
							<Input
								type="text"
								name={colorId}
								label={label}
								value={baseColor || ''}
								onChange={(value) =>
									this.updateBaseColor(colorId, value || undefined)
								}
								placeholder="#000000"
							/>
						) : null}

						<div className="flex mt-2">
							{this.renderGeneratedColors(generatedColors[colorId])}
						</div>
					</div>
				);
			});
		}
	};

	setDefaultTheme = () => {
		this.setState({selectedColors: {...DEFAULT_THEME}});
		this.updateUrl(Object.entries(DEFAULT_THEME));
	};

	renderDefaultThemeAlert = () => {
		const anyBaseColorDefined = Object.values(this.state.selectedColors).some(
			(x) => !!x
		);

		if (!anyBaseColorDefined) {
			return (
				<button
					className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none rounded-md flex w-full mb-4"
					onClick={(e) => {
						e.preventDefault();
						this.setDefaultTheme();
					}}>
					<span className="font-semibold mr-2 text-left flex-auto">
						Not sure where to start? Try the Workspace Default Theme palette
					</span>
					<svg
						className="fill-current opacity-75 h-4 w-4"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20">
						<path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
					</svg>
				</button>
			);
		}
	};

	render() {
		const generatedColors = getColors(DATA, this.state.selectedColors);
		return (
			<Fragment>
				<PageHeader
					label="Color Generator"
					path={path}
					selectedPath={selectedPath}
					wide
				/>
				<Page wide>
					{this.renderDefaultThemeAlert()}
					<div className="mb-8 flex justify-between items-center">
						<div>{this.renderTabs()}</div>
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-auto"
							onClick={this.copyColors}>
							Copy Json
						</button>
					</div>
					<div>{this.renderColorGroups(generatedColors)}</div>
				</Page>
			</Fragment>
		);
	}
}

export default ColorGenerator;
