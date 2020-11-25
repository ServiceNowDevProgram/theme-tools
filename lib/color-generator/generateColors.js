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

export const generateColors = (color1, color2, variations) => {
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
		let name = `--${hook}`;
		if (startIndex !== null) {
			name += `-${index + (startIndex ? startIndex : 0)}`;
		}
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
			1,
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
			1,
			false,
			isDark
		);
		isDark ? surfaceDividerColors.shift() : surfaceDividerColors.pop();
		generated.surfaceDivider = surfaceDividerColors;
	}

	return generated;
};

export const isHex = (hex) => {
	return /^#[0-9A-F]{6}$/i.test(hex);
};

export const hexToHSL = (H) => {
	// Convert hex to RGB first
	let r = 0,
		g = 0,
		b = 0;
	if (H.length == 4) {
		r = '0x' + H[1] + H[1];
		g = '0x' + H[2] + H[2];
		b = '0x' + H[3] + H[3];
	} else if (H.length == 7) {
		r = '0x' + H[1] + H[2];
		g = '0x' + H[3] + H[4];
		b = '0x' + H[5] + H[6];
	}
	// Then to HSL
	r /= 255;
	g /= 255;
	b /= 255;
	let cmin = Math.min(r, g, b),
		cmax = Math.max(r, g, b),
		delta = cmax - cmin,
		h = 0,
		s = 0,
		l = 0;

	if (delta == 0) h = 0;
	else if (cmax == r) h = ((g - b) / delta) % 6;
	else if (cmax == g) h = (b - r) / delta + 2;
	else h = (r - g) / delta + 4;

	h = Math.round(h * 60);

	if (h < 0) h += 360;

	l = (cmax + cmin) / 2;
	s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
	s = +(s * 100).toFixed(1);
	l = +(l * 100).toFixed(1);

	// return "hsl(" + Math.round(h) + "," + Math.round(s) + "," + Math.round(l) + ")";
	return {
		h: Math.round(h),
		s: Math.round(s),
		l: Math.round(l),
	};
};

export const HSLToHex = (h, s, l) => {
	s /= 100;
	l /= 100;

	let c = (1 - Math.abs(2 * l - 1)) * s,
		x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
		m = l - c / 2,
		r = 0,
		g = 0,
		b = 0;

	if (0 <= h && h < 60) {
		r = c;
		g = x;
		b = 0;
	} else if (60 <= h && h < 120) {
		r = x;
		g = c;
		b = 0;
	} else if (120 <= h && h < 180) {
		r = 0;
		g = c;
		b = x;
	} else if (180 <= h && h < 240) {
		r = 0;
		g = x;
		b = c;
	} else if (240 <= h && h < 300) {
		r = x;
		g = 0;
		b = c;
	} else if (300 <= h && h < 360) {
		r = c;
		g = 0;
		b = x;
	}
	// Having obtained RGB, convert channels to hex
	r = Math.round((r + m) * 255).toString(16);
	g = Math.round((g + m) * 255).toString(16);
	b = Math.round((b + m) * 255).toString(16);

	// Prepend 0s, if necessary
	if (r.length == 1) r = '0' + r;
	if (g.length == 1) g = '0' + g;
	if (b.length == 1) b = '0' + b;

	return '#' + r + g + b;
};

export const getNeutralBaseColorsFromBrandPrimaryHex = (hex) => {
	let {h, s, l} = hexToHSL(hex);

	// h = (h + 53 > 360) ? 360 : h + 53;
	s = s - 25 < 0 ? 0 : s - 25;
	l = l - 18 < 0 ? 0 : l - 18;

	return HSLToHex(h, s, l);
};

export const getPrimaryColorsFromBrandPrimaryHex = (hex) => {
	// let {h, s, l} = hexToHSL(hex);

	// h = (h - 19 < 0) ? 0 : h - 19;
	// s = (s + 41 > 100) ? 100 : s + 41;
	// l = (l + 11 > 100) ? 100 : l + 11;

	// return HSLToHex(h, s, l);
	return hex;
};

export const getSurfaceBrandColorsFromPrimaryHex = (hex) => {
	let {h, s, l} = hexToHSL(hex);

	// h = (h + 53 > 360) ? 360 : h + 53;
	// s = (s + 4 > 100) ? 100 : s + 4;
	l = l + 27 > 100 ? 100 : l + 27;

	return HSLToHex(h, s, l);
};

export const getChromeBrandColorsFromPrimaryHex = (hex) => {
	let {h, s, l} = hexToHSL(hex);

	h = h - 2 < 0 ? 0 : h - 2;
	s = s - 11 < 0 ? 0 : s - 11;
	l = l + 13 > 100 ? 100 : l + 13;

	return HSLToHex(h, s, l);
};

export const getChromeDividerColorsFromPrimaryHex = (hex) => {
	let {h, s, l} = hexToHSL(hex);

	h = h - 2 < 0 ? 0 : h - 2;
	l = l - 3 < 0 ? 0 : l - 3;

	return HSLToHex(h, s, l);
};

export const getInteractiveColorsFromPrimaryHex = (hex) => {
	let {h, s, l} = hexToHSL(hex);

	// h = (h - 2 < 0) ? 0 : h - 2;
	// l = (l - 3 < 0) ? 0 : l - 3;

	return HSLToHex(h, s, l);
};

export const getFocusColorsFromPrimaryHex = (hex) => {
	let {h, s, l} = hexToHSL(hex);

	// h = (h - 2 < 0) ? 0 : h - 2;
	// l = (l - 3 < 0) ? 0 : l - 3;

	return HSLToHex(h, s, l);
};

export const getSecondaryColorsFromSecondaryHex = (hex) => {
	let {h, s, l} = hexToHSL(hex);

	// h = (h + 33 > 360) ? 360 : h + 33;
	// s = (s + 73 > 100) ? 100 : s + 73;
	// l = (l - 33 < 30) ? 30 : l - 33;

	return HSLToHex(h, s, l);
};

export const getSelectionPrimaryFromSecondaryHex = (hex) => {
	let {h, s, l} = hexToHSL(hex);

	// h = (h + 11 > 360) ? 360 : h + 11;
	// s = (s + 57 > 100) ? 100 : s + 57;
	// l = (l - 29 < 0) ? 0 : l - 29;

	return HSLToHex(h, s, l);
};

export const getSelectionSecondaryFromSecondaryHex = (hex) => {
	let {h, s, l} = hexToHSL(hex);

	h = h - 3 < 0 ? 0 : h - 3;
	s = s - 85 < 0 ? 0 : s - 85;
	l = l + 59 > 100 ? 100 : l + 59;

	return HSLToHex(h, s, l);
};
