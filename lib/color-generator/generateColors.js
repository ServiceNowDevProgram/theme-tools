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

const generateColorRange = ({
	color,
	lightVariations,
	lightPercentage,
	darkVariations,
	darkPercentage,
	hook,
	startIndex,
	includeEnds,
	isDark,
}) => {
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

export const getColors = (colorsJson, selectedColors, isDark = false) => {
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
				generated[i] = getSurfaceNeutral(selectedColors[i], isDark);
				break;

			case 'surfaceDivider':
				generated[i] = getSurfaceDivider(selectedColors[i], isDark);
				break;

			case 'surfaceBrand':
				generated[i] = getSurfaceBrand(selectedColors[i], isDark);
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

			case 'backgroundPrimary':
				generated[i] = getBackgroundPrimary(selectedColors[i], isDark);
				break;
			case 'backgroundSecondary':
				generated[i] = getBackgroundSecondary(selectedColors[i], isDark);
				break;
			case 'backgroundTertiary':
				generated[i] = getBackgroundTertiary(selectedColors[i], isDark);
				break;
			case 'dividerPrimary':
				generated[i] = getDividerPrimary(selectedColors[i], isDark);
				break;
			case 'dividerSecondary':
				generated[i] = getDividerSecondary(selectedColors[i], isDark);
				break;
			case 'dividerTertiary':
				generated[i] = getDividerTertiary(selectedColors[i], isDark);
				break;
			case 'textPrimary':
				generated[i] = getTextPrimary(selectedColors[i], isDark);
				break;
			case 'textSecondary':
				generated[i] = getTextSecondary(selectedColors[i], isDark);
				break;
			case 'textTertiary':
				generated[i] = getTextTertiary(selectedColors[i], isDark);
				break;
			case 'borderPrimary':
				generated[i] = getBorderPrimary(selectedColors[i], isDark);
				break;
			case 'borderSecondary':
				generated[i] = getBorderSecondary(selectedColors[i], isDark);
				break;
			case 'borderTertiary':
				generated[i] = getBorderTertiary(selectedColors[i], isDark);
				break;

			default:
		}
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
	s = s - 25 < 0 ? 0 : s - 25;
	l = l - 18 < 0 ? 0 : l - 18;

	return HSLToHex(h, s, l);
};

export const getNeutrals = (hex) => {
	if (!hex) return [];

	return generateColorRange({
		color: hex,
		lightVariations: 10,
		lightPercentage: 0.95,
		darkVariations: 9,
		darkPercentage: 0.9,
		hook: 'now-color--neutral',
		startIndex: 0,
		includeEnds: true,
	});
};

const getPrimary = (hex) => {
	if (!hex) return [];

	return generateColorRange({
		color: hex,
		lightPercentage: 0.85,
		lightVariations: 1,
		darkPercentage: 0.5,
		darkVariations: 2,
		hook: 'now-color--primary',
	});
};

const getSecondary = (hex) => {
	if (!hex) return [];

	return generateColorRange({
		color: hex,
		lightPercentage: 0.85,
		lightVariations: 1,
		darkPercentage: 0.5,
		darkVariations: 2,
		hook: 'now-color--secondary',
	});
};

const getSelectionPrimary = (hex) => {
	if (!hex) return [];

	return generateColorRange({
		color: hex,
		lightPercentage: 0.85,
		lightVariations: 2,
		darkPercentage: 0.5,
		darkVariations: 2,
		hook: 'now-color_selection--primary',
	});
};

const getSelectionSecondary = (hex) => {
	if (!hex) return [];
	const {h} = hexToHSL(hex);
	const newHex = HSLToHex(h, 11, 85);

	return generateColorRange({
		color: newHex,
		lightPercentage: 0.61,
		lightVariations: 2,
		darkPercentage: 0.1,
		darkVariations: 2,
		hook: 'now-color_selection--secondary',
	});
};

