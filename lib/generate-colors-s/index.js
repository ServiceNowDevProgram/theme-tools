// This is used to help proof out color generation with a11y
import POLARIS_JSON from './polaris.json';
import {colorGenConfigs} from './color-gen-configs';
import {camelCase} from 'lodash';

class Color {
	/**
	 * @param {string} hexColor - Hex color in format "#XXXXXX"
	 * @param {string} id - Theme hook without the -- in front of it, e.g. "now-color--neutral-"
	 * @param {number|null} index - If color is in a range, index in the range. If not `null`.
	 */
	constructor(hexColor, id = '', index, hookId = null) {
		this.hex = hexColor;
		this.rgb = hexToRgb(hexColor);
		this.hsl = hexToHSL(hexColor);

		this.id = id;
		this.index = index;
		this.label = getLabel(id);

		this.customProperty = `--${id}`;
		this.scssVariable = `$${id}`;

		/* for backwards compat */
		this.name = this.customProperty;
		if (hookId) {
			this.hookId = hookId;
			this.hookLabel = getLabel(hookId);
		}
	}
}

export const getGroupName = (color) => {
	let group = camelCase(color.replace(/[^a-z]+/g, '_').slice(11));
	if (group === 'neutral') return 'neutrals';
	return group;
};

const getLabel = (cssVar) => {
	if (cssVar.startsWith('now-color_'))
		return cssVar.substring('now-color_'.length);
	else if (cssVar.startsWith('now-color--'))
		return cssVar.substring('now-color--'.length);
	else if (cssVar.startsWith('now-color-'))
		return cssVar.substring('now-color-'.length);
};

const hex = (color) => {
	const colorString = color.toString(16);
	return colorString.length === 1 ? `0${colorString}` : colorString;
};

const calculateColor = (color1, color2, ratio) => {
	ratio = (Math.round(ratio * 100) / 100).toFixed(2);

	const r = Math.round(
		parseInt(color2.substring(0, 2), 16) * ratio +
			parseInt(color1.substring(0, 2), 16) * (1 - ratio)
	);
	const g = Math.round(
		parseInt(color2.substring(2, 4), 16) * ratio +
			parseInt(color1.substring(2, 4), 16) * (1 - ratio)
	);
	const b = Math.round(
		parseInt(color2.substring(4, 6), 16) * ratio +
			parseInt(color1.substring(4, 6), 16) * (1 - ratio)
	);

	return hex(r) + hex(g) + hex(b);
};

export const hexToRgb = (hex) => {
	if (!hex || !isHex(hex)) return '';
	let h = hex;
	if (h.length === 4) {
		h = hex.slice(1);
		h = `#${h}${h}`;
	}
	const r = parseInt(h.substring(1, 3), 16);
	const g = parseInt(h.substring(3, 5), 16);
	const b = parseInt(h.substring(5, 7), 16);

	return `${r},${g},${b}`;
};

export const rgbToHex = (rgb) => {
	if (!rgb || !isRGB(rgb)) return '';

	const newRGB = rgb.split(',');

	let r = parseInt(newRGB[0]).toString(16);
	let g = parseInt(newRGB[1]).toString(16);
	let b = parseInt(newRGB[2]).toString(16);

	if (r.length === 1) r = '0' + r;
	if (g.length === 1) g = '0' + g;
	if (b.length === 1) b = '0' + b;

	return '#' + r + g + b;
};

export const generateColors = (color1, color2, variations) => {
	if (!variations) {
		return [];
	}

	color1 = color1.startsWith('#') ? color1 : `#${color1}`;
	color2 = color2.startsWith('#') ? color2 : `#${color2}`;
	let percentage = 1 / variations;
	let colors = [];

	for (let i = 1; i <= variations - 1; i++) {
		colors = [
			...colors,
			'#' + calculateColor(color1.slice(1), color2.slice(1), i * percentage),
		];
	}

	return colors;
};

export const getBaseIndex = (hex, totalVariations) => {
	if (!hex || !totalVariations) return 0;

	const {l} = hexToHSL(hex);
	let index = Math.ceil(totalVariations * (l / 100));
	return totalVariations - index >= totalVariations
		? totalVariations - 1
		: totalVariations - index;
};

//ensure color is 6 char long NOT 3 (FFFFFF vs FFF)
export const generateColorScale = ({
	color,
	lightVariations = 0,
	lightPercentage = 0,
	lightSaturation,
	darkVariations,
	darkPercentage,
	darkSaturation,
	hook = 'hook',
	startIndex = 0,
	includeEnds,
	isReverse,
	removeBase,
	totalVariations,
}) => {
	if (!color) return [];

	if (color.length === 4) {
		const c = color.slice(1);
		color = `#${c}${c}`;
	}

	if (!lightVariations && !darkVariations) {
		return [new Color(color, hook.replace(/^--/, ''))];
	}

	const lightColors = [];
	const darkColors = [];
	let baseIndex;

	if (totalVariations) {
		baseIndex = getBaseIndex(color, totalVariations);
		lightVariations = baseIndex;
		darkVariations = totalVariations - baseIndex + startIndex - 1;
	}

	const lightLightIncrements = lightPercentage / lightVariations;
	const lightSaturationIncrements = lightSaturation / lightVariations;
	const darkLightIncrements = darkPercentage / darkVariations;
	const darkSaturationIncrements = darkSaturation / darkVariations;
	let newLightBaseColor = color;
	let newDarkBaseColor = color;

	for (var i = 0; i < lightVariations; i++) {
		if (lightSaturation) {
			const lightBaseColorHSL = hexToHSL(color);
			const lightSVal =
				lightBaseColorHSL.s +
				lightBaseColorHSL.s * lightSaturationIncrements * (i + 1);
			lightBaseColorHSL.s = lightSVal > 100 ? 100 : lightSVal;
			newLightBaseColor = HSLToHex(
				lightBaseColorHSL.h,
				lightBaseColorHSL.s,
				lightBaseColorHSL.l
			);
		}
		const calculatedLightColor = calculateColor(
			'ffffff',
			newLightBaseColor.slice(1),
			1 - (i + 1) * lightLightIncrements
		);

		lightColors.push('#' + calculatedLightColor);
	}

	for (var x = 0; x < darkVariations; x++) {
		if (darkSaturation) {
			const darkBaseColorHSL = hexToHSL(color);
			const darkSVal =
				darkBaseColorHSL.s +
				darkBaseColorHSL.s * darkSaturationIncrements * (x + 1);
			darkBaseColorHSL.s = darkSVal > 100 ? 100 : darkSVal;
			newDarkBaseColor = HSLToHex(
				darkBaseColorHSL.h,
				darkBaseColorHSL.s,
				darkBaseColorHSL.l
			);
		}

		const calculateDarkColor = calculateColor(
			'000000',
			newDarkBaseColor.slice(1),
			1 - (x + 1) * darkLightIncrements
		);
		darkColors.push('#' + calculateDarkColor);
	}

	if (includeEnds) {
		lightColors.push('#ffffff');
		darkColors.push('#000000');
	}

	lightColors.reverse();

	let out = [];
	if (removeBase) {
		out = [...lightColors, ...darkColors];
	} else {
		out = [...lightColors, color, ...darkColors];
	}

	if (isReverse) {
		out.reverse();
	}

	return out.map((color, i) => {
		const index = startIndex + i;
		let id = hook;
		if (startIndex !== null) {
			id += `-${index}`;
		}
		return new Color(color, id, index);
	});
};

