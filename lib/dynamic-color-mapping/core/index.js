import {BRAND_PRIMARY_HOOK, SECONDARY_NAV_BRAND_PREFIX} from '../constants';

export {mapColors, isHook, resolveHook} from './map-colors';

export const getPrefix = (name) => {
	return name.endsWith('-') ? name : `${name}-`;
};

export const getOffset = (type) => {
	return parseInt(type.substring(type.lastIndexOf('_') + 1), 10);
};

export const isString = (str) => typeof str === 'string';

export const getBrandPrimaryIndexFromScale = (source, hookPrefix) => {
	const regex = /-[0-9]+$/;
	const prefix = getPrefix(hookPrefix);
	const brandPrimary = source[BRAND_PRIMARY_HOOK];
	let index;
	if (!brandPrimary)
		throw new Error('missing required brand primary hook in source');

	Object.keys(source).forEach((hook) => {
		if (
			!index &&
			hook !== BRAND_PRIMARY_HOOK &&
			source[hook] === brandPrimary &&
			regex.test(hook)
		) {
			const prfx = hook.substring(0, hook.lastIndexOf('-') + 1);
			if (!index && prfx === prefix) {
				index = parseInt(hook.substring(hook.lastIndexOf('-') + 1));
			}
		}
	});
	return index;
};

//newStep value<INT> relative to current brand color
//can be positive or negative number
//stepModification (+/- integer) the direction to modify the current color step (lighter or darker by n step(s))
export const getDynamicHook = (
	source,
	hookPrefix,
	stepModification,
	startIndex = 0
) => {
	const prefix = getPrefix(hookPrefix);
	const index =
		hookPrefix === SECONDARY_NAV_BRAND_PREFIX
			? startIndex
			: getBrandPrimaryIndexFromScale(source, prefix);
	const name = `${prefix}${Number(index + stepModification).toString()}`;

	if (source[name]) return name;
	const fallBackIndex =
		prefix === SECONDARY_NAV_BRAND_PREFIX ? startIndex : index;
	const fallBackHook = `${prefix}${fallBackIndex}`;
	console.warn(
		`getDynamicHook() is returning fallback hook (${fallBackHook}) because desired hook (${name}) is out of range or not in source.`
	);
	return fallBackHook;
};
