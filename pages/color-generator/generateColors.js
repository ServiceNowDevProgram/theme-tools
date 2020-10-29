class Color {
	constructor(color, name) {
		this.hex = color;
		this.rgb = hexToRgb(color);
		this.name = name;
	}
}

const hex = (color) => {
	const colorString = color.toString(16);
	return colorString.length === 1 ? `0${colorString}` : colorString;
};

const calculateColor = (color1, color2, ratio) => {
	ratio = (Math.round(ratio * 100) / 100).toFixed(2);

	const r = Math.ceil(
		parseInt(color2.substring(0, 2), 16) * ratio +
			parseInt(color1.substring(0, 2), 16) * (1 - ratio)
	);
	const g = Math.ceil(
		parseInt(color2.substring(2, 4), 16) * ratio +
			parseInt(color1.substring(2, 4), 16) * (1 - ratio)
	);
	const b = Math.ceil(
		parseInt(color2.substring(4, 6), 16) * ratio +
			parseInt(color1.substring(4, 6), 16) * (1 - ratio)
	);

	return hex(r) + hex(g) + hex(b);
};

const hexToRgb = (hex) => {
	const r = parseInt(hex.substring(1, 3), 16);
	const g = parseInt(hex.substring(3, 5), 16);
	const b = parseInt(hex.substring(5, 7), 16);

	return `${r},${g},${b}`;
};

const generateColors = (color1, color2, variations) => {
	if (!variations) {
		return [];
	}

	color1 = color1.startsWith('#') ? color1 : `#${color1}`;
	color2 = color2.startsWith('#') ? color2 : `#${color2}`;
	let percentage = 1 / variations;
	const numberOfLoops = 1 / percentage - 1;

	let colors = [];

	for (let i = 1; i <= numberOfLoops; i++) {
		colors = [
			...colors,
			'#' + calculateColor(color1.slice(1), color2.slice(1), i * percentage),
		];
	}

	return colors;
};

const generateColorRange = (
	color,
	lightVariations,
	lightPercentage,
	darkVariations,
	darkPercentage,
	hook,
	startIndex,
	includeEnds
) => {
	const firstColor = calculateColor(
		'ffffff',
		color.slice(1),
		1 - lightPercentage
	);
	const lastColor = calculateColor(color.slice(1), '000000', darkPercentage);
	const lightColors = generateColors(firstColor, color, lightVariations);
	const darkColors = generateColors(color, lastColor, darkVariations);

	let out = [];
	if (lightVariations) {
		out = [`#${firstColor}`, ...lightColors, ...out];
	}

	out = [...out, color];

	if (darkVariations) {
		out = [...out, ...darkColors, `#${lastColor}`];
	}

	if (includeEnds) {
		out = [`#ffffff`, ...out, `#000000`];
	}

	return out.map((color, index) => {
		const name = `--${hook}-${index + (startIndex ? startIndex : 0)}`;
		return new Color(color, name);
	});
};

export const getColors = (selectedColorGroup, selectedColorId, colorsJson) => {
	let colors;
	const {
		lightVariations,
		lightPercentage,
		darkVariations,
		darkPercentage,
		hook,
		startIndex,
		baseColor,
	} = colorsJson[selectedColorGroup].colors[selectedColorId];

	if (baseColor) {
		colors = generateColorRange(
			baseColor,
			lightVariations,
			lightPercentage,
			darkVariations,
			darkPercentage,
			hook,
			startIndex,
			selectedColorId === 'neutrals' ? true : false
		);
	}

	// SURFACE-NEUTRAL AND SURFACE-DIVIDER ARE COLORS BASED OFF THE NEUTRAL PALETTE
	// SURFACE-NEUTRAL'S BASE COLOR IS NEUTRAL-4
	// SURFACE-DIVIDER'S BASE COLOR IS NEUTRAL-8
	if (
		colorsJson.base.colors.neutrals &&
		colorsJson.base.colors.neutrals.baseColor
	) {
		if (
			selectedColorId === 'surfaceNeutral' ||
			selectedColorId === 'surfaceDivider'
		) {
			const {
				lightVariations: _lightVariations,
				lightPercentage: _lightPercentage,
				darkVariations: _darkVariations,
				darkPercentage: _darkPercentage,
				hook: _hook,
				startIndex: _startIndex,
				baseColor: _baseColor,
			} = colorsJson.base.colors.neutrals;

			const neutralColors = generateColorRange(
				_baseColor,
				_lightVariations,
				_lightPercentage,
				_darkVariations,
				_darkPercentage,
				_hook,
				_startIndex,
				true
			);

			const {
				lightVariations,
				lightPercentage,
				darkVariations,
				darkPercentage,
				hook,
				startIndex,
			} = colorsJson[selectedColorGroup].colors[selectedColorId];

			const newBase =
				selectedColorId === 'surfaceNeutral'
					? neutralColors[4].hex
					: neutralColors[8].hex;

			colors = generateColorRange(
				newBase,
				lightVariations,
				lightPercentage,
				darkVariations,
				darkPercentage,
				hook,
				startIndex,
				false
			);
			colors.pop();
		}
	}

	return colors;
};
