import React, {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import BaseColorPicker from '../../components/colors/BaseColorPicker';
import ColorSwatch from '../../components/colors/ColorSwatch';
import Input from '../../components/Input';
import Toggle from '../../components/Toggle';
import {generateColorScale} from '../../lib/color-generator/generateColorsP';

const renderGeneratedColors = (
	baseColor,
	lightVariations,
	lightPercentage,
	lightSaturation,
	darkVariations,
	darkPercentage,
	darkSaturation,
	isReverse,
	startIndex,
	includeEnds,
	hook,
	removeEnd
) => {
	const colors = generateColorScale({
		color: baseColor,
		lightVariations: Number(lightVariations),
		lightPercentage: Number(lightPercentage),
		lightSaturation: Number(lightSaturation),
		darkVariations: Number(darkVariations),
		darkPercentage: Number(darkPercentage),
		darkSaturation: Number(darkSaturation),
		isDark: isReverse,
		startIndex: startIndex,
		includeEnds: includeEnds,
		hook,
		removeEnd,
	});

	return <ColorSwatch items={colors} />;
};

const ColorRangeGenerator = (props) => {
	const [baseColor, setBaseColor] = useState(props.baseColor);
	const [lightVariations, setLightVariations] = useState(props.lightVariations);
	const [lightPercentage, setLightPercentage] = useState(props.lightPercentage);
	const [lightSaturation, setLightSaturation] = useState(
		props.lightSaturation || '0'
	);
	const [darkVariations, setDarkVariations] = useState(props.darkVariations);
	const [darkPercentage, setDarkPercentage] = useState(props.darkPercentage);
	const [darkSaturation, setDarkSaturation] = useState(
		props.darkSaturation || '0'
	);
	const [isReverse, setReverse] = useState(false);
	const [showAdvanced, setAdvanced] = useState(false);
	const [derived, setDerived] = useState(props.derived || []);

	useEffect(() => {
		props.onChange(props.label, {
			baseColor,
			lightVariations,
			lightPercentage,
			lightSaturation,
			darkVariations,
			darkPercentage,
			darkSaturation,
			isReverse,
			startIndex: props.startIndex,
			includeEnds: props.includeEnds || false,
			derived,
		});
	}, [
		baseColor,
		lightVariations,
		lightPercentage,
		lightSaturation,
		darkVariations,
		darkPercentage,
		darkSaturation,
		isReverse,
		derived,
	]);

	const updateDerived = (deriveIndex, groupIndex, color) => {
		const out = [...derived];
		out[deriveIndex].group[groupIndex].color = color;
		setDerived(out);
	};

	return (
		<div>
			<div className="mb-8">
				<p>{props.label}</p>
				{renderGeneratedColors(
					baseColor,
					lightVariations,
					lightPercentage,
					lightSaturation,
					darkVariations,
					darkPercentage,
					darkSaturation,
					isReverse,
					props.startIndex,
					props.includeEnds,
					props.hook,
					props.removeEnd
				)}
				<div className="flex flex-row-reverse">
					<small>
						<a role="button" onClick={() => setAdvanced(!showAdvanced)}>
							{!showAdvanced ? 'Edit' : 'Hide'}
						</a>
					</small>
				</div>
			</div>
			{showAdvanced ? (
				<Fragment>
					<div className="grid grid-cols-7 gap-3 mb-12">
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
					{derived.length ? (
						<Fragment>
							<p className="mb-4">Derived Colors</p>
							<div className="grid grid-cols-4 gap-3 mb-12">
								{derived.map((derive, deriveIndex) => {
									return (
										<div key={deriveIndex}>
											{derive.group.map((group, groupIndex) => {
												return (
													<Input
														key={groupIndex}
														label={group.label}
														value={group.color}
														onChange={(e) =>
															updateDerived(deriveIndex, groupIndex, e)
														}
													/>
												);
											})}
										</div>
									);
								})}
							</div>
						</Fragment>
					) : null}
				</Fragment>
			) : null}
		</div>
	);
};

ColorRangeGenerator.propTypes = {
	label: PropTypes.string,
	baseColor: PropTypes.string,
	lightVariations: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	lightPercentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	lightSaturation: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	darkVariations: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	darkPercentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	darkSaturation: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	startIndex: PropTypes.number,
	includeEnds: PropTypes.bool,
	reverse: PropTypes.bool,
	onChange: PropTypes.func,
	removeEnd: PropTypes.bool,
};

export default ColorRangeGenerator;
