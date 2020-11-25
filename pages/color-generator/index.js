import React, {Component, Fragment} from 'react';
import {toast} from 'react-toastify';
import PageHeader from '../../components/PageHeader';
import Page from '../../components/Page';
import Input from '../../components/Input';
import Modal from '../../components/Modal';
import shallowEqual from '../../lib/common/shallowEqual';
import DATA from '../../data/color-generator/colors.json';
import {
	getColors,
	isHex,
	getNeutralBaseColorsFromBrandPrimaryHex,
	getPrimaryColorsFromBrandPrimaryHex,
	getSurfaceBrandColorsFromPrimaryHex,
	getChromeBrandColorsFromPrimaryHex,
	getChromeDividerColorsFromPrimaryHex,
	getSecondaryColorsFromSecondaryHex,
	getSelectionPrimaryFromSecondaryHex,
	getSelectionSecondaryFromSecondaryHex,
	getInteractiveColorsFromPrimaryHex,
	getFocusColorsFromPrimaryHex,
} from '../../lib/color-generator/generateColors';
import {copyObject} from '../../lib/common/copy';
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
	brandNeutral: '#ffffff',
	brandPrimary: '#293e40',
	brandSecondary: '#81b5a1',
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
				brandNeutral: null,
				brandPrimary: null,
				brandSecondary: null,
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
			isDark: false,
			openSmartGenModal: false,
			autoGenBrandNeutral: '',
			autoGenBrandPrimary: '',
			autoGenBrandSecondary: '',
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

	componentDidUpdate(prevProps, props) {
		const {selectedColors} = this.state;
		if (!shallowEqual(props.selectedColors, selectedColors)) {
			if (!history.replaceState) return;

			const searchParams = new URLSearchParams(window.location.search);
			for (const i in selectedColors) {
				if (selectedColors[i]) {
					searchParams.set(i, selectedColors[i]);
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
		}
	}

	copyColors = () => {
		const {selectedColors, isDark} = this.state;
		const generatedColors = getColors(DATA, selectedColors, isDark);
		const out = {};
		for (const [colorId, color] of Object.entries(DATA.colors)) {
			const colors = generatedColors[colorId];
			if (colors) {
				colors.forEach((color) => {
					out[color.name] = color.rgb;
				});
			}
		}
		copyObject(out);
	};

	generateDarkTheme = () => {
		const {selectedColors} = this.state;
		if (selectedColors.neutrals) {
			this.setState({
				isDark: !this.state.isDark,
			});
		}
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

	updateBaseColor = (id, value) => {
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

	renderColorGroups = (generatedColors, isDark) => {
		const {selectedColorGroup, selectedColors} = this.state;
		const group = DATA.groups[selectedColorGroup];
		if (group) {
			return Object.values(group.colors).map((colorId) => {
				const baseColor = selectedColors[colorId];
				const isNeutral =
					colorId === 'surfaceNeutral' || colorId === 'surfaceDivider';
				const label =
					(isNeutral || colorId === 'neutrals') && isDark
						? `${DATA.colors[colorId].label} (dark)`
						: DATA.colors[colorId].label;
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
							<div className="flex items-end">
								<div className="flex-1">
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
								</div>
								{colorId === 'neutrals' && selectedColors.neutrals ? (
									<div>
										<button
											className={cx({
												'bg-green-500': isDark,
												'hover:bg-green-700': isDark,
												'bg-gray-700': !isDark,
												'hover:bg-gray-900': !isDark,
												'text-white': true,
												'font-bold': true,
												'py-1': true,
												'px-2': true,
												rounded: true,
												'ml-2': true,
											})}
											onClick={this.generateDarkTheme}>
											{isDark ? 'Light Theme' : 'Dark Theme'}
										</button>
									</div>
								) : null}
							</div>
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

	renderInsertPolarisAlert = () => {
		const {
			autoGenBrandNeutral,
			autoGenBrandPrimary,
			autoGenBrandSecondary,
		} = this.state;
		if (
			!autoGenBrandNeutral ||
			!autoGenBrandPrimary ||
			!autoGenBrandSecondary
		) {
			return (
				<button
					className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none rounded-md flex w-full mb-4"
					onClick={this.insertPolarisColors}>
					<span className="font-semibold mr-2 text-left flex-auto">
						Insert Polaris Colors
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

	generateSmartColors = () => {
		const {
			autoGenBrandNeutral,
			autoGenBrandPrimary,
			autoGenBrandSecondary,
			selectedColors,
		} = this.state;

		if (
			isHex(autoGenBrandNeutral) &&
			isHex(autoGenBrandPrimary) &&
			isHex(autoGenBrandSecondary)
		) {
			const neutrals = getNeutralBaseColorsFromBrandPrimaryHex(
				autoGenBrandPrimary
			);
			const primary = getPrimaryColorsFromBrandPrimaryHex(autoGenBrandPrimary);
			const surfaceBrand = getSurfaceBrandColorsFromPrimaryHex(
				autoGenBrandPrimary
			);
			const chromeBrand = getChromeBrandColorsFromPrimaryHex(
				autoGenBrandPrimary
			);
			const chromeDivider = getChromeDividerColorsFromPrimaryHex(
				autoGenBrandPrimary
			);
			const interactive = getInteractiveColorsFromPrimaryHex(
				autoGenBrandPrimary
			);
			const focus = getFocusColorsFromPrimaryHex(autoGenBrandPrimary);
			const secondary = getSecondaryColorsFromSecondaryHex(
				autoGenBrandSecondary
			);
			const selectionPrimary = getSelectionPrimaryFromSecondaryHex(
				autoGenBrandSecondary
			);
			const selectionSecondary = getSelectionSecondaryFromSecondaryHex(
				autoGenBrandSecondary
			);

			this.setState({
				selectedColors: {
					...selectedColors,
					neutrals,
					primary,
					surfaceBrand,
					chromeBrand,
					chromeDivider,
					interactive,
					focus,
					secondary,
					selectionPrimary,
					selectionSecondary,
					brandNeutral: autoGenBrandNeutral,
					brandPrimary: autoGenBrandPrimary,
					brandSecondary: autoGenBrandSecondary,
				},
				openSmartGenModal: false,
			});
		} else {
			toast.error('Please make sure all fields are completed');
		}
	};

	insertPolarisColors = () => {
		this.setState({
			autoGenBrandNeutral: '#171F4E',
			autoGenBrandPrimary: '#4F52BD',
			autoGenBrandSecondary: '#00A779',
		});
	};

	render() {
		const {
			selectedColors,
			isDark,
			openSmartGenModal,
			autoGenBrandNeutral,
			autoGenBrandPrimary,
			autoGenBrandSecondary,
		} = this.state;
		const generatedColors = getColors(DATA, selectedColors, isDark);
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
						<div>
							<button
								className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded ml-auto mr-3"
								onClick={() => this.setState({openSmartGenModal: true})}>
								Smart Gen
							</button>
							<button
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-auto"
								onClick={this.copyColors}>
								Copy Json
							</button>
						</div>
					</div>
					<div>{this.renderColorGroups(generatedColors, isDark)}</div>
				</Page>

				<Modal open={openSmartGenModal}>
					<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
						<div className="sm:flex sm:items-start">
							<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left flex-1">
								<h3
									className="text-lg leading-6 font-medium text-gray-900 mb-8"
									id="modal-headline">
									Auto Generate Colors
								</h3>
								{this.renderInsertPolarisAlert()}
								<div className="mt-2 flex flex-col">
									<div className="mb-3">
										<label className="text-sm text-gray-700">
											Brand Neutral
										</label>
										<Input
											name="brand-neutral-auto"
											placeholder="#171F4E"
											value={autoGenBrandNeutral}
											onChange={(val) =>
												this.setState({autoGenBrandNeutral: val})
											}
										/>
									</div>
									<div className="mb-3">
										<label className="text-sm text-gray-700">
											Brand Primary
										</label>
										<Input
											name="brand-primary-auto"
											placeholder="#4F52BD"
											value={autoGenBrandPrimary}
											onChange={(val) =>
												this.setState({autoGenBrandPrimary: val})
											}
										/>
									</div>
									<div className="mb-3">
										<label className="text-sm text-gray-700">
											Brand Secondary
										</label>
										<Input
											name="brand-secondary-auto"
											placeholder="#00A779"
											value={autoGenBrandSecondary}
											onChange={(val) =>
												this.setState({autoGenBrandSecondary: val})
											}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
						<span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
							<button
								onClick={this.generateSmartColors}
								type="button"
								className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5">
								Generate
							</button>
						</span>
						<span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
							<button
								onClick={() => this.setState({openSmartGenModal: false})}
								type="button"
								className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
								Cancel
							</button>
						</span>
					</div>
				</Modal>
			</Fragment>
		);
	}
}

export default ColorGenerator;
