const isString = (value) => typeof value === 'string';

const isPlainObject = (value) => typeof value === 'object' && value !== null;

/************ PARSE AND VALIDATE COLOR VALUES ************/

function parseColorHex() {
	if (!isValidHexString(hex)) {
		console.error('Not a valid hex color: ' + hex);
		return null;
	}
	const values = hex.slice(1);
	// short hex (e.g. '#fff')
	if (values.length === 3) {
		return wrapped({
			r: parseInt(values[0] + values[0], 16),
			g: parseInt(values[1] + values[1], 16),
			b: parseInt(values[2] + values[2], 16),
		});
	}
	// full hex (e.g. '#ffffff')
	return wrapped({
		r: parseInt(values[0] + values[1], 16),
		g: parseInt(values[2] + values[3], 16),
		b: parseInt(values[4] + values[5], 16),
	});
}

const wrapped = (rgbObject) => {
	rgbObject.toString = () =>
		rgbObject.r + ',' + rgbObject.g + ',' + rgbObject.b;
	return rgbObject;
};

/**
 * @typedef {Object} ColorWrapper
 * @property {number} r - red channel for color (0-255)
 * @property {number} g - green channel for color (0-255)
 * @property {number} b - blue channel for color (0-255)
 */

/**
 * Checks if a given string is a valid hex color.
 * @param {string} value
 * @returns {boolean}
 */
export function isValidHexString(value) {
	return /^#(?:[0-9a-fA-F]{3}){1,2}$/.test(value);
}

/**
 * Checks if a given string is a valid rgb color.
 * @param {string} hex
 * @returns {boolean}
 */
export function isValidRgbString(value) {
	return (
		/^[0-9]{1,3}[ ]?,[ ]?[0-9]{1,3}[ ]?,[ ]?[0-9]{1,3}$/.test(value) &&
		!value.split(',').some((v) => parseInt(v) > 255)
	);
}

/**
 * Parses a hex string and returns an object with the following formats for
 * the color: hex, RGB.
 * @param {string} hex - Valid hex color with pound sign, either 3 or 6 hex values (e.g. '#fff' or '#ffffff')
 * @returns {ColorWrapper}
 */
export function hexToRgb(hex) {
	if (!isValidHexString(hex)) {
		console.error('Not a valid hex color: ' + hex);
		return null;
	}
	const values = hex.slice(1);
	// short hex (e.g. '#fff')
	if (values.length === 3) {
		return wrapped({
			r: parseInt(values[0] + values[0], 16),
			g: parseInt(values[1] + values[1], 16),
			b: parseInt(values[2] + values[2], 16),
		});
	}
	// full hex (e.g. '#ffffff')
	return wrapped({
		r: parseInt(values[0] + values[1], 16),
		g: parseInt(values[2] + values[3], 16),
		b: parseInt(values[4] + values[5], 16),
	});
}

/**
 * Converts a color wrapper to an RGB triplate suitable for use as a value
 * for any design system CSS Custom Properties.
 * @param {ColorWrapper} color
 * @return {string} e.g. '255,255,255'
 */
export function toRgbTriplet(color) {
	return color.r + ',' + color.g + ',' + color.b;
}

/************ MAKE COLOR SETS ************/

/**
 * @param {ColorWrapper} start - Base color
 * @param {ColorWrapper} mix - Color to mix with base
 * @param {number} weight - How strong to weight the mix color, e.g. 0.2 for 20%
 * @returns {ColorWrapper}
 */
function mixColor(base, mix, weight) {
	var w = 2 * weight - 1;
	var a = 0; // alpha channel, we don't allow it to be configurable yet so setting it to static 0

	var w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
	var w2 = 1 - w1;

	const result = {
		r: Math.min(Math.round(w1 * mix.r + w2 * base.r), 255),
		g: Math.min(Math.round(w1 * mix.g + w2 * base.g), 255),
		b: Math.min(Math.round(w1 * mix.b + w2 * base.b), 255),
	};
	return wrapped(result);
}

/**
 * @param {ColorWrapper} base - Base color
 * @param {ColorWrapper} mix - Color to mix with base
 * @param {number} stops - Number of stops in the color range
 * @param {number} weight - How strongly to weight the mix color, e.g. 0.2 for 20%
 */
function createColorRange(base, mix, stops, weight) {
	var colors = [];
	for (var i = 0; i < stops; i++) {
		var w = (weight * (i + 1)) / stops;
		colors.push(mixColor(base, mix, w));
	}
	return colors;
}

/**
 * @typedef {Object} ColorRange
 * @description Creates a set of colors that are mixed from a base color to mix color
 * @property {ColorWrapper} mix - Color to with with base as a valid hex string
 * @property {number} stops - Number of stops in color set
 * @property {number} weight - How strongly to weight the mix color, e.g. 0.2 for 20%
 */

/**
 * @param {ColorWrapper} base - Base color to create set from as a valid hex string
 * @param {{prepend: ColorRange, append: ColorRange}} ranges - Ranges to mix base color to left and right
 */
export function createColorSet(base, {prepend = [], append = []} = {}) {
	const prependRange = prepend.reduce((acc, value) => {
		if (isString(value)) {
			acc.push(hexToRgb(value));
		}
		if (isPlainObject(value)) {
			const range = createColorRange(
				base,
				hexToRgb(value.mix),
				value.stops,
				value.weight
			).reverse();
			acc = [...acc, ...range];
		}
		return acc;
	}, []);
	const appendRange = append.reduce((acc, value) => {
		if (isString(value)) {
			acc.push(hexToRgb(value));
		}
		if (isPlainObject(value)) {
			const range = createColorRange(
				base,
				hexToRgb(value.mix),
				value.stops,
				value.weight
			);
			acc = [...acc, ...range];
		}
		return acc;
	}, []);
	return [...prependRange, base, ...appendRange];
}

export const COLOR_SET_4 = {
	prepend: [{stops: 1, mix: '#fff', weight: 0.85}],
	append: [{stops: 2, mix: '#000', weight: 0.5}],
};

export const COLOR_SET_5 = {
	prepend: [{stops: 1, mix: '#fff', weight: 0.85}],
	append: [{stops: 3, mix: '#000', weight: 0.5}],
};

export const COLOR_SET_21 = {
	prepend: ['#fff', {stops: 10, mix: '#fff', weight: 0.95}],
	append: [{stops: 9, mix: '#000', weight: 0.9}, '#000'],
};