export const getColors = (selectedColors, isDark = false) => {
	const generated = {};
	const metaData = {};

	for (const i in selectedColors) {
		switch (i) {
			case 'neutrals':
				generated[i] = getNeutrals(selectedColors[i]);
				generated['surfaceNeutral'] = getSurfaceNeutral(
					selectedColors[i],
					isDark
				);
				generated['surfaceDivider'] = getSurfaceDivider(
					selectedColors[i],
					isDark
				);
				generated['backgroundPrimary'] = getBackgroundPrimary(
					selectedColors[i],
					isDark
				);
				generated['backgroundSecondary'] = getBackgroundSecondary(
					selectedColors[i],
					isDark
				);
				generated['backgroundTertiary'] = getBackgroundTertiary(
					selectedColors[i],
					isDark
				);
				generated['dividerPrimary'] = getDividerPrimary(
					selectedColors[i],
					isDark
				);
				generated['dividerSecondary'] = getDividerSecondary(
					selectedColors[i],
					isDark
				);
				generated['dividerTertiary'] = getDividerTertiary(
					selectedColors[i],
					isDark
				);
				generated['textPrimary'] = getTextPrimary(selectedColors[i], isDark);
				generated['textSecondary'] = getTextSecondary(
					selectedColors[i],
					isDark
				);
				generated['textTertiary'] = getTextTertiaryActionable(
					selectedColors[i],
					isDark
				);
				generated['textPrimaryActionable'] = getTextPrimaryActionable(
					selectedColors[i],
					isDark
				);
				generated['textSecondaryActionable'] = getTextSecondaryActionable(
					selectedColors[i],
					isDark
				);
				generated['textTertiaryActionable'] = getTextTertiary(
					selectedColors[i],
					isDark
				);
				generated['borderPrimary'] = getBorderPrimary(
					selectedColors[i],
					isDark
				);
				generated['borderSecondary'] = getBorderSecondary(
					selectedColors[i],
					isDark
				);
				generated['borderTertiary'] = getBorderTertiary(
					selectedColors[i],
					isDark
				);
				generated['focusRingShadow'] = getFocusRingShadow(selectedColors[i]);
				break;

			case 'primary':
				generated[i] = getPrimary(selectedColors[i], isDark);
				break;

			case 'secondary':
				generated[i] = getSecondary(selectedColors[i], isDark);
				break;

			case 'selectionPrimary':
				generated[i] = getSelectionPrimary(selectedColors[i], isDark);
				break;

			case 'selectionSecondary':
				generated[i] = getSelectionSecondary(selectedColors[i], isDark);
				break;

			case 'interactive':
				generated[i] = getInteractive(selectedColors[i], isDark);
				break;

			case 'link':
				generated[i] = getLink(selectedColors[i], isDark);
				break;

			case 'focus':
				generated[i] = getFocus(selectedColors[i], isDark);
				generated['focusRing'] = getFocusRing(selectedColors[i]);
				break;

			case 'alertCritical':
				generated[i] = getAlertCritical(selectedColors[i], isDark);
				break;

			case 'alertHigh':
				generated[i] = getAlertHigh(selectedColors[i], isDark);
				break;

			case 'alertWarning':
				generated[i] = getAlertWarning(selectedColors[i], isDark);
				break;

			case 'alertModerate':
				generated[i] = getAlertModerate(selectedColors[i], isDark);
				break;

			case 'alertInfo':
				generated[i] = getAlertInfo(selectedColors[i], isDark);
				break;

			case 'alertPositive':
				generated[i] = getAlertPositive(selectedColors[i], isDark);
				break;

			case 'alertLow':
				generated[i] = getAlertLow(selectedColors[i], isDark);
				break;

			case 'brandNeutral':
			case 'brandPrimary':
			case 'brandSecondary':
				generated[i] = getBrand(selectedColors[i], i);
				break;
			case 'surfaceBrand':
				generated[i] = getSurfaceBrand(selectedColors[i], isDark);
				break;
			case 'chromeBrand':
				generated[i] = getChromeBrand(selectedColors[i], isDark);
				break;

			case 'chromeDivider':
				generated[i] = getChromeDivider(selectedColors[i], isDark);
				break;
			case 'groupedBlue':
				generated[i] = getGroupedBlue(selectedColors[i], isDark);
				break;
			case 'groupedBrown':
				generated[i] = getGroupedBrown(selectedColors[i], isDark);
				break;
			case 'groupedGray':
				generated[i] = getGroupedGray(selectedColors[i], isDark);
				break;
			case 'groupedGreen':
				generated[i] = getGroupedGreen(selectedColors[i], isDark);
				break;
			case 'groupedGreenYellow':
				generated[i] = getGroupedGreenYellow(selectedColors[i], isDark);
				break;
			case 'groupedMagenta':
				generated[i] = getGroupedMagenta(selectedColors[i], isDark);
				break;
			case 'groupedOrange':
				generated[i] = getGroupedOrange(selectedColors[i], isDark);
				break;
			case 'groupedPink':
				generated[i] = getGroupedPink(selectedColors[i], isDark);
				break;
			case 'groupedPurple':
				generated[i] = getGroupedPurple(selectedColors[i], isDark);
				break;
			case 'groupedTeal':
				generated[i] = getGroupedTeal(selectedColors[i], isDark);
				break;
			case 'groupedYellow':
				generated[i] = getGroupedYellow(selectedColors[i], isDark);
				break;
			default:
		}
	}

	//after neutral scale is generated use neutral-11 to inform secondaryNavBrand and secondaryNavDivider
	generated['secondaryNavBrand'] = getSecondaryNavBrand(
		selectedColors['secondaryNavBrand'] ?? generated.neutrals[10].hex
	);
	generated['secondaryNavDivider'] = getSecondaryNavDivider(
		selectedColors['secondaryNavDivider'] ?? generated.neutrals[10].hex
	);

	return {...generated, metaData};
};

