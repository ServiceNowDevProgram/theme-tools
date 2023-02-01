//Direct assignment Rule

import {isString} from '../../';
import {INITIAL_COLOR} from '../../constants';

export const isDirectAssignment = (hook, mapNode) => {
	if (mapNode['comparisonValue']) return false;
	const bool = mapNode['value'] !== undefined;
	const strBool = hook && isString(mapNode);
	return bool || strBool;
};

export const directAssignRule = (hook, mapNode, backgroundColor) => {
	const obj = {};
	if (isString(mapNode)) {
		obj[hook] = mapNode === INITIAL_COLOR ? backgroundColor : mapNode;
	} else {
		const {value} = mapNode;
		obj[hook] = value === INITIAL_COLOR ? backgroundColor : value;
	}
	return obj;
};
