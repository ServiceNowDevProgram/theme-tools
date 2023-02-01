import {mapColors} from '../core';
import {levelOneMapFile} from './map';

export const getL1Hooks = (source) => {
	return mapColors(
		'--now-color_secondary-nav--brand-2',
		source,
		levelOneMapFile
	);
};
