import React, {Component, Fragment} from 'react';
import PageHeader from '../../components/PageHeader';
import Page from '../../components/Page';
import COLORS from '../../data/color-generator/colors.json';
import {getColors} from '../../lib/color-generator/generateColors';
import cx from '../../lib/cx';

const path = [
	{id: 'color-generator', href: '/color-generator', label: 'Color Generator'},
];
const selectedPath = 'color-generator';

class ColorGenerator extends Component {
	constructor(props) {
		super(props);

		this.state = {
			colorsJson: JSON.parse(JSON.stringify(COLORS)),
			selectedColorGroup: 'base',
		};
	}

	componentDidMount() {
		const {colorsJson} = this.state;
		const mapper = {};
		const out = {...colorsJson};
		const urlParams = new URLSearchParams(window.location.search);
		const entries = urlParams.entries();

		// TAKE COLORS FROM URL SEARCH PARAMS
		if (entries) {
			for (const entry of entries) {
				mapper[entry[0]] = entry[1];
			}

			if (Object.keys(mapper).length) {
				for (const i in out) {
					for (const j in out[i].colors) {
						if (mapper[j] && mapper[j].length === 7) {
							out[i].colors[j] = {
								...out[i].colors[j],
								baseColor: mapper[j],
							};
						}
					}
				}

				this.setState({
					colorsJson: out,
				});
			}
		}
	}

	copyColors = () => {
		const {colorsJson} = this.state;
		const out = {};

		for (const i in colorsJson) {
			for (const j in colorsJson[i].colors) {
				const colors = getColors(i, j, colorsJson);

				if (colors && colors.length) {
					colors.forEach((color) => {
						out[color.name] = color.rgb;
					});
				}
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

	renderTabs = (tabs = []) => {
		const {selectedColorGroup} = this.state;
		return tabs.map((tab, i) => {
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

	updateUrl = (key, value) => {
		if (history.replaceState && value) {
			let searchParams = new URLSearchParams(window.location.search);
			searchParams.set(key, value);
			let newurl =
				window.location.protocol +
				'//' +
				window.location.host +
				window.location.pathname +
				'?' +
				searchParams.toString();
			window.history.replaceState({path: newurl}, '', newurl);
		}
	};

	updateBaseColor = (id, value) => {
		const {colorsJson, selectedColorGroup} = this.state;
		this.updateUrl(id, value);

		this.setState({
			colorsJson: {
				...colorsJson,
				[selectedColorGroup]: {
					...colorsJson[selectedColorGroup],
					colors: {
						...colorsJson[selectedColorGroup].colors,
						[id]: {
							...colorsJson[selectedColorGroup].colors[id],
							baseColor: value,
						},
					},
				},
			},
		});
	};

	renderGeneratedColors = (id) => {
		let colors = [];
		const {colorsJson, selectedColorGroup} = this.state;
		const color = colorsJson[selectedColorGroup].colors[id];
		if (
			(color && color.baseColor && color.baseColor.length === 7) ||
			(colorsJson.base.colors.neutrals.baseColor &&
				(id === 'surfaceNeutral' || id === 'surfaceDivider'))
		) {
			colors = getColors(selectedColorGroup, id, colorsJson);
		}

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

	renderColorGroups = () => {
		const {colorsJson, selectedColorGroup} = this.state;
		if (colorsJson[selectedColorGroup]) {
			return Object.values(colorsJson[selectedColorGroup].colors).map(
				(group) => {
					const {id, label, baseColor} = group;
					const isNeutral = id === 'surfaceNeutral' || id === 'surfaceDivider';
					return (
						<div key={id} className="mb-6">
							<label className="block text-sm leading-5 font-medium text-gray-700">{`${label}  ${
								isNeutral ? '(generated from neutrals)' : ''
							}`}</label>
							{!isNeutral ? (
								<input
									className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-2"
									type="text"
									name={id}
									value={baseColor || ''}
									onChange={(e) => {
										this.updateBaseColor(id, e.target.value || undefined);
									}}
									placeholder={`#000000`}
								/>
							) : null}

							<div className="flex">{this.renderGeneratedColors(id)}</div>
						</div>
					);
				}
			);
		}
	};

	render() {
		return (
			<Fragment>
				<PageHeader
					label="Color Generator"
					path={path}
					selectedPath={selectedPath}
					wide
				/>
				<Page wide>
					<div className="mb-8 flex justify-between items-center">
						<div>{this.renderTabs(Object.values(this.state.colorsJson))}</div>
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-auto"
							onClick={this.copyColors}>
							Copy Json
						</button>
					</div>
					<div>{this.renderColorGroups()}</div>
				</Page>
			</Fragment>
		);
	}
}

export default ColorGenerator;