export const isHex = (hex) => {
	return /^#(?:[A-Fa-f0-9]{3}){1,2}$/gm.test(hex);
};

export const isRGB = (rgb) => {
	rgb = `rgb(${rgb})`;
	return /^rgb[(](?:\s*0*(?:\d\d?(?:\.\d+)?(?:\s*%)?|\.\d+\s*%|100(?:\.0*)?\s*%|(?:1\d\d|2[0-4]\d|25[0-5])(?:\.\d+)?)\s*(?:,(?![)])|(?=[)]))){3}[)]$/gm.test(
		rgb
	);
};

export const isHSL = (h, s, l) => {
	const hsl = `hsl(${h},${s},${l})`;
	return /hsl\((\d+),\s*([\d.]+),\s*([\d.]+)\)/g.test(hsl);
};

export const hexToHSL = (H) => {
	if (!H || !isHex(H)) return {h: '', s: '', l: ''};

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

	return {
		h: Math.round(h),
		s: Math.round(s),
		l: Math.round(l),
	};
};

export const HSLToHex = (h, s, l) => {
	if (!isHSL(h, s, l)) return '';

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
	s = s > 5 ? 5 : s;
	l = 35;
	return HSLToHex(h, s, l);
};

export const getNeutrals = (hex) => {
	if (!hex) return [];

	const {neutrals} = colorGenConfigs;
	return generateColorScale({
		...neutrals,
		...{
			color: getNeutralBaseColorsFromBrandPrimaryHex(hex),
		},
	});
};

const getPrimary = (hex, isDark) => {
	if (!hex) return [];
	const {lightPrimary, darkPrimary} = colorGenConfigs;
	const config = isDark ? darkPrimary : lightPrimary;
	return generateColorScale({
		...config,
		...{
			color: hex,
		},
	});
};

const getSecondary = (hex, isDark) => {
	if (!hex) return [];
	const {lightSecondary, darkSecondary} = colorGenConfigs;
	const config = isDark ? darkSecondary : lightSecondary;
	return generateColorScale({
		...config,
		...{
			color: hex,
		},
	});
};

const getChromeBrand = (hex) => {
	if (!hex) return [];
	const {chromeBrand} = colorGenConfigs;
	return generateColorScale({
		...chromeBrand,
		...{
			color: hex,
		},
	});
};

const desaturateBase = (hex) => {
	let {h, s, l} = hexToHSL(hex);
	s = s > 5 ? 5 : s;
	return HSLToHex(h, s, l);
};
const getChromeDivider = (hex) => {
	if (!hex) return [];
	const {chromeDivider} = colorGenConfigs;
	return generateColorScale({
		...chromeDivider,
		...{
			color: desaturateBase(hex),
		},
	});
};

export const getSecondaryNavBrand = (hex) => {
	if (!hex) return [];
	const {secondaryNavBrand} = colorGenConfigs;
	return generateColorScale({
		...secondaryNavBrand,
		...{
			color: hex,
		},
	});
};

export const getSecondaryNavDivider = (hex) => {
	if (!hex) return [];
	const {secondaryNavDivider} = colorGenConfigs;
	return generateColorScale({
		...secondaryNavDivider,
		...{
			color: desaturateBase(hex),
		},
	});
};

//TODO: complete optimization of remaining colors
const getSelectionPrimary = (hex, isDark) => {
	if (!hex) return [];

	if (isDark) {
		return generateColorScale({
			color: hex,
			lightPercentage: 0.6,
			lightVariations: 2,
			darkPercentage: 0.72,
			darkVariations: 2,
			hook: 'now-color_selection--primary',
			isReverse: true,
		});
	} else {
		return generateColorScale({
			color: hex,
			lightPercentage: 0.85,
			lightVariations: 2,
			darkPercentage: 0.5,
			darkVariations: 2,
			hook: 'now-color_selection--primary',
			totalVariations: 5,
		});
	}
};

const getSelectionSecondary = (hex, isDark) => {
	if (!hex) return [];

	if (isDark) {
		return generateColorScale({
			color: hex,
			lightPercentage: 0.78,
			lightVariations: 2,
			darkPercentage: 0.68,
			darkVariations: 2,
			hook: 'now-color_selection--secondary',
			isReverse: true,
		});
	} else {
		return generateColorScale({
			color: hex,
			lightPercentage: 0.74,
			lightVariations: 2,
			darkPercentage: 0.65,
			darkVariations: 2,
			hook: 'now-color_selection--secondary',
			totalVariations: 5,
		});
	}
};

const getInteractive = (hex, isDark) => {
	if (!hex) return [];

	if (isDark) {
		return generateColorScale({
			color: hex,
			lightPercentage: 0.78,
			lightVariations: 2,
			darkPercentage: 0.68,
			darkVariations: 2,
			hook: 'now-color--interactive',
			isReverse: true,
		});
	} else {
		return generateColorScale({
			color: hex,
			lightPercentage: 0.74,
			lightVariations: 2,
			darkPercentage: 0.7,
			darkVariations: 2,
			hook: 'now-color--interactive',
			totalVariations: 5,
		});
	}
};

const getLink = (hex, isDark) => {
	if (!hex) return [];

	if (isDark) {
		return generateColorScale({
			color: hex,
			lightPercentage: 0.6,
			lightVariations: 2,
			darkPercentage: 0.31,
			darkVariations: 1,
			startIndex: 1,
			hook: 'now-color--link',
			isReverse: true,
		});
	} else {
		return generateColorScale({
			color: hex,
			lightPercentage: 0.32,
			lightVariations: 1,
			darkPercentage: 0.63,
			darkVariations: 2,
			startIndex: 1,
			hook: 'now-color--link',
			totalVariations: 4,
		});
	}
};

