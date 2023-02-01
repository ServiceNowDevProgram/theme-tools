import {INITIAL_COLOR} from '../constants';
import {processNode} from '../process-node';
export const isHook = (str) => {
	return str.indexOf('--') === 0;
};

export const resolveHook = (hooks, hook, path = []) => {
	if (hook === '--now-color_secondary-nav--brand-2') {
		console.log(hooks, path);
	}
	let p = path;
	if (p.length > 1 && p.includes(hook))
		throw new Error(
			`resolveHook failed with circular references: ${path.join(
				' > '
			)} > ${hook}`
		);
	if (!hooks[hook]) throw new Error(`${hook} is not defined in hooks`);
	if (hooks[hook] && !isHook(hooks[hook])) return hooks[hook];
	p.push(hook);
	return resolveHook(hooks, hooks[hook], p);
};

export const getPassingIndex = (scale, startingOffset, threshold) => {
	let index = startingOffset;
	while (scale[index].contrastRatio < threshold) {
		index++;
	}

	return index;
};

export const mapColors = (backgroundColor, hooks, map) => {
	let newHooks = {};
	let parent;
	Object.keys(map).forEach((h) => {
		if (!parent) parent = h;
		if (typeof map[h] === 'string') {
			newHooks[h] = map[h] === INITIAL_COLOR ? backgroundColor : map[h];
		} else {
			const pHooks = processNode(
				backgroundColor,
				{...hooks, ...newHooks},
				h,
				map[h]
			);
			newHooks = {
				...newHooks,
				...pHooks,
			};
		}
	});
	return newHooks;
};
