import {isString, isHook} from '../';
import {resolveHook} from '../';
import {
	isConstrastRatioAssignment,
	contrastRatioAssignRule,
} from '../assignment-rules/contrast-ratio';
import {isDirectAssignment, directAssignRule} from '../assignment-rules/direct';
import {isOffsetAssignment, offsetAssignRule} from '../assignment-rules/offset';
import {
	isDirectCompareAssignment,
	directCompareAssignRule,
} from '../assignment-rules/direct-compare';

export const processNode = (
	backgroundColor,
	hooks,
	hook,
	mapNode,
	mapNodeHooks = {}
) => {
	let newHooks = {...mapNodeHooks};
	let newMapNodeHooks;
	const {backgroundColorOverride} = mapNode;
	const b = backgroundColorOverride || backgroundColor;
	let bg = isHook(b) ? resolveHook(hooks, b) : b;

	if (isDirectAssignment(hook, mapNode)) {
		newMapNodeHooks = directAssignRule(hook, mapNode, backgroundColor);
	} else if (isConstrastRatioAssignment(mapNode)) {
		newMapNodeHooks = contrastRatioAssignRule(bg, hook, mapNode, {
			...hooks,
			...newHooks,
		});
	} else if (isOffsetAssignment(mapNode)) {
		newMapNodeHooks = offsetAssignRule(bg, hook, mapNode, {
			...hooks,
			...newHooks,
		});
	} else if (isDirectCompareAssignment(mapNode)) {
		newMapNodeHooks = directCompareAssignRule(bg, hook, mapNode, {
			...hooks,
			...newHooks,
		});
	} else {
		//console.log('else:', {hook});
	}
	newHooks = {...newHooks, ...newMapNodeHooks};
	//only process objects!
	if (!isString(mapNode)) {
		Object.keys(mapNode).forEach((key) => {
			if (isHook(key)) {
				let newMapNodeHooks;
				if (isDirectAssignment(key, mapNode[key]) && isString(mapNode[key])) {
					newMapNodeHooks = directAssignRule(
						key,
						mapNode[key],
						backgroundColor
					);
				} else {
					newMapNodeHooks = processNode(
						hook,
						{...hooks, ...newHooks},
						key,
						mapNode[key],
						newHooks
					);
				}
				newHooks = {...newHooks, ...newMapNodeHooks};
			} else if (key === 'state') {
				const state = mapNode[key];
				Object.keys(state).forEach((s) => {
					if (isHook(s)) {
						let newMapNodeHooks;
						if (isDirectAssignment(s, state[s])) {
							newMapNodeHooks = directAssignRule(s, state, hook);
						} else {
							newMapNodeHooks = processNode(
								hook,
								{...hooks, ...newHooks},
								s,
								state,
								newHooks
							);
						}
						newHooks = {...newHooks, ...newMapNodeHooks};
					} else {
						newHooks[s] = state[s];
					}
				});
			} else {
				//console.log('here', {key});
			}
		});
	}
	return newHooks;
};