const getFocus = (hex, isDark) => {
	if (!hex) return [];

	if (isDark) {
		return generateColorScale({
			color: hex,
			lightPercentage: 0.6,
			lightVariations: 1,
			darkPercentage: 0.31,
			darkVariations: 1,
			startIndex: 1,
			hook: 'now-color--focus',
			isReverse: true,
		});
	} else {
		return generateColorScale({
			color: hex,
			lightPercentage: 0.3,
			lightVariations: 1,
			darkPercentage: 0.63,
			darkVariations: 1,
			startIndex: 1,
			hook: 'now-color--focus',
			totalVariations: 3,
		});
	}
};

const getAlertCritical = (hex, isDark) => {
	if (!hex) return [];

	if (isDark) {
		return generateColorScale({
			color: hex,
			lightPercentage: 0.75,
			lightVariations: 3,
			darkPercentage: 0.44,
			darkVariations: 2,
			startIndex: 0,
			hook: 'now-color_alert--critical',
			isReverse: isDark,
		});
	} else {
		return generateColorScale({
			color: hex,
			lightPercentage: 0.75,
			lightVariations: 2,
			darkPercentage: 0.6,
			darkVariations: 3,
			startIndex: 0,
			hook: 'now-color_alert--critical',
		});
	}
};

const getAlertHigh = (hex, isDark) => {
	if (!hex) return [];

	if (isDark) {
		return generateColorScale({
			color: hex,
			lightPercentage: 0.75,
			lightVariations: 3,
			darkPercentage: 0.45,
			darkVariations: 2,
			startIndex: 0,
			hook: 'now-color_alert--high',
			isReverse: isDark,
		});
	} else {
		return generateColorScale({
			color: hex,
			lightPercentage: 0.75,
			lightVariations: 2,
			darkPercentage: 0.72,
			darkVariations: 3,
			startIndex: 0,
			hook: 'now-color_alert--high',
		});
	}
};

const getAlertWarning = (hex, isDark) => {
	if (!hex) return [];

	if (isDark) {
		return generateColorScale({
			color: hex,
			lightPercentage: 0.75,
			lightVariations: 3,
			darkPercentage: 0.5,
			darkVariations: 2,
			startIndex: 0,
			hook: 'now-color_alert--warning',
			isReverse: isDark,
		});
	} else {
		return generateColorScale({
			color: hex,
			lightPercentage: 0.75,
			lightVariations: 2,
			darkPercentage: 0.72,
			darkVariations: 3,
			startIndex: 0,
			hook: 'now-color_alert--warning',
		});
	}
};

const getAlertModerate = (hex, isDark) => {
	if (!hex) return [];

	if (isDark) {
		return generateColorScale({
			color: hex,
			lightPercentage: 0.74,
			lightVariations: 3,
			darkPercentage: 0.4,
			darkVariations: 2,
			startIndex: 0,
			hook: 'now-color_alert--moderate',
			isReverse: isDark,
		});
	} else {
		return generateColorScale({
			color: hex,
			lightPercentage: 0.74,
			lightVariations: 2,
			darkPercentage: 0.72,
			darkVariations: 3,
			startIndex: 0,
			hook: 'now-color_alert--moderate',
		});
	}
};

const getAlertInfo = (hex, isDark) => {
	if (!hex) return [];

	if (isDark) {
		return generateColorScale({
			color: hex,
			lightPercentage: 0.74,
			lightVariations: 3,
			darkPercentage: 0.45,
			darkVariations: 2,
			startIndex: 0,
			hook: 'now-color_alert--info',
			isReverse: isDark,
		});
	} else {
		return generateColorScale({
			color: hex,
			lightPercentage: 0.74,
			lightVariations: 2,
			darkPercentage: 0.72,
			darkVariations: 3,
			startIndex: 0,
			hook: 'now-color_alert--info',
		});
	}
};

const getAlertPositive = (hex, isDark) => {
	if (!hex) return [];

	if (isDark) {
		return generateColorScale({
			color: hex,
			lightPercentage: 0.71,
			lightVariations: 3,
			darkPercentage: 0.47,
			darkVariations: 2,
			startIndex: 0,
			hook: 'now-color_alert--positive',
			isReverse: isDark,
		});
	} else {
		return generateColorScale({
			color: hex,
			lightPercentage: 0.74,
			lightVariations: 2,
			darkPercentage: 0.79,
			darkVariations: 3,
			startIndex: 0,
			hook: 'now-color_alert--positive',
		});
	}
};

const getAlertLow = (hex, isDark) => {
	if (!hex) return [];

	if (isDark) {
		return generateColorScale({
			color: hex,
			lightPercentage: 0.71,
			lightVariations: 3,
			darkPercentage: 0.5,
			darkVariations: 2,
			startIndex: 0,
			hook: 'now-color_alert--low',
			isReverse: isDark,
		});
	} else {
		return generateColorScale({
			color: hex,
			lightPercentage: 0.74,
			lightVariations: 2,
			darkPercentage: 0.79,
			darkVariations: 3,
			startIndex: 0,
			hook: 'now-color_alert--low',
		});
	}
};

const getBrand = (hex, name) => {
	if (!hex) return [];
	name =
		'now-color_brand--' +
		name
			.replace(/([a-z](?=[A-Z]))/g, '$1 ')
			.split(' ')[1]
			.toLowerCase();

	return [new Color(hex, name)];
};

const getSurfaceNeutral = (hex, isDark) => {
	if (!hex) return [];

	const neutrals = getNeutrals(hex);
	let baseNeutral = isDark ? neutrals[13].hex : neutrals[4].hex;

	if (isDark) {
		return generateColorScale({
			color: baseNeutral,
			lightPercentage: 0,
			lightVariations: 0,
			darkPercentage: 0.83,
			darkVariations: 6,
			startIndex: 1,
			hook: 'now-color_surface--neutral',
			includeEnds: false,
			removeBase: true,
			isReverse: isDark,
		});
	} else {
		return generateColorScale({
			color: baseNeutral,
			lightPercentage: 0.95,
			lightVariations: 6,
			darkPercentage: 0.81,
			darkVariations: 0,
			startIndex: 1,
			hook: 'now-color_surface--neutral',
			includeEnds: false,
			removeBase: true,
		});
	}
};

