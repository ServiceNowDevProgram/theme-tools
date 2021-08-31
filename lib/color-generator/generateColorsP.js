class Color {
	/**
	 * @param {string} hexColor - Hex color in format "#XXXXXX"
	 * @param {string} id - Theme hook without the -- in front of it, e.g. "now-color--neutral-"
	 * @param {number|null} index - If color is in a range, index in the range. If not `null`.
	 */
	constructor(hexColor, id = '', index = null) {
		this.hex = hexColor;
		this.rgb = hexToRgb(hexColor);
		this.id = id;
		this.index = index;

		this.customProperty = `--${id}`;
		this.scssVariable = `$${id}`;

		/* for backwards compat */
		this.name = this.customProperty;
	}
}

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

const hexToRgb = (hex) => {
	const r = parseInt(hex.substring(1, 3), 16);
	const g = parseInt(hex.substring(3, 5), 16);
	const b = parseInt(hex.substring(5, 7), 16);

	return `${r},${g},${b}`;
};

const rgbToHex = (rgb) => {
	if (!rgb) return '';

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

export const generateColorScale = ({
	color,
	lightVariations,
	lightPercentage,
	lightSaturation,
	darkVariations,
	darkPercentage,
	darkSaturation,
	hook = 'hook',
	startIndex = 0,
	includeEnds,
	isReverse,
	removeBase,
}) => {
	if (!color) return [];

	if (!lightVariations && !darkVariations) {
		return [new Color(color, hook.replace(/^--/, ''))];
	}

	const lightColors = [];
	const darkColors = [];

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

	for (var i = 0; i < darkVariations; i++) {
		if (darkSaturation) {
			const darkBaseColorHSL = hexToHSL(color);
			const darkSVal =
				darkBaseColorHSL.s +
				darkBaseColorHSL.s * darkSaturationIncrements * (i + 1);
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
			1 - (i + 1) * darkLightIncrements
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
				generated['textTertiary'] = getTextTertiary(selectedColors[i], isDark);
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
				generated[i] = getGrouped(selectedColors[i], i, isDark);
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

	return generateColorScale({
		color: hex,
		lightVariations: 10,
		lightPercentage: 0.95,
		lightSaturation: 1,
		darkVariations: 9,
		darkPercentage: 0.9,
		darkSaturation: 1,
		hook: 'now-color--neutral',
		startIndex: 0,
		includeEnds: true,
	});
};

const getPrimary = (hex, isDark) => {
	if (!hex) return [];

	if (isDark) {
		return generateColorScale({
			color: hex,
			lightPercentage: 0.6,
			lightVariations: 2,
			darkPercentage: 0.7,
			darkVariations: 1,
			hook: 'now-color--primary',
			isReverse: true,
		});
	} else {
		return generateColorScale({
			color: hex,
			lightPercentage: 0.74,
			lightVariations: 1,
			darkPercentage: 0.65,
			darkVariations: 2,
			hook: 'now-color--primary',
		});
	}
};

const getSecondary = (hex, isDark) => {
	if (!hex) return [];

	if (isDark) {
		return generateColorScale({
			color: hex,
			lightPercentage: 0.6,
			lightVariations: 2,
			darkPercentage: 0.7,
			darkVariations: 1,
			hook: 'now-color--secondary',
			isReverse: true,
		});
	} else {
		return generateColorScale({
			color: hex,
			lightPercentage: 0.74,
			lightVariations: 1,
			darkPercentage: 0.65,
			darkVariations: 2,
			hook: 'now-color--secondary',
		});
	}
};

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
			darkPercentage: 0.72,
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
			darkPercentage: 0.72,
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
			darkPercentage: 0.72,
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
			darkPercentage: 0.72,
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
			darkPercentage: 0.72,
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
			darkPercentage: 0.73,
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
			darkPercentage: 0.73,
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
	let baseNeutral = isDark ? neutrals[4].hex : neutrals[14].hex;

	if (isDark) {
		return generateColorScale({
			color: baseNeutral,
			lightPercentage: 0,
			lightVariations: 0,
			darkPercentage: 0.95,
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
	let baseNeutral = isDark ? neutrals[8].hex : neutrals[10].hex;

	if (isDark) {
		return generateColorScale({
			color: baseNeutral,
			lightPercentage: 0,
			lightVariations: 0,
			darkPercentage: 0.86,
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
		});
	}
};

const getChromeBrand = (hex) => {
	if (!hex) return [];

	return generateColorScale({
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

	return generateColorScale({
		color: hex,
		lightPercentage: 0.6,
		lightVariations: 5,
		darkPercentage: 0.8,
		darkVariations: 5,
		hook: 'now-color_chrome--divider',
	});
};

const getGrouped = (hex, name, isDark) => {
	if (!hex) return [];
	name = name.replace(/([a-z](?=[A-Z]))/g, '$1 ').split(' ');
	name.shift();
	name = name.map((e) => e.toLowerCase()).join('-');

	if (isDark) {
		return generateColorScale({
			color: hex,
			lightVariations: 3,
			lightPercentage: 0.75,
			darkVariations: 2,
			darkPercentage: 0.65,
			hook: `now-color_grouped--${name}`,
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
			hook: `now-color_grouped--${name}`,
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

export const getBaseColors = (theme) => {
	return {
		neutrals: rgbToHex(theme['--now-color--neutral-11']),
		primary: rgbToHex(theme['--now-color--primary-1']),
		secondary: rgbToHex(theme['--now-color--secondary-1']),
		selectionPrimary: rgbToHex(theme['--now-color_selection--primary-2']),
		selectionSecondary: rgbToHex(theme['--now-color_selection--secondary-2']),
		interactive: rgbToHex(theme['--now-color--interactive-2']),
		chromeBrand: rgbToHex(theme['--now-color_chrome--brand-5']),
		chromeDivider: rgbToHex(theme['--now-color_chrome--divider-5']),
		brandNeutral: rgbToHex(theme['--now-color_brand--neutral']),
		brandPrimary: rgbToHex(theme['--now-color_brand--primary']),
		brandSecondary: rgbToHex(theme['--now-color_brand--secondary']),
		surfaceNeutral: rgbToHex(theme['--now-color--neutral-11']),
		surfaceDivider: rgbToHex(theme['--now-color--neutral-11']),
		surfaceBrand: rgbToHex(theme['--now-color_surface--brand-6']),
		chromeBrand: rgbToHex(theme['--now-color_chrome--brand-5']),
		chromeDivider: rgbToHex(theme['--now-color_chrome--divider-5']),
		backgroundPrimary: rgbToHex(theme['--now-color--neutral-11']),
		backgroundSecondary: rgbToHex(theme['--now-color--neutral-11']),
		backgroundTertiary: rgbToHex(theme['--now-color--neutral-11']),
		dividerPrimary: rgbToHex(theme['--now-color--neutral-11']),
		dividerSecondary: rgbToHex(theme['--now-color--neutral-11']),
		dividerTertiary: rgbToHex(theme['--now-color--neutral-11']),
		textPrimary: rgbToHex(theme['--now-color--neutral-11']),
		textSecondary: rgbToHex(theme['--now-color--neutral-11']),
		textTertiary: rgbToHex(theme['--now-color--neutral-11']),
		borderPrimary: rgbToHex(theme['--now-color--neutral-11']),
		borderSecondary: rgbToHex(theme['--now-color--neutral-11']),
		borderTertiary: rgbToHex(theme['--now-color--neutral-11']),
		focusRingShadow: rgbToHex(theme['--now-color--neutral-11']),
		alertCritical: rgbToHex(theme['--now-color_alert--critical-2']),
		alertHigh: rgbToHex(theme['--now-color_alert--high-2']),
		alertWarning: rgbToHex(theme['--now-color_alert--warning-2']),
		alertModerate: rgbToHex(theme['--now-color_alert--moderate-2']),
		alertInfo: rgbToHex(theme['--now-color_alert--info-2']),
		alertPositive: rgbToHex(theme['--now-color_alert--positive-2']),
		alertLow: rgbToHex(theme['--now-color_alert--low-2']),
		groupedBlue: rgbToHex(theme['--now-color_grouped--blue-2']),
		groupedBrown: rgbToHex(theme['--now-color_grouped--brown-2']),
		groupedGray: rgbToHex(theme['--now-color_grouped--gray-2']),
		groupedGreen: rgbToHex(theme['--now-color_grouped--green-2']),
		groupedGreenYellow: rgbToHex(theme['--now-color_grouped--green-yellow-2']),
		groupedMagenta: rgbToHex(theme['--now-color_grouped--magenta-2']),
		groupedOrange: rgbToHex(theme['--now-color_grouped--orange-2']),
		groupedPink: rgbToHex(theme['--now-color_grouped--pink-2']),
		groupedPurple: rgbToHex(theme['--now-color_grouped--purple-2']),
		groupedTeal: rgbToHex(theme['--now-color_grouped--teal-2']),
		groupedYellow: rgbToHex(theme['--now-color_grouped--yellow-2']),
		link: rgbToHex(theme['--now-color--link-2']),
		focus: rgbToHex(theme['--now-color--focus-2']),
		focusRing: rgbToHex(theme['--now-color--focus-2']),
	};
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

export const getComplimentaryColors = (baseColor, variations) => {
	if (!baseColor || !variations) {
		return [];
	}

	const {h, s, l} = hexToHSL(baseColor);
	const range = Math.round(360 / variations);
	const out = [new Color(baseColor)];

	for (let i = 1; i < variations; i++) {
		let newH = h - range * i;
		if (newH < 0) {
			newH = 360 - Math.abs(newH);
		}

		out.push(new Color(HSLToHex(newH, s, l)));
	}

	return out;
};
