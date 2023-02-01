import {isHook, resolveHook} from '../..';
import {getContrastRatio} from '../../../../generate-colors-s';

export const isConstrastRatioAssignment = (mapNode) =>
	mapNode['threshold'] !== undefined &&
	mapNode['comparisonValue'] !== undefined;

const getHighestFallback = (arr, bg, hooks, threshold = 3) => {
	let highestCR = 0;
	let value;
	arr.forEach((option) => {
		const opt = isHook(option) ? resolveHook(hooks, option) : option;
		const cr = getContrastRatio(bg, opt).ratio;
		if (cr > highestCR && cr >= threshold) {
			highestCR = cr;
			value = option;
		}
	});
	return value;
};

export const contrastRatioAssignRule = (
	backgroundColor,
	hook,
	mapNode,
	hooks
) => {
	const {
		backgroundColorOverride,
		comparisonValue,
		threshold,
		pass,
		fail,
		highestFallback,
	} = mapNode;
	const obj = {};
	let bg = backgroundColorOverride || backgroundColor;
	bg = isHook(bg) ? resolveHook(hooks, bg) : bg;
	let fg = isHook(comparisonValue)
		? resolveHook(hooks, comparisonValue)
		: comparisonValue;
	const cr = getContrastRatio(bg, fg).ratio;

	if (pass && fail) {
		obj[hook] = cr >= threshold ? pass : fail;
	} else if (highestFallback) {
		obj[hook] = getHighestFallback(highestFallback, bg, hooks, threshold);
	} else {
		//console.log('contrastRatioAssignRule NOT ASSIGNED.', {hook});
	}
	return obj;
};