const getSurfaceDivider = (hex, isDark) => {
	if (!hex) return [];

	const neutrals = getNeutrals(hex);
	let baseNeutral = isDark ? neutrals[9].hex : neutrals[8].hex;

	if (isDark) {
		return generateColorScale({
			color: baseNeutral,
			lightPercentage: 0,
			lightVariations: 0,
			darkPercentage: 0.75,
			darkSaturation: 1,
			darkVariations: 6,
			startIndex: 1,
			hook: 'now-color_surface--divider',
			includeEnds: false,
			removeBase: true,
			isReverse: isDark,
		});
	} else {
		return generateColorScale({
			color: baseNeutral,
			lightPercentage: 0.9,
			lightVariations: 6,
			darkPercentage: 0.81,
			darkVariations: 0,
			startIndex: 1,
			hook: 'now-color_surface--divider',
			includeEnds: false,
			removeBase: true,
			totalVariations: 7,
		});
	}
};

const getSurfaceBrand = (hex, isDark) => {
	if (!hex) return [];

	if (isDark) {
		return generateColorScale({
			color: hex,
			lightPercentage: 0,
			lightVariations: 0,
			darkPercentage: 0.8,
			darkVariations: 5,
			startIndex: 1,
			hook: 'now-color_surface--brand',
			includeEnds: false,
			isReverse: isDark,
		});
	} else {
		return generateColorScale({
			color: hex,
			lightPercentage: 0.9,
			lightVariations: 5,
			darkPercentage: 0.5,
			darkVariations: 0,
			startIndex: 1,
			hook: 'now-color_surface--brand',
			includeEnds: false,
			totalVariations: 6,
		});
	}
};

const getGroupedBlue = (hex, isDark) => {
	if (!hex) return [];

	if (isDark) {
		return generateColorScale({
			color: hex,
			lightVariations: 3,
			lightPercentage: 0.75,
			darkVariations: 2,
			darkPercentage: 0.46,
			hook: `now-color_grouped--blue`,
			startIndex: 0,
			isReverse: isDark,
		});
	} else {
		return generateColorScale({
			color: hex,
			lightVariations: 2,
			lightPercentage: 0.75,
			darkVariations: 3,
			darkPercentage: 0.65,
			hook: `now-color_grouped--blue`,
			startIndex: 0,
		});
	}
};

const getGroupedBrown = (hex, isDark) => {
	if (!hex) return [];

	if (isDark) {
		return generateColorScale({
			color: hex,
			lightVariations: 3,
			lightPercentage: 0.75,
			darkVariations: 2,
			darkPercentage: 0.46,
			hook: `now-color_grouped--brown`,
			startIndex: 0,
			isReverse: isDark,
		});
	} else {
		return generateColorScale({
			color: hex,
			lightVariations: 2,
			lightPercentage: 0.75,
			darkVariations: 3,
			darkPercentage: 0.65,
			hook: `now-color_grouped--brown`,
			startIndex: 0,
		});
	}
};

const getGroupedGray = (hex, isDark) => {
	if (!hex) return [];

	if (isDark) {
		return generateColorScale({
			color: hex,
			lightVariations: 3,
			lightPercentage: 0.75,
			darkVariations: 2,
			darkPercentage: 0.5,
			hook: `now-color_grouped--gray`,
			startIndex: 0,
			isReverse: isDark,
		});
	} else {
		return generateColorScale({
			color: hex,
			lightVariations: 2,
			lightPercentage: 0.75,
			darkVariations: 3,
			darkPercentage: 0.65,
			hook: `now-color_grouped--gray`,
			startIndex: 0,
		});
	}
};

const getGroupedGreen = (hex, isDark) => {
	if (!hex) return [];

	if (isDark) {
		return generateColorScale({
			color: hex,
			lightVariations: 3,
			lightPercentage: 0.75,
			darkVariations: 2,
			darkPercentage: 0.45,
			hook: `now-color_grouped--green`,
			startIndex: 0,
			isReverse: isDark,
		});
	} else {
		return generateColorScale({
			color: hex,
			lightVariations: 2,
			lightPercentage: 0.75,
			darkVariations: 3,
			darkPercentage: 0.65,
			hook: `now-color_grouped--green`,
			startIndex: 0,
		});
	}
};

const getGroupedGreenYellow = (hex, isDark) => {
	if (!hex) return [];

	if (isDark) {
		return generateColorScale({
			color: hex,
			lightVariations: 3,
			lightPercentage: 0.75,
			darkVariations: 2,
			darkPercentage: 0.5,
			hook: `now-color_grouped--green-yellow`,
			startIndex: 0,
			isReverse: isDark,
		});
	} else {
		return generateColorScale({
			color: hex,
			lightVariations: 2,
			lightPercentage: 0.75,
			darkVariations: 3,
			darkPercentage: 0.65,
			hook: `now-color_grouped--green-yellow`,
			startIndex: 0,
		});
	}
};

const getGroupedMagenta = (hex, isDark) => {
	if (!hex) return [];

	if (isDark) {
		return generateColorScale({
			color: hex,
			lightVariations: 3,
			lightPercentage: 0.75,
			darkVariations: 2,
			darkPercentage: 0.43,
			hook: `now-color_grouped--magenta`,
			startIndex: 0,
			isReverse: isDark,
		});
	} else {
		return generateColorScale({
			color: hex,
			lightVariations: 2,
			lightPercentage: 0.75,
			darkVariations: 3,
			darkPercentage: 0.65,
			hook: `now-color_grouped--magenta`,
			startIndex: 0,
		});
	}
};

const getGroupedOrange = (hex, isDark) => {
	if (!hex) return [];

	if (isDark) {
		return generateColorScale({
			color: hex,
			lightVariations: 3,
			lightPercentage: 0.75,
			darkVariations: 2,
			darkPercentage: 0.43,
			hook: `now-color_grouped--orange`,
			startIndex: 0,
			isReverse: isDark,
		});
	} else {
		return generateColorScale({
			color: hex,
			lightVariations: 2,
			lightPercentage: 0.75,
			darkVariations: 3,
			darkPercentage: 0.65,
			hook: `now-color_grouped--orange`,
			startIndex: 0,
		});
	}
};

