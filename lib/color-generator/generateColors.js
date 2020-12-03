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

	for (const i in selectedColors) {
		switch (i) {
			case 'neutrals':
				generated[i] = getNeutrals(selectedColors[i]);
				break;

			case 'primary':
				generated[i] = getPrimary(selectedColors[i]);
				break;

			case 'secondary':
				generated[i] = getSecondary(selectedColors[i]);
				break;

			case 'selectionPrimary':
				generated[i] = getSelectionPrimary(selectedColors[i]);
				break;

			case 'selectionSecondary':
				generated[i] = getSelectionSecondary(selectedColors[i]);
				break;

			case 'interactive':
				generated[i] = getInteractive(selectedColors[i]);
				break;

			case 'link':
				generated[i] = getLink(selectedColors[i]);
				break;

			case 'focus':
				generated[i] = getFocus(selectedColors[i]);
				break;

			case 'alertCritical':
			case 'alertHigh':
			case 'alertWarning':
			case 'alertModerate':
			case 'alertInfo':
			case 'alertPositive':
			case 'alertLow':
				generated[i] = getAlert(selectedColors[i], i);
				break;

			case 'brandNeutral':
			case 'brandPrimary':
			case 'brandSecondary':
				generated[i] = getBrand(selectedColors[i], i);
				break;

			case 'surfaceNeutral':
				generated[i] = getSurfaceNeutral(selectedColors[i]);
				break;

			case 'surfaceDivider':
				generated[i] = getSurfaceDivider(selectedColors[i]);
				break;

			case 'surfaceBrand':
				generated[i] = getSurfaceBrand(selectedColors[i]);
				break;

			case 'chromeBrand':
				generated[i] = getChromeBrand(selectedColors[i]);
				break;

			case 'chromeDivider':
				generated[i] = getChromeDivider(selectedColors[i]);
				break;

			case 'groupedBlue':
			case 'groupedBrown':
			case 'groupedGray':
			case 'groupedGreen':
			case 'groupedGreenYellow':
			case 'groupedMagenta':
			case 'groupedOrange':
			case 'groupedPink':
			case 'groupedPurple':
			case 'groupedTeal':
			case 'groupedYellow':
				generated[i] = getGrouped(selectedColors[i], i);
				break;

			default:
		}
	}

	return generated;

	// const generated = {};

	// for (const color of Object.values(colorsJson.colors)) {
	// 	const {
	// 		id,
	// 		lightVariations,
	// 		lightPercentage,
	// 		darkVariations,
	// 		darkPercentage,
	// 		hook,
	// 		startIndex,
	// 	} = color;
	// 	const baseColor = selectedColors[id];

	// 	if (
	// 		!baseColor ||
	// 		baseColor.length !== 7 ||
	// 		id === 'surfaceNeutral' ||
	// 		id === 'surfaceDivider'
	// 	) {
	// 		continue;
	// 	}

	// 	generated[id] = generateColorRange(
	// 		baseColor,
	// 		lightVariations,
	// 		lightPercentage,
	// 		darkVariations,
	// 		darkPercentage,
	// 		hook,
	// 		startIndex,
	// 		id === 'neutrals' ? true : false,
	// 		isDark && id === 'neutrals' ? true : false
	// 	);
	// }

	// if (generated.neutrals) {
	// 	const neutralColors = generated.neutrals;

	// 	const surfaceNeutralBase = neutralColors[4].hex;
	// 	const surfaceNeutralColors = generateColorRange(
	// 		surfaceNeutralBase,
	// 		colorsJson.colors.surfaceNeutral.lightVariations,
	// 		colorsJson.colors.surfaceNeutral.lightPercentage,
	// 		colorsJson.colors.surfaceNeutral.darkVariations,
	// 		colorsJson.colors.surfaceNeutral.darkPercentage,
	// 		colorsJson.colors.surfaceNeutral.hook,
	// 		1,
	// 		false,
	// 		isDark
	// 	);

	// 	isDark ? surfaceNeutralColors.shift() : surfaceNeutralColors.pop();
	// 	generated.surfaceNeutral = surfaceNeutralColors;

	// 	const surfaceDividerBase = neutralColors[8].hex;
	// 	const surfaceDividerColors = generateColorRange(
	// 		surfaceDividerBase,
	// 		colorsJson.colors.surfaceDivider.lightVariations,
	// 		colorsJson.colors.surfaceDivider.lightPercentage,
	// 		colorsJson.colors.surfaceDivider.darkVariations,
	// 		colorsJson.colors.surfaceDivider.darkPercentage,
	// 		colorsJson.colors.surfaceDivider.hook,
	// 		1,
	// 		false,
	// 		isDark
	// 	);
	// 	isDark ? surfaceDividerColors.shift() : surfaceDividerColors.pop();
	// 	generated.surfaceDivider = surfaceDividerColors;
	// }
	// console.log('generated', generated);
	// return generated;
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