const getInteractive = (hex) => {
	if (!hex) return [];

	return generateColorRange({
		color: hex,
		lightPercentage: 0.85,
		lightVariations: 2,
		darkPercentage: 0.5,
		darkVariations: 2,
		hook: 'now-color--interactive',
	});
};

const getLink = (hex) => {
	if (!hex) return [];

	return generateColorRange({
		color: hex,
		lightPercentage: 0.3,
		lightVariations: 1,
		darkPercentage: 0.25,
		darkVariations: 2,
		startIndex: 1,
		hook: 'now-color--link',
	});
};

const getFocus = (hex) => {
	if (!hex) return [];

	return generateColorRange({
		color: hex,
		lightPercentage: 0.3,
		lightVariations: 1,
		darkPercentage: 0.25,
		darkVariations: 1,
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

	return generateColorRange({
		color: hex,
		lightVariations: 2,
		lightPercentage: 0.75,
		darkVariations: 3,
		darkPercentage: 0.6,
		hook: `now-color_alert--${name}`,
		startIndex: 0,
	});
};

const getBrand = (hex, name) => {
	if (!hex) return [];
	name =
		'--now-color_brand--' +
		name
			.replace(/([a-z](?=[A-Z]))/g, '$1 ')
			.split(' ')[1]
			.toLowerCase();

	return [new Color(hex, name)];
};

const getSurfaceNeutral = (hex, isDark) => {
	if (!hex) return [];

	const neutrals = generateColorRange({
		color: hex,
		lightVariations: 10,
		lightPercentage: 0.95,
		darkVariations: 9,
		darkPercentage: 0.9,
		hook: 'now-color--neutral',
		startIndex: 0,
		includeEnds: true,
	});

	const baseNeutral = isDark ? neutrals[18].hex : neutrals[4].hex;

	const colors = generateColorRange({
		color: baseNeutral,
		lightPercentage: 0.95,
		lightVariations: 6,
		darkPercentage: 0.81,
		darkVariations: 0,
		startIndex: 1,
		hook: 'now-color_surface--neutral',
		includeEnds: false,
		isDark,
	});

	colors.pop();
	return colors;
};

const getSurfaceDivider = (hex, isDark) => {
	if (!hex) return [];

	const neutrals = generateColorRange({
		color: hex,
		lightVariations: 10,
		lightPercentage: 0.95,
		darkVariations: 9,
		darkPercentage: 0.9,
		hook: 'now-color--neutral',
		startIndex: 0,
		includeEnds: true,
	});

	const baseNeutral = isDark ? neutrals[16].hex : neutrals[9].hex;

	const colors = generateColorRange({
		color: baseNeutral,
		lightPercentage: 0.9,
		lightVariations: 6,
		darkPercentage: 0.81,
		darkVariations: 0,
		startIndex: 1,
		hook: 'now-color_surface--divider',
		includeEnds: false,
		isDark,
	});

	colors.pop();

	return colors;
};

const getSurfaceBrand = (hex, isDark) => {
	if (!hex) return [];

	const {h, s} = hexToHSL(hex);
	const newHex = HSLToHex(h, s, 83);

	const colors = generateColorRange({
		color: newHex,
		lightPercentage: 0.85,
		lightVariations: 5,
		darkPercentage: 0.5,
		darkVariations: 0,
		startIndex: 1,
		hook: 'now-color_surface--brand',
		includeEnds: false,
		isDark,
	});

	colors.pop();

	return colors;
};

const getChromeBrand = (hex) => {
	if (!hex) return [];

	return generateColorRange({
		color: hex,
		lightPercentage: 0.85,
		lightVariations: 5,
		darkPercentage: 0.5,
		darkVariations: 5,
		hook: 'now-color_chrome--brand',
	});
};

const getChromeDivider = (hex) => {
	if (!hex) return [];

	const {h, s} = hexToHSL(hex);
	const newHex = HSLToHex(h, s, 37);

	return generateColorRange({
		color: newHex,
		lightPercentage: 0.6,
		lightVariations: 5,
		darkPercentage: 0.8,
		darkVariations: 5,
		hook: 'now-color_chrome--divider',
	});
};

const getGrouped = (hex, name) => {
	if (!hex) return [];
	name = name.replace(/([a-z](?=[A-Z]))/g, '$1 ').split(' ');
	name.shift();
	name = name.map((e) => e.toLowerCase()).join('-');

	return generateColorRange({
		color: hex,
		lightVariations: 2,
		lightPercentage: 0.7,
		darkVariations: 3,
		darkPercentage: 0.45,
		hook: `now-color_grouped--${name}`,
		startIndex: 0,
	});
};

const getBackgroundPrimary = (hex, isDark) => {
	if (!hex) return [];

	const neutrals = getNeutrals(hex);
	const baseNeutral = isDark ? neutrals[18].hex : neutrals[0].hex;

	return [new Color(baseNeutral, 'now-color_background--primary')];
};

const getBackgroundSecondary = (hex, isDark) => {
	if (!hex) return [];

	const neutrals = getNeutrals(hex);
	const baseNeutral = isDark ? neutrals[16].hex : neutrals[1].hex;

	return [new Color(baseNeutral, 'now-color_background--secondary')];
};

const getBackgroundTertiary = (hex, isDark) => {
	if (!hex) return [];

	const neutrals = getNeutrals(hex);
	const baseNeutral = isDark ? neutrals[14].hex : neutrals[2].hex;

	return [new Color(baseNeutral, 'now-color_background--tertiary')];
};

const getDividerPrimary = (hex, isDark) => {
	if (!hex) return [];

	const neutrals = getNeutrals(hex);
	const baseNeutral = isDark ? neutrals[8].hex : neutrals[4].hex;

	return [new Color(baseNeutral, 'now-color_divider--primary')];
};

const getDividerSecondary = (hex, isDark) => {
	if (!hex) return [];

	const neutrals = getNeutrals(hex);
	const baseNeutral = isDark ? neutrals[10].hex : neutrals[3].hex;

	return [new Color(baseNeutral, 'now-color_divider--secondary')];
};

const getDividerTertiary = (hex, isDark) => {
	if (!hex) return [];

	const neutrals = getNeutrals(hex);
	const baseNeutral = isDark ? neutrals[12].hex : neutrals[2].hex;

	return [new Color(baseNeutral, 'now-color_divider--tertiary')];
};

const getTextPrimary = (hex, isDark) => {
	if (!hex) return [];

	const neutrals = getNeutrals(hex);
	const baseNeutral = isDark ? neutrals[0].hex : neutrals[18].hex;

	return [new Color(baseNeutral, 'now-color_text--primary')];
};

const getTextSecondary = (hex, isDark) => {
	if (!hex) return [];

	const neutrals = getNeutrals(hex);
	const baseNeutral = isDark ? neutrals[4].hex : neutrals[12].hex;

	return [new Color(baseNeutral, 'now-color_text--secondary')];
};

const getTextTertiary = (hex, isDark) => {
	if (!hex) return [];

	const neutrals = getNeutrals(hex);
	const baseNeutral = isDark ? neutrals[6].hex : neutrals[9].hex;

	return [new Color(baseNeutral, 'now-color_text--tertiary')];
};

const getBorderPrimary = (hex, isDark) => {
	if (!hex) return [];

	const neutrals = getNeutrals(hex);
	const baseNeutral = isDark ? neutrals[1].hex : neutrals[7].hex;

	return [new Color(baseNeutral, 'now-color_border--primary')];
};

const getBorderSecondary = (hex, isDark) => {
	if (!hex) return [];

	const neutrals = getNeutrals(hex);
	const baseNeutral = isDark ? neutrals[2].hex : neutrals[5].hex;

	return [new Color(baseNeutral, 'now-color_border--secondary')];
};

const getBorderTertiary = (hex, isDark) => {
	if (!hex) return [];

	const neutrals = getNeutrals(hex);
	const baseNeutral = isDark ? neutrals[3].hex : neutrals[3].hex;

	return [new Color(baseNeutral, 'now-color_border--tertiary')];
};