const getGroupedPink = (hex, isDark) => {
	if (!hex) return [];

	if (isDark) {
		return generateColorScale({
			color: hex,
			lightVariations: 3,
			lightPercentage: 0.75,
			darkVariations: 2,
			darkPercentage: 0.42,
			hook: `now-color_grouped--pink`,
			startIndex: 0,
			isReverse: isDark,
		});
	} else {
		return generateColorScale({
			color: hex,
			lightVariations: 2,
			lightPercentage: 0.75,
			darkVariations: 3,
			darkPercentage: 0.65,
			hook: `now-color_grouped--pink`,
			startIndex: 0,
		});
	}
};

const getGroupedPurple = (hex, isDark) => {
	if (!hex) return [];

	if (isDark) {
		return generateColorScale({
			color: hex,
			lightVariations: 3,
			lightPercentage: 0.75,
			darkVariations: 2,
			darkPercentage: 0.4,
			hook: `now-color_grouped--purple`,
			startIndex: 0,
			isReverse: isDark,
		});
	} else {
		return generateColorScale({
			color: hex,
			lightVariations: 2,
			lightPercentage: 0.75,
			darkVariations: 3,
			darkPercentage: 0.65,
			hook: `now-color_grouped--purple`,
			startIndex: 0,
		});
	}
};

const getGroupedTeal = (hex, isDark) => {
	if (!hex) return [];

	if (isDark) {
		return generateColorScale({
			color: hex,
			lightVariations: 3,
			lightPercentage: 0.75,
			darkVariations: 2,
			darkPercentage: 0.49,
			hook: `now-color_grouped--teal`,
			startIndex: 0,
			isReverse: isDark,
		});
	} else {
		return generateColorScale({
			color: hex,
			lightVariations: 2,
			lightPercentage: 0.75,
			darkVariations: 3,
			darkPercentage: 0.65,
			hook: `now-color_grouped--teal`,
			startIndex: 0,
		});
	}
};

const getGroupedYellow = (hex, isDark) => {
	if (!hex) return [];

	if (isDark) {
		return generateColorScale({
			color: hex,
			lightVariations: 3,
			lightPercentage: 0.75,
			darkVariations: 2,
			darkPercentage: 0.48,
			hook: `now-color_grouped--yellow`,
			startIndex: 0,
			isReverse: isDark,
		});
	} else {
		return generateColorScale({
			color: hex,
			lightVariations: 2,
			lightPercentage: 0.75,
			darkVariations: 3,
			darkPercentage: 0.65,
			hook: `now-color_grouped--yellow`,
			startIndex: 0,
		});
	}
};

const getBackgroundPrimary = (hex, isDark) => {
	if (!hex) return [];

	const neutrals = getNeutrals(hex);
	const baseNeutral = isDark ? neutrals[20].hex : neutrals[0].hex;

	return [new Color(baseNeutral, 'now-color_background--primary')];
};

const getBackgroundSecondary = (hex, isDark) => {
	if (!hex) return [];

	const neutrals = getNeutrals(hex);
	const baseNeutral = isDark ? neutrals[18].hex : neutrals[1].hex;

	return [new Color(baseNeutral, 'now-color_background--secondary')];
};

const getBackgroundTertiary = (hex, isDark) => {
	if (!hex) return [];

	const neutrals = getNeutrals(hex);
	const baseNeutral = isDark ? neutrals[16].hex : neutrals[2].hex;

	return [new Color(baseNeutral, 'now-color_background--tertiary')];
};

const getDividerPrimary = (hex, isDark) => {
	if (!hex) return [];

	const neutrals = getNeutrals(hex);
	const baseNeutral = isDark ? neutrals[10].hex : neutrals[4].hex;

	return [new Color(baseNeutral, 'now-color_divider--primary')];
};

const getDividerSecondary = (hex, isDark) => {
	if (!hex) return [];

	const neutrals = getNeutrals(hex);
	const baseNeutral = isDark ? neutrals[12].hex : neutrals[3].hex;

	return [new Color(baseNeutral, 'now-color_divider--secondary')];
};

const getDividerTertiary = (hex, isDark) => {
	if (!hex) return [];

	const neutrals = getNeutrals(hex);
	const baseNeutral = isDark ? neutrals[14].hex : neutrals[2].hex;

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
	const baseNeutral = isDark ? neutrals[3].hex : neutrals[12].hex;

	return [new Color(baseNeutral, 'now-color_text--secondary')];
};

const getTextTertiary = (hex, isDark) => {
	if (!hex) return [];

	const neutrals = getNeutrals(hex);
	const baseNeutral = isDark ? neutrals[6].hex : neutrals[9].hex;

	return [new Color(baseNeutral, 'now-color_text--tertiary')];
};

const getTextPrimaryActionable = (hex, isDark) => {
	if (!hex) return [];

	const neutrals = getNeutrals(hex);
	const baseNeutral = isDark ? neutrals[0].hex : neutrals[0].hex;

	return [new Color(baseNeutral, 'now-color_text--primary-actionable')];
};

const getTextSecondaryActionable = (hex, isDark) => {
	if (!hex) return [];

	const neutrals = getNeutrals(hex);
	const baseNeutral = isDark ? neutrals[3].hex : neutrals[1].hex;

	return [new Color(baseNeutral, 'now-color_text--secondary-actionable')];
};

const getTextTertiaryActionable = (hex, isDark) => {
	if (!hex) return [];

	const neutrals = getNeutrals(hex);
	const baseNeutral = isDark ? neutrals[6].hex : neutrals[2].hex;

	return [new Color(baseNeutral, 'now-color_text--tertiary-actionable')];
};

const getBorderPrimary = (hex, isDark) => {
	if (!hex) return [];

	const neutrals = getNeutrals(hex);
	const baseNeutral = isDark ? neutrals[8].hex : neutrals[7].hex;

	return [new Color(baseNeutral, 'now-color_border--primary')];
};

const getBorderSecondary = (hex, isDark) => {
	if (!hex) return [];

	const neutrals = getNeutrals(hex);
	const baseNeutral = isDark ? neutrals[10].hex : neutrals[5].hex;

	return [new Color(baseNeutral, 'now-color_border--secondary')];
};

const getBorderTertiary = (hex, isDark) => {
	if (!hex) return [];

	const neutrals = getNeutrals(hex);
	const baseNeutral = isDark ? neutrals[12].hex : neutrals[3].hex;

	return [new Color(baseNeutral, 'now-color_border--tertiary')];
};

