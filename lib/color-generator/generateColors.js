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
  includeEnds,
  isDark
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

  if (isDark) {
    out.reverse();
  }

	return out.map((color, index) => {
		const name = `--${hook}-${index + (startIndex ? startIndex : 0)}`;
		return new Color(color, name);
	});
};

export const getColors = (colorsJson, selectedColors, isDark) => {
	const generated = {};

	for (const color of Object.values(colorsJson.colors)) {
		const {
			id,
			lightVariations,
			lightPercentage,
			darkVariations,
			darkPercentage,
			hook,
			startIndex,
		} = color;
		const baseColor = selectedColors[id];

		if (
			!baseColor ||
			baseColor.length !== 7 ||
			id === 'surfaceNeutral' ||
			id === 'surfaceDivider'
		) {
			continue;
		}

		generated[id] = generateColorRange(
			baseColor,
			lightVariations,
			lightPercentage,
			darkVariations,
			darkPercentage,
			hook,
			startIndex,
      id === 'neutrals' ? true : false,
      isDark && id === 'neutrals' ? true : false
    );
	}

	if (generated.neutrals) {
		const neutralColors = generated.neutrals;

		const surfaceNeutralBase = neutralColors[4].hex;
		const surfaceNeutralColors = generateColorRange(
			surfaceNeutralBase,
			colorsJson.colors.surfaceNeutral.lightVariations,
			colorsJson.colors.surfaceNeutral.lightPercentage,
			colorsJson.colors.surfaceNeutral.darkVariations,
			colorsJson.colors.surfaceNeutral.darkPercentage,
			colorsJson.colors.surfaceNeutral.hook,
			colorsJson.colors.surfaceNeutral.startIndex,
      false,
      isDark
    );

		isDark ? surfaceNeutralColors.shift() : surfaceNeutralColors.pop();
		generated.surfaceNeutral = surfaceNeutralColors;

		const surfaceDividerBase = neutralColors[8].hex;
		const surfaceDividerColors = generateColorRange(
			surfaceDividerBase,
			colorsJson.colors.surfaceDivider.lightVariations,
			colorsJson.colors.surfaceDivider.lightPercentage,
			colorsJson.colors.surfaceDivider.darkVariations,
			colorsJson.colors.surfaceDivider.darkPercentage,
			colorsJson.colors.surfaceDivider.hook,
			colorsJson.colors.surfaceDivider.startIndex,
      false,
      isDark
		);
		isDark ? surfaceDividerColors.shift() : surfaceDividerColors.pop();
		generated.surfaceDivider = surfaceDividerColors;
	}

	return generated;
};
