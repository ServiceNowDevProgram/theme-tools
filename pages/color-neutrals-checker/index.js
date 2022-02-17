import React, {Component} from 'react';
import PageHeader from '../../components/PageHeader';
import Page from '../../components/Page';
import {renderRatios} from '../../pages/contrast-checker';
import {generateColorRange} from '../../lib/color-generator/generateColors';
import Input from '../../components/Input';
import NeutralsChecker from '../../components/colors/NeutralsChecker';

const path = [
	{id: 'colors', href: '/colors', label: 'Colors'},
	{
		id: 'color-neutrals-checker',
		href: '/color-neutrals-checker',
		label: 'Color Neutrals Checker',
	},
];
const selectedPath = 'color-neutrals-checker';

class Neutral {
	constructor(
		label = 'Neutral',
		hook = 'now-color--neutral',
		baseColor = '#4F5664',
		startIndex = 0,
		includeEnds = true,
		derived = []
	) {
		this.brandNeutral = '#4F52BD';
		this.label = label;
		this.hook = hook;
		this.baseColor = baseColor;
		this.startIndex = startIndex;
		this.includeEnds = includeEnds;
		this.derived = derived;
	}
}

class ColorNeutralsChecker extends Component {
	constructor(props) {
		super(props);

		this.state = {
			colors: [new Neutral()],
			isA11yCheckOpen: false,
			lightVariations: 10,
			lightPercentage: 0.95,
			lightSaturation: 1,
			darkVariations: 9,
			darkPercentage: 0.9,
			darkSaturation: 1,
			isConfigOpen: false,
		};
	}

	updateColor = (index, color) => {
		this.setState({
			colors: this.state.colors.map((colorColor, colorIndex) => {
				if (index === colorIndex) {
					colorColor = {
						...colorColor,
						...color,
					};
				}
				return colorColor;
			}),
		});
	};

	openA11y = (index) => {
		if (index === this.state.selectedNeutralIndex) {
			this.setState({
				isA11yCheckOpen: false,
				selectedNeutralIndex: -1,
			});
		} else {
			this.setState({
				isA11yCheckOpen: true,
				selectedNeutralIndex: index,
			});
		}
	};

	renderA11yCheck = () => {
		if (this.state.selectedNeutralIndex > -1 && this.state.isA11yCheckOpen) {
			const generated = generateColorRange(
				this.state.colors[this.state.selectedNeutralIndex]
			);
			return (
				<div style={{padding: '16px'}}>
					<Input
						label="Neutral Index 1"
						value={this.state.a11yIndexToCompare[0]}
						onChange={(e) =>
							this.setState({
								a11yIndexToCompare: [e || 0, this.state.a11yIndexToCompare[1]],
							})
						}
					/>
					<Input
						label="Neutral Index 2"
						value={this.state.a11yIndexToCompare[1]}
						onChange={(e) =>
							this.setState({
								a11yIndexToCompare: [this.state.a11yIndexToCompare[1], e || 0],
							})
						}
					/>

					{renderRatios(
						generated[this.state.a11yIndexToCompare[0]].hex,
						generated[this.state.a11yIndexToCompare[1]].hex
					)}
				</div>
			);
		}
	};

	addNewNeutral = () => {
		this.setState({colors: [...this.state.colors, new Neutral()]});
	};

	renderConfig = () => {
		const {
			lightVariations,
			lightPercentage,
			lightSaturation,
			darkVariations,
			darkPercentage,
			darkSaturation,
		} = this.state;
		return (
			<div className="flex justify-between">
				<div>
					<Input
						label="Light Variations"
						value={lightVariations}
						placeholder="3"
						onChange={(value) => this.setState({lightVariations: value})}
					/>
				</div>
				<div>
					<Input
						label="Light Percentage"
						value={lightPercentage}
						placeholder=".95"
						onChange={(value) => this.setState({lightPercentage: value})}
					/>
					<input
						type="range"
						min="0"
						max="1"
						value={lightPercentage}
						step="0.01"
						onChange={(e) => this.setState({lightPercentage: e.target.value})}
					/>
				</div>
				<div>
					<Input
						label="Light Saturation"
						value={lightSaturation}
						placeholder=".95"
						onChange={(value) => this.setState({lightSaturation: value})}
					/>
					<input
						type="range"
						min="0"
						max="1"
						value={lightSaturation}
						step="0.01"
						onChange={(e) => this.setState({lightSaturation: e.target.value})}
					/>
				</div>
				<div>
					<Input
						label="Dark Variations"
						value={darkVariations}
						placeholder="3"
						onChange={(value) => this.setState({darkVariations: value})}
					/>
				</div>
				<div>
					<Input
						label="Dark Percentage"
						value={darkPercentage}
						placeholder=".95"
						onChange={(value) => this.setState({darkPercentage: value})}
					/>
					<input
						type="range"
						min="0"
						max="1"
						value={darkPercentage}
						step="0.01"
						onChange={(e) => this.setState({darkVariations: e.target.value})}
					/>
				</div>
				<div>
					<Input
						label="Dark Saturation"
						value={darkSaturation}
						placeholder=".95"
						onChange={(value) => this.setState({darkSaturation: value})}
					/>
					<input
						type="range"
						min="0"
						max="1"
						value={darkSaturation}
						step="0.01"
						onChange={(e) => this.setState({darkSaturation: e.target.value})}
					/>
				</div>
			</div>
		);
	};

	render() {
		const {
			colors,
			isConfigOpen,
			lightVariations,
			lightPercentage,
			lightSaturation,
			darkVariations,
			darkPercentage,
			darkSaturation,
		} = this.state;
		return (
			<div>
				<PageHeader
					label="Color Neutrals Checker"
					path={path}
					selectedPath={selectedPath}
					size="2xl"
				/>
				<Page size="2xl">
					{isConfigOpen ? (
						<div>
							<div className="flex justify-end">
								<button
									className="bg-blue-500 text-white text-sm font-bold py-1 px-2 rounded"
									onClick={() => this.setState({isConfigOpen: !isConfigOpen})}>
									Close config
								</button>
							</div>
							{this.renderConfig()}
						</div>
					) : (
						<div className="flex justify-end">
							<button
								className="bg-blue-500 text-white text-sm font-bold py-1 px-2 rounded"
								onClick={() => this.setState({isConfigOpen: !isConfigOpen})}>
								Open config
							</button>
						</div>
					)}

					<div>
						{colors.map((color, index) => {
							return (
								<NeutralsChecker
									key={`Neutrals ${index}`}
									label={`Neutrals ${index}`}
									baseColor={color.baseColor}
									lightVariations={lightVariations}
									lightPercentage={lightPercentage}
									lightSaturation={lightSaturation}
									darkVariations={darkVariations}
									darkPercentage={darkPercentage}
									darkSaturation={darkSaturation}
									hook={color.hook}
									startIndex={0}
									includeEnds={true}
									onChange={this.updateColor}
									derived={[]}
								/>
							);
						})}
						<button
							className="bg-green-500 hover:bg-green-700 text-white text-sm font-bold py-1 px-2 rounded"
							onClick={() => this.addNewNeutral()}>
							Add New Neutral
						</button>
					</div>
				</Page>
			</div>
		);
	}
}

export default ColorNeutralsChecker;
