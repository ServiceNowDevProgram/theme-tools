import {colorGenConfigs} from '../../../../generate-colors-s/color-gen-configs';
import {
	isHex,
	rgbToHex,
	getContrastRatio,
	generateColorScale,
} from '../../../../generate-colors-s';
import {isHook, resolveHook} from '../../';

/*------------------------------------------------------------------------------------------------------
{
	scale: <STRING> base hook name of color scale excluding -NUM (ex: --now-color--neutral) 

	offset: <INT> NUM representing steps to either increase if baseIndex is less than the median color index OR descrease steps if baseIndex is greater than the median color index.

	targetScale: <String> base hook name of a different scale to use offset index against to find color. (ex: --now-color_chrome--divider)
}

Notes: if no baseIndex can be found in scale OR no scale is defined, an 11 step temporary scale will be generated from the color to find an offset color value.
//-----------------------------------------------------------------------------------------------------*/
export const isOffsetAssignment = (mapNode) => mapNode['offset'] !== undefined;

//only color values can exist in a scale, return immediately if it's a hook
const colorFoundInScale = (hooks, scale, color) => {
	if (isHook(color)) return false;
	const index = Object.values(hooks).indexOf(color);
	const hook = Object.keys(hooks)[index];
	return hook && hook.indexOf(scale) > -1;
};

const getScaleInfo = (color, hooks, scale) => {
	let baseIndex;
	let index = 0;
	let isCustomScale = false;
	const scaleMeta = [];
	if (!scale || !colorFoundInScale(hooks, scale, color)) {
		isCustomScale = true;
		let hex = isHex(color) ? color : rgbToHex(color);
		const tmpScale = generateColorScale({
			...colorGenConfigs.chromeBrand,
			...{
				hook: 'tmp-scale',
				color: hex,
			},
		});
		tmpScale.forEach((customColor) => {
			if (customColor.hex === hex) baseIndex = index;
			scaleMeta.push({
				index,
				hex: customColor.hex,
				name: customColor.name,
			});
			index++;
		});
	} else {
		Object.keys(hooks).forEach((h) => {
			if (h.indexOf(scale) === 0) {
				//step 1 find position of background color in scale
				if (hooks[h] === color) baseIndex = index;
				scaleMeta.push({
					index,
					name: h,
					hex: hooks[h],
					contrastRatio: getContrastRatio(color, hooks[h]).ratio,
				});
				index++;
			}
		});
	}
	return {baseIndex, scaleMeta, isCustomScale};
};

export const offsetAssignRule = (backgroundColor, hook, mapNode, hooks) => {
	const obj = {};
	let hookValue;
	const {targetScale, scale, offset} = mapNode;
	if (mapNode['offset'] === 'HIGHEST') {
		let c = resolveHook(hooks, `${scale}-0`);
		c = isHex(c) ? c : rgbToHex(c);
		const {scaleMeta, isCustomScale} = getScaleInfo(c, hooks, scale);
		const arr = scaleMeta.sort((a, b) =>
			a.contrastRatio > b.contrastRatio ? 1 : -1
		);
		const highestCR = arr[0];
		hookValue = isCustomScale
			? highestCR.hex
			: targetScale
			? `${targetScale}-${highestCR.index}`
			: highestCR.name;
	} else {
		const bg = isHook(backgroundColor)
			? resolveHook(hooks, backgroundColor)
			: backgroundColor;
		const {baseIndex = 0, scaleMeta, isCustomScale} = getScaleInfo(
			bg,
			hooks,
			scale
		);
		if (baseIndex >= 0 && scaleMeta?.length) {
			const isDarker = baseIndex >= scaleMeta.length / 2;
			const idx = isDarker ? baseIndex - offset : baseIndex + offset;
			hookValue = isCustomScale
				? scaleMeta[idx].hex
				: targetScale
				? `${targetScale}-${idx}`
				: scaleMeta[idx].name;
		} else {
			hookValue = bg;
		}
	}

	obj[hook] = hookValue;
	return obj;
};
