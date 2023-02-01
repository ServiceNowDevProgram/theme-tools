import {isHook, resolveHook} from '../..';

export const isDirectCompareAssignment = (mapNode) =>
	mapNode['is'] !== undefined &&
	mapNode['then'] !== undefined &&
	mapNode['otherwise'] !== undefined;

export const directCompareAssignRule = (
	backgroundColor,
	hook,
	mapNode,
	hooks
) => {
	const {backgroundColorOverride, is, otherwise, then} = mapNode;
	const obj = {};
	let bg = backgroundColorOverride || backgroundColor;
	bg = isHook(bg) ? resolveHook(hooks, bg) : bg;
	let iz = isHook(is) ? resolveHook(hooks, is) : is;
	obj[hook] = bg === iz ? then : otherwise;
	return obj;
};