const generateHSLColorRange = (range) => {
	const {
		hex,
		lowVariations = 0,
		lowSaturations = [],
		lowLightness = [],
		highVariations = 0,
		highSaturations = [],
		highLightness = [],
		startIndex = 0,
		hook,
	} = range;

	let head = [],
		tail = [];
	const {h, s, l} = hexToHSL(hex);

	if (lowVariations === 1) {
		head = [HSLToHex(h, lowSaturations[0], lowLightness[0])];
	} else if (lowVariations === 2) {
		head = [
			HSLToHex(h, lowSaturations[0], lowLightness[0]),
			HSLToHex(h, lowSaturations[1], lowLightness[1]),
		];
	} else if (lowVariations > 2) {
		const divisions = 1 / (lowVariations - 1);
		const saturationDiff = Math.abs(lowSaturations[0] - lowSaturations[1]);
		const lightnessDiff = Math.abs(lowLightness[0] - lowLightness[1]);

		for (let i = 1; i <= lowVariations; i++) {
			head.push(
				HSLToHex(
					h,
					lowSaturations[0] - (i - 1) * divisions * saturationDiff,
					lowLightness[0] - (i - 1) * divisions * lightnessDiff
				)
			);
		}
	}

	if (highVariations === 1) {
		tail = [HSLToHex(h, highSaturations[0], highLightness[0])];
	} else if (highVariations === 2) {
		tail = [
			HSLToHex(h, highSaturations[0], highLightness[0]),
			HSLToHex(h, highSaturations[1], highLightness[1]),
		];
	} else if (highVariations > 2) {
		const divisions = 1 / (highVariations - 1);
		const saturationDiff = Math.abs(highSaturations[0] - highSaturations[1]);
		const lightnessDiff = Math.abs(highLightness[0] - highLightness[1]);
		for (let i = 1; i <= highVariations; i++) {
			tail.push(
				HSLToHex(
					h,
					highSaturations[0] - (i - 1) * divisions * saturationDiff,
					highLightness[0] - (i - 1) * divisions * lightnessDiff
				)
			);
		}
	}

	const out = [...head, hex, ...tail];

	return out.map((color, index) => {
		let name = `--${hook}`;
		if (startIndex !== null) {
			name += `-${index + (startIndex ? startIndex : 0)}`;
		}
		return new Color(color, name);
	});
};

const getNeutrals = (hex, isDark) => {
	if (!hex) return [];

	return generateColorRange(
		hex,
		10,
		0.95,
		9,
		0.9,
		'now-color--neutral',
		0,
		true,
		isDark
	);
};

const getPrimary = (hex, isDark) => {
	if (!hex) return [];

	return generateHSLColorRange({
		hex,
		lowVariations: 1,
		lowSaturations: [49, 49],
		lowLightness: [93],
		highVariations: 2,
		highSaturations: [41, 41],
		highLightness: [40, 26],
		startIndex: 1,
		hook: 'now-color--primary',
	});
};

const getSecondary = (hex) => {
	if (!hex) return [];

	return generateHSLColorRange({
		hex,
		lowVariations: 1,
		lowSaturations: [49, 49],
		lowLightness: [90],
		highVariations: 2,
		highSaturations: [100, 100],
		highLightness: [25, 16],
		startIndex: 1,
		hook: 'now-color--secondary',
	});
};

const getSelectionPrimary = (hex) => {
	if (!hex) return [];

	return generateHSLColorRange({
		hex,
		lowVariations: 2,
		lowSaturations: [49, 48],
		lowLightness: [90, 62],
		highVariations: 2,
		highSaturations: [100, 100],
		highLightness: [25, 16],
		startIndex: 0,
		hook: 'now-color_selection--primary',
	});
};

const getSelectionSecondary = (hex) => {
	if (!hex) return [];
	const {h} = hexToHSL(hex);
	const newHex = HSLToHex(h, 11, 85);

	return generateHSLColorRange({
		hex: newHex,
		lowVariations: 2,
		lowSaturations: [12, 10],
		lowLightness: [94, 90],
		highVariations: 2,
		highSaturations: [7, 6],
		highLightness: [81, 77],
		startIndex: 0,
		hook: 'now-color_selection--secondary',
	});
};

