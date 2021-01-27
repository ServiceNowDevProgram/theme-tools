import React, {Component} from 'react';
import {toast} from 'react-toastify';
import PageHeader from '../../components/PageHeader';
import Page from '../../components/Page';
import Modal from '../../components/Modal';
import BaseColorPicker from '../../components/colors/BaseColorPicker';
import BrandColorPicker from '../../components/colors/BrandColorPicker';
import Select from '../../components/Select';
import Toggle from '../../components/Toggle';
import shallowEqual from '../../lib/common/shallowEqual';
import DATA from '../../data/color-generator/colors.json';
import {INITIAL_THEME, DEFAULT_THEME} from '../../data/themes';
import {
	getColors,
	isHex,
	getNeutralBaseColorsFromBrandPrimaryHex,
	hexToHSL,
	HSLToHex,
	getBaseColors,
	getContrastRatio,
} from '../../lib/color-generator/generateColors';
import {getThemes} from '../api/themes';
import {copyObject} from '../../lib/common/copy';
import cx from '../../lib/cx';
import styles from '../../styles/Home.module.css';
import ColorSwatch from '../../components/colors/ColorSwatch';

const path = [
	{id: 'colors', href: '/colors', label: 'Colors'},
	{id: 'color-generator', href: '/color-generator', label: 'Theme Generator'},
];
const selectedPath = 'color-generator';
class ColorGenerator extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedColors: {
				...INITIAL_THEME,
			},
			selectedColorGroup: 'base',
			isDark: false,
			openSmartGenModal: false,
			openA11yModal: false,
			autoGenBrandNeutral: '',
			autoGenBrandPrimary: '',
			autoGenBrandSecondary: '',
			themes: [],
			selectedTheme: {},
			selectedA11yColors: [],
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
		this.getThemes();
	}

	componentDidUpdate(prevProps, props) {
		const {selectedColors} = this.state;
		if (!shallowEqual(props.selectedColors, selectedColors)) {
			if (!history.replaceState) return;

			const searchParams = new URLSearchParams();

			for (const i in selectedColors) {
				if (selectedColors[i]) {
					searchParams.delete(i);
				}
			}

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

	getThemes = async () => {
		const params = {
			deleted: 'false',
			sysparm_query: 'ORDERBYDESCsys_updated_on',
		};

		try {
			const themes = await getThemes(params);
			this.setState({
				themes,
			});
		} catch (err) {
			toast.error(
				'There was an error getting themes. Please contact #theming.'
			);
		}
	};

	copyColors = () => {
		const {selectedColors, isDark} = this.state;
		const generatedColors = getColors(selectedColors, isDark);
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
						underline: selectedColorGroup === tab.id,
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

	updateBrandColor = (id, color) => {
		if (id === 'neutrals') {
			const neutralBase = getNeutralBaseColorsFromBrandPrimaryHex(color);
			const out = {
				neutrals: neutralBase,
				surfaceNeutral: neutralBase,
				surfaceDivider: neutralBase,
				backgroundPrimary: neutralBase,
				backgroundSecondary: neutralBase,
				backgroundTertiary: neutralBase,
				dividerPrimary: neutralBase,
				dividerSecondary: neutralBase,
				dividerTertiary: neutralBase,
				textPrimary: neutralBase,
				textSecondary: neutralBase,
				textTertiary: neutralBase,
				borderPrimary: neutralBase,
				borderSecondary: neutralBase,
				borderTertiary: neutralBase,
			};

			this.setState({
				selectedColors: {
					...this.state.selectedColors,
					...out,
				},
			});
		} else {
			if (id === 'selectionSecondary') {
				const brandSecondaryHSL = hexToHSL(color);
				color = HSLToHex(brandSecondaryHSL.h, 11, 85);
			}

			if (id === 'chromeDivider') {
				const brandPrimaryHSL = hexToHSL(color);
				color = HSLToHex(brandPrimaryHSL.h, brandPrimaryHSL.s, 37);
			}

			this.setState({
				selectedColors: {
					...this.state.selectedColors,
					[id]: color,
				},
			});
		}
	};

	renderColorGroups = (generatedColors, isDark) => {
		const {selectedColorGroup, selectedColors} = this.state;
		const group = DATA.groups[selectedColorGroup];
		if (group) {
			return Object.values(group.colors).map((colorId) => {
				const baseColor = selectedColors[colorId];
				return (
					<div key={colorId} className="mb-6">
						<div className="flex items-end">
							<div className="mr-3">
								<BaseColorPicker
									name={colorId}
									label={DATA.colors[colorId].label}
									value={baseColor || ''}
									disabled={DATA.colors[colorId].disabled}
									isDark={isDark}
									onChange={(value) =>
										this.updateBaseColor(colorId, value || undefined)
									}
								/>
							</div>
							{DATA.colors[colorId].notes && (
								<label
									className={cx({
										block: true,
										'text-sm': true,
										'leading-5': true,
										'mr-3': true,
									})}>
									({DATA.colors[colorId].notes})
								</label>
							)}
							{DATA.colors[colorId].baseColorConfigurable &&
								selectedColors.brandNeutral &&
								selectedColors.brandPrimary &&
								selectedColors.brandSecondary && (
									<BrandColorPicker
										neutral={selectedColors.brandNeutral}
										primary={selectedColors.brandPrimary}
										secondary={selectedColors.brandSecondary}
										onChange={(newColor) =>
											this.updateBrandColor(colorId, newColor)
										}
									/>
								)}
							{DATA.colors[colorId].a11y &&
								baseColor &&
								selectedColors.neutrals && (
									<button
										className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded ml-auto"
										onClick={() =>
											this.setState({
												openA11yModal: true,
												selectedA11yColors: generatedColors[colorId],
											})
										}>
										A11y
									</button>
								)}
						</div>

						<div className="mt-2">
							<ColorSwatch items={generatedColors[colorId]} />
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
			const neutralBase = getNeutralBaseColorsFromBrandPrimaryHex(
				autoGenBrandPrimary
			);

			const brandPrimaryHSL = hexToHSL(autoGenBrandPrimary);
			const brandSecondaryHSL = hexToHSL(autoGenBrandSecondary);
			const selectionSecondary = HSLToHex(brandSecondaryHSL.h, 11, 85);
			const chromeDivider = HSLToHex(brandPrimaryHSL.h, brandPrimaryHSL.s, 37);

			this.setState({
				selectedColors: {
					...selectedColors,
					neutrals: neutralBase,
					primary: autoGenBrandPrimary,
					secondary: autoGenBrandSecondary,
					selectionPrimary: autoGenBrandSecondary,
					selectionSecondary: selectionSecondary,
					interactive: autoGenBrandPrimary,
					chromeBrand: autoGenBrandPrimary,
					chromeDivider: chromeDivider,
					brandNeutral: autoGenBrandNeutral,
					brandPrimary: autoGenBrandPrimary,
					brandSecondary: autoGenBrandSecondary,
					surfaceNeutral: neutralBase,
					surfaceDivider: neutralBase,
					surfaceBrand: autoGenBrandSecondary,
					chromeBrand: autoGenBrandPrimary,
					chromeDivider: autoGenBrandPrimary,
					backgroundPrimary: neutralBase,
					backgroundSecondary: neutralBase,
					backgroundTertiary: neutralBase,
					dividerPrimary: neutralBase,
					dividerSecondary: neutralBase,
					dividerTertiary: neutralBase,
					textPrimary: neutralBase,
					textSecondary: neutralBase,
					textTertiary: neutralBase,
					borderPrimary: neutralBase,
					borderSecondary: neutralBase,
					borderTertiary: neutralBase,
					alertCritical: '#eb001b',
					alertHigh: '#fd9700',
					alertWarning: '#f0e000',
					alertModerate: '#5221ff',
					alertInfo: '#38aaf4',
					alertPositive: '#51ae00',
					alertLow: '#9698a4',
					groupedBlue: '#78b0cc',
					groupedBrown: '#9c8a77',
					groupedGray: '#8b9196',
					groupedGreen: '#93aa7d',
					groupedGreenYellow: '#9aad5e',
					groupedMagenta: '#cb79c1',
					groupedOrange: '#d7816a',
					groupedPink: '#cb798f',
					groupedPurple: '#b59bd1',
					groupedTeal: '#68aea3',
					groupedYellow: '#f0cf65',
					link: '#4262FE',
					focus: '#4262FE',
				},
				openSmartGenModal: false,
				selectedTheme: {},
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

	onThemeSelect = (theme) => {
		if (!theme) {
			this.setState({selectedColors: {}});
		} else if (theme) {
			const colors = getBaseColors(JSON.parse(theme.theme));
			this.setState({
				selectedColors: colors,
				selectedTheme: theme,
				autoGenBrandNeutral: '',
				autoGenBrandPrimary: '',
				autoGenBrandSecondary: '',
			});
		}
	};

	renderContrastChecker = (color1, color2) => {
		const contrasts = getContrastRatio(color1, color2);
		return (
			<div className="flex">
				<div className="mr-3">
					<p>{`AA - normal ${contrasts.normal.aa}`}</p>
					<p>{`AA - large ${contrasts.large.aa}`}</p>
				</div>
				<div>
					<p>{`AAA - normal ${contrasts.normal.aaa}`}</p>
					<p>{`AAA - large ${contrasts.large.aaa}`}</p>
				</div>
			</div>
		);
	};

	render() {
		const {
			selectedColors,
			isDark,
			openSmartGenModal,
			autoGenBrandNeutral,
			autoGenBrandPrimary,
			autoGenBrandSecondary,
			themes,
			selectedTheme,
		} = this.state;

		const generatedColors = getColors(selectedColors, isDark);
		return (
			<div
				className={cx({
					[styles.dark]: isDark,
				})}>
				<PageHeader
					label="Theme Generator"
					path={path}
					selectedPath={selectedPath}
					wide
				/>
				<Page wide>
					{this.renderDefaultThemeAlert()}
					<div className="flex flex-row-reverse mb-5">
						<div className="flex-initial">
							<Select
								layout="horizontal"
								label="Themes"
								items={themes.map((x) => ({id: x.sys_id, label: x.name}))}
								unsetLabel="Select a theme"
								selected={selectedTheme.sys_id || ''}
								onSelect={(id) => {
									const theme = this.state.themes.filter(
										(theme) => theme.sys_id === id
									)[0];
									this.onThemeSelect(theme);
								}}
							/>
						</div>
					</div>
					<div className="mb-8 flex justify-between items-center">
						<div>{this.renderTabs()}</div>
						<div>
							<button
								className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-auto mr-3 mb-2"
								onClick={() =>
									this.setState({
										selectedColors: {...INITIAL_THEME},
										selectedTheme: {},
									})
								}>
								Clear All
							</button>
							<button
								className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded ml-auto mr-3 mb-2"
								onClick={() => this.setState({openSmartGenModal: true})}>
								Auto Generate
							</button>
							<button
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-auto mb-2"
								onClick={this.copyColors}>
								Copy Colors Json
							</button>
							<Toggle
								label="Dark Theme"
								onChange={() =>
									this.setState({isDark: !isDark, isHighContrast: false})
								}
								checked={isDark}
							/>
						</div>
					</div>
					<div>{this.renderColorGroups(generatedColors, isDark)}</div>
				</Page>

				<Modal open={openSmartGenModal}>
					<div className="bg-white px-4 pt-5" style={{width: '90vw'}}>
						<div className="sm:flex sm:items-start">
							<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left flex-1">
								<h3
									className="text-lg leading-6 font-medium text-gray-900 mb-16"
									id="modal-headline">
									Auto Generate Colors
								</h3>
								{this.renderInsertPolarisAlert()}
								<div className="mt-2 flex flex-col">
									<div
										className="mb-3 flex items-end"
										style={{position: 'relative'}}>
										<BaseColorPicker
											name="brand-neutral-auto"
											label="Brand Neutral"
											placeholder="#171F4E"
											value={autoGenBrandNeutral}
											position="middle"
											onChange={(val) =>
												this.setState({autoGenBrandNeutral: val})
											}
										/>
									</div>
									<div className="flex-1 mb-3">
										<div
											style={{
												height: '80px',
												backgroundColor: autoGenBrandNeutral || '#f5f5f5',
											}}></div>
									</div>
									<div
										className="mb-3 flex items-end"
										style={{position: 'relative'}}>
										<BaseColorPicker
											name="brand-primary-auto"
											label="Brand Primary"
											placeholder="#4F52BD"
											value={autoGenBrandPrimary}
											position="middle"
											onChange={(val) =>
												this.setState({autoGenBrandPrimary: val})
											}
										/>
									</div>
									<div className="flex-1 mb-3">
										<div
											style={{
												height: '80px',
												backgroundColor: autoGenBrandPrimary || '#f5f5f5',
											}}></div>
									</div>
									<div
										className="mb-3 flex items-end"
										style={{position: 'relative'}}>
										<BaseColorPicker
											name="brand-secondary-auto"
											label="Brand Secondary"
											placeholder="#00A779"
											value={autoGenBrandSecondary}
											position="middle"
											onChange={(val) =>
												this.setState({autoGenBrandSecondary: val})
											}
										/>
									</div>
									<div className="flex-1">
										<div
											style={{
												height: '80px',
												backgroundColor: autoGenBrandSecondary || '#f5f5f5',
											}}></div>
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

				<Modal open={this.state.openA11yModal}>
					<div style={{width: '90vw'}}>
						{this.state.selectedA11yColors.map((color) => {
							const primaryColor = isDark
								? generatedColors['neutrals'][0]
								: generatedColors['neutrals'][18];
							const secondaryColor = isDark
								? generatedColors['neutrals'][4]
								: generatedColors['neutrals'][12];
							const tertiaryColor = isDark
								? generatedColors['neutrals'][6]
								: generatedColors['neutrals'][9];

							if (primaryColor && secondaryColor && tertiaryColor) {
								return (
									<div
										style={{width: '100%', backgroundColor: color.hex}}
										key={color.name}>
										<div className="flex justify-around mb-3 m-auto">
											<div className="flex-1 text-center">
												<p style={{color: primaryColor.hex}}>Text Primary</p>
											</div>
											<div className="flex-1">
												{this.renderContrastChecker(
													color.rgb,
													primaryColor.rgb
												)}
											</div>
										</div>
										<div className="flex justify-around mb-3">
											<div className="flex-1 text-center">
												<p style={{color: secondaryColor.hex}}>
													Text Secondary
												</p>
											</div>
											<div className="flex-1">
												{this.renderContrastChecker(
													color.rgb,
													secondaryColor.rgb
												)}
											</div>
										</div>
										<div className="flex justify-around">
											<div className="flex-1 text-center">
												<p style={{color: tertiaryColor.hex}}>Text Tertiary</p>
											</div>
											<div className="flex-1">
												{this.renderContrastChecker(
													color.rgb,
													tertiaryColor.rgb
												)}
											</div>
										</div>
									</div>
								);
							}
						})}
						<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
							<span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
								<button
									onClick={() => this.setState({openA11yModal: false})}
									type="button"
									className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
									Close
								</button>
							</span>
						</div>
					</div>
				</Modal>
			</div>
		);
	}
}

export default ColorGenerator;