const getFocusRingShadow = (hex) => {
	if (!hex) return [];

	const neutrals = getNeutrals(hex);
	const baseNeutral = neutrals[0].hex;

	return [new Color(baseNeutral, 'now-color_focus-ring_shadow')];
};

const getFocusRing = (hex) => {
	if (!hex) return [];

	const focus = getFocus(hex);
	const baseFocus = focus[1].hex;

	return [new Color(baseFocus, 'now-color_focus-ring')];
};

export const getBaseColorProperties = {
	'--now-color--neutral-11': true,
	'--now-color--primary-1': true,
	'--now-color--secondary-1': true,
	'--now-color_selection--primary-2': true,
	'--now-color_selection--secondary-2': true,
	'--now-color--interactive-2': true,
	'--now-color_brand--neutral': true,
	'--now-color_brand--primary': true,
	'--now-color_brand--secondary': true,
	'--now-color_surface--brand-6': true,
	'--now-color_chrome--brand-5': true,
	'--now-color_chrome--divider-5': true,
	'--now-color_alert--critical-2': true,
	'--now-color_alert--high-2': true,
	'--now-color_alert--warning-2': true,
	'--now-color_alert--moderate-2': true,
	'--now-color_alert--info-2': true,
	'--now-color_alert--positive-2': true,
	'--now-color_alert--low-2': true,
	'--now-color_grouped--blue-2': true,
	'--now-color_grouped--brown-2': true,
	'--now-color_grouped--gray-2': true,
	'--now-color_grouped--green-2': true,
	'--now-color_grouped--green-yellow-2': true,
	'--now-color_grouped--magenta-2': true,
	'--now-color_grouped--orange-2': true,
	'--now-color_grouped--pink-2': true,
	'--now-color_grouped--purple-2': true,
	'--now-color_grouped--teal-2': true,
	'--now-color_grouped--yellow-2': true,
	'--now-color--link-2': true,
	'--now-color--focus-2': true,
};