const getInteractive = (hex) => {
	if (!hex) return [];

	return generateHSLColorRange({
		hex,
		lowVariations: 2,
		lowSaturations: [46, 49],
		lowLightness: [93, 73],
		highVariations: 2,
		highSaturations: [41, 41],
		highLightness: [40, 26],
		startIndex: 0,
		hook: 'now-color--interactive',
	});
};

const getLink = (hex) => {
	if (!hex) return [];

	return generateHSLColorRange({
		hex,
		lowVariations: 1,
		lowSaturations: [100],
		lowLightness: [74],
		highVariations: 2,
		highSaturations: [72, 59],
		highLightness: [55, 47],
		startIndex: 1,
		hook: 'now-color--link',
	});
};

const getFocus = (hex) => {
	if (!hex) return [];

	return generateHSLColorRange({
		hex,
		lowVariations: 1,
		lowSaturations: [100],
		lowLightness: [74],
		highVariations: 1,
		highSaturations: [59],
		highLightness: [47],
		startIndex: 1,
		hook: 'now-color--focus',
	});
};

const getAlert = (hex, name) => {
	if (!hex) return [];

	name = name
		.replace(/([a-z](?=[A-Z]))/g, '$1 ')
		.split(' ')[1]
		.toLowerCase();

	return generateColorRange(
		hex,
		2,
		0.75,
		3,
		0.6,
		`now-color_alert--${name}`,
		0
	);
};

const getBrand = (hex, name) => {
	if (!hex) return [];
	name = name
		.replace(/([a-z](?=[A-Z]))/g, '$1 ')
		.split(' ')[1]
		.toLowerCase();

	return [new Color(hex, name)];
};

const getSurfaceNeutral = (hex) => {
	if (!hex) return [];

	const neutrals = generateColorRange(
		hex,
		10,
		0.95,
		9,
		0.9,
		'now-color--neutral',
		0,
		true
	);

	const colors = generateHSLColorRange({
		hex: neutrals[5].hex,
		lowVariations: 6,
		lowSaturations: [20, 11],
		lowLightness: [99, 82],
		highVariations: 0,
		highSaturations: [],
		highLightness: [],
		startIndex: 1,
		hook: 'now-color_surface--neutral',
	});
	colors.pop();
	return colors;
};

const getSurfaceDivider = (hex) => {
	if (!hex) return [];

	const neutrals = generateColorRange(
		hex,
		10,
		0.95,
		9,
		0.9,
		'now-color--neutral',
		0,
		true
	);

	const colors = generateHSLColorRange({
		hex: neutrals[9].hex,
		lowVariations: 6,
		lowSaturations: [13, 11],
		lowLightness: [95, 61],
		highVariations: 0,
		highSaturations: [],
		highLightness: [],
		startIndex: 1,
		hook: 'now-color_surface--divider',
	});
	colors.pop();
	return colors;
};

const getSurfaceBrand = (hex) => {
	if (!hex) return [];

	const {h, s} = hexToHSL(hex);
	const newHex = HSLToHex(h, s, 83);

	const colors = generateHSLColorRange({
		hex: newHex,
		lowVariations: 6,
		lowSaturations: [47, 47],
		lowLightness: [97, 83],
		highVariations: 0,
		highSaturations: [],
		highLightness: [],
		startIndex: 1,
		hook: 'now-color_surface--brand',
	});

	colors.pop();
	return colors;
};

const getChromeBrand = (hex) => {
	if (!hex) return [];

	return generateHSLColorRange({
		hex,
		lowVariations: 5,
		lowSaturations: [45, 44],
		lowLightness: [93, 61],
		highVariations: 5,
		highSaturations: [41, 40],
		highLightness: [44, 8],
		startIndex: 0,
		hook: 'now-color_chrome--brand',
	});
};

const getChromeDivider = (hex) => {
	if (!hex) return [];

	const {h, s} = hexToHSL(hex);
	const newHex = HSLToHex(h, s, 37);

	return generateHSLColorRange({
		hex: newHex,
		lowVariations: 5,
		lowSaturations: [46, 45],
		lowLightness: [91, 50],
		highVariations: 5,
		highSaturations: [45, 45],
		highLightness: [31, 6],
		startIndex: 0,
		hook: 'now-color_chrome--divider',
	});
};

const getGrouped = (hex, name) => {
	console.log(hex);
	if (!hex) return [];
	name = name.replace(/([a-z](?=[A-Z]))/g, '$1 ').split(' ');
	name.shift();
	name = name.map((e) => e.toLowerCase()).join('-');

	return generateColorRange(
		hex,
		2,
		0.7,
		3,
		0.45,
		`now-color_grouped--${name}`,
		0
	);
};