const luminance = (rgb) => {
	var a = rgb.split(',').map(function (v) {
		v /= 255;
		return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
	});
	return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

export const getContrastRatio = (color1, color2) => {
	if (!color1 || !color2) return {normal: {}, large: {}, ratio: null};

	if (isHex(color1)) {
		color1 = hexToRgb(color1);
	}

	if (isHex(color2)) {
		color2 = hexToRgb(color2);
	}

	const color1luminance = luminance(color1);
	const color2luminance = luminance(color2);

	const ratio =
		color1luminance > color2luminance
			? (color2luminance + 0.05) / (color1luminance + 0.05)
			: (color1luminance + 0.05) / (color2luminance + 0.05);

	const out = {
		normal: {
			aa: ratio < 1 / 4.5 ? 'Pass' : 'Fail',
			aaa: ratio < 1 / 7 ? 'Pass' : 'Fail',
		},
		large: {
			aa: ratio < 1 / 3 ? 'Pass' : 'Fail',
			aaa: ratio < 1 / 4.5 ? 'Pass' : 'Fail',
		},
		nonText: {
			aa: ratio < 1 / 3 ? 'Pass' : 'Fail',
		},
		ratio: Math.floor((1 / ratio) * 10) / 10,
	};

	return out;
};

const flattenColors = (colors) => {
	let out = {};

	for (var i in colors) {
		for (var j in colors[i]) {
			const col = colors[i][j];
			out[col.customProperty] = col.rgb;
		}
	}

	return out;
};

export const generateNeutralFromPrimary = (hex) => {
	// OLD WAY
	// const neutral = getNeutralBaseColorsFromBrandPrimaryHex(
	// 	hex
	// );

	// const newNeutrals = getNeutrals(neutral);
	// let {h, s, l} = hexToHSL(newNeutrals[1].hex);
	// s = 10;
	// const newNewNeutral = HSLToHex(h, s, l);

	// return newNewNeutral;

	// NEW WAY TO PROOF OUT
	return getNeutralBaseColorsFromBrandPrimaryHex(hex);
};

export const autoGeneration = (primary, secondary, neutral) => {
	const neutralBase = getNeutralBaseColorsFromBrandPrimaryHex(neutral);

	const brandPrimaryHSL = hexToHSL(primary);
	const brandSecondaryHSL = hexToHSL(secondary);
	const selectionSecondary = HSLToHex(brandSecondaryHSL.h, 11, 85);
	const chromeDivider = HSLToHex(brandPrimaryHSL.h, brandPrimaryHSL.s, 37);

	const colors = {
		neutrals: neutralBase,
		primary: primary,
		secondary: secondary,
		selectionPrimary: secondary,
		selectionSecondary: selectionSecondary,
		interactive: primary,
		brandNeutral: neutral,
		brandPrimary: primary,
		brandSecondary: secondary,
		surfaceNeutral: neutralBase,
		surfaceDivider: neutralBase,
		surfaceBrand: secondary,
		chromeBrand: primary,
		chromeDivider,
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
		alertCritical: '#FF334B',
		alertHigh: '#FD9700',
		alertWarning: '#F0E000',
		alertModerate: '#8B6BFF',
		alertInfo: '#38AAF4',
		alertPositive: '#51AE00',
		alertLow: '#9698A4',
		groupedBlue: '#67D2E6',
		groupedBrown: '#D3A675',
		groupedGray: '#A3ABAC',
		groupedGreen: '#51B962',
		groupedGreenYellow: '#C8DA6E',
		groupedMagenta: '#E869BF',
		groupedOrange: '#FF8C72',
		groupedPink: '#E080A0',
		groupedPurple: '#BD7AEA',
		groupedTeal: '#51C2C2',
		groupedYellow: '#FFC651',
		link: '#4262FE',
		focus: '#4262FE',
	};

	return flattenColors(getColors(colors));
};

const varNameToKeyMappings = {
	'--now-color_brand--primary': 'Brand-primary',
	'--now-color_brand--secondary': 'Brand-secondary',
	'--now-color_surface--neutral': 'Surface-neutral',
	'--now-color-reference': 'Reference',
	'--now-color--neutral': 'Neutrals',
	'--now-color--primary': 'Primary',
	'--now-color--secondary': 'Secondary',
	'--now-color_selection--primary': 'Selection-primary',
	'--now-color_selection--secondary': 'Selection-secondary',
	'--now-color--interactive': 'Interactive',
	'--now-color_brand--neutral': 'Brand-neutral',
	'--now-color_surface--divider': 'Surface-divider',
	'--now-color_surface--brand': 'Surface-brand',
	'--now-color_chrome--divider': 'Chrome-divider',
	'--now-color_chrome--brand': 'Chrome-brand',
	'--now-color_alert--critical': 'Alert-critical',
	'--now-color_alert--high': 'Alert-high',
	'--now-color_alert--warning': 'Alert-warning',
	'--now-color_alert--moderate': 'Alert-moderate',
	'--now-color_alert--info': 'Alert-info',
	'--now-color_alert--positive': 'Alert-positive',
	'--now-color_alert--low': 'Alert-low',
	'--now-color_grouped--blue': 'Grouped-blue',
	'--now-color_grouped--brown': 'Grouped-brown',
	'--now-color_grouped--gray': 'Grouped-gray',
	'--now-color_grouped--green': 'Grouped-green',
	'--now-color_grouped--green-yellow': 'Grouped-green-yellow',
	'--now-color_grouped--magenta': 'Grouped-magenta',
	'--now-color_grouped--orange': 'Grouped-orange',
	'--now-color_grouped--pink': 'Grouped-pink',
	'--now-color_grouped--purple': 'Grouped-purple',
	'--now-color_grouped--teal': 'Grouped-teal',
	'--now-color_grouped--yellow': 'Grouped-yellow',
	'--now-color--link': 'Link',
	'--now-color--focus': 'Focus',
	'--now-color_background--primary': 'backgroundPrimary',
	'--now-color_background--secondary': 'backgroundSecondary',
	'--now-color_background--tertiary': 'backgroundTertiary',
	'--now-color_background--primary-actionable': 'Actionable-background',
	'--now-color_background--secondary-actionable': 'Actionable-background',
	'--now-color_background--tertiary-actionable': 'Actionable-background',
	'--now-color_border--primary': 'borderPrimary',
	'--now-color_border--secondary': 'borderSecondary',
	'--now-color_border--tertiary': 'borderTertiary',
	'--now-color_border--primary-actionable': 'Actionable-border',
	'--now-color_border--secondary-actionable': 'Actionable-border',
	'--now-color_border--tertiary-actionable': 'Actionable-border',
	'--now-color_divider--primary': 'dividerPrimary',
	'--now-color_divider--secondary': 'dividerSecondary',
	'--now-color_divider--tertiary': 'dividerTertiary',
	'--now-color_secondary-nav--brand': 'secondaryNavBrand',
	'--now-color_secondary-nav--divider': 'secondaryNavDivider',
	'--now-color_text--primary': 'textPrimary',
	'--now-color_text--secondary': 'textSecondary',
	'--now-color_text--tertiary': 'textTertiary',
	'--now-color_text--primary-actionable': 'Actionable-text',
	'--now-color_text--secondary-actionable': 'Actionable-text',
	'--now-color_text--tertiary-actionable': 'Actionable-text',
	'--now-color_focus-ring': 'focusRing',
	'--now-color_focus-ring_shadow': 'focusRingShadow',
};

export const groupColors = (json) => {
	let groups = {
		'Brand-primary': [],
		'Brand-secondary': [],
		'Brand-neutral': [],
		Reference: [],
		Neutrals: [],
		Primary: [],
		Secondary: [],
		'Selection-primary': [],
		'Selection-secondary': [],
		Interactive: [],
		'Chrome-divider': [],
		'Surface-neutral': [],
		'Surface-divider': [],
		'Surface-brand': [],
		'Chrome-brand': [],
		secondaryNavBrand: [],
		secondaryNavDivider: [],
		backgroundPrimary: [],
		backgroundSecondary: [],
		backgroundTertiary: [],
		'Actionable-background': [],
		dividerPrimary: [],
		dividerSecondary: [],
		dividerTertiary: [],
		textPrimary: [],
		textSecondary: [],
		textTertiary: [],
		'Actionable-text': [],
		borderPrimary: [],
		borderSecondary: [],
		borderTertiary: [],
		'Actionable-border': [],
		focusRing: [],
		focusRingShadow: [],
		'Alert-critical': [],
		'Alert-high': [],
		'Alert-warning': [],
		'Alert-moderate': [],
		'Alert-info': [],
		'Alert-positive': [],
		'Alert-low': [],
		'Grouped-blue': [],
		'Grouped-brown': [],
		'Grouped-gray': [],
		'Grouped-green': [],
		'Grouped-green-yellow': [],
		'Grouped-magenta': [],
		'Grouped-orange': [],
		'Grouped-pink': [],
		'Grouped-purple': [],
		'Grouped-teal': [],
		'Grouped-yellow': [],
		Link: [],
		Focus: [],
	};

	const getGroupKey = (cssVar) => {
		const keyReg = /(.*?)-\d+/;
		let key = cssVar;
		const match = cssVar.match(keyReg);
		if (match) {
			key = match[1];
		}
		return varNameToKeyMappings[key];
	};

	let out = [];
	const cssVarRegex = /^--/,
		EMPTY_STRING = '';
	for (let i in json) {
		let groupKey;
		groupKey = getGroupKey(i);
		if (groupKey) {
			groups[groupKey].push(
				new Color(rgbToHex(`${json[i]}`), i.replace(cssVarRegex, EMPTY_STRING))
			);
		}
	}

	for (var x in groups) {
		out.push({grpId: x, colors: groups[x]});
	}

	return out;
};

export const getPolarisHooks = (primaryBaseIndex, secondaryBaseIndex) => {
	const polarisHooks = POLARIS_JSON;

	for (const i in polarisHooks) {
		if (polarisHooks[i] === '--now-color--primary-1') {
			if (primaryBaseIndex === 0) {
				polarisHooks[i] = `--now-color--primary-3`;
			} else {
				polarisHooks[i] = `--now-color--primary-${primaryBaseIndex}`;
			}
		}
		if (polarisHooks[i] === '--now-color--secondary-1') {
			if (secondaryBaseIndex === 0) {
				polarisHooks[i] = `--now-color--secondary-3`;
			} else {
				polarisHooks[i] = `--now-color--secondary-${secondaryBaseIndex}`;
			}
		}
	}

	return polarisHooks;
};
