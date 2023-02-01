import {mapColors} from '../core';
import {unifiedNavHeaderMapFile} from './header-map';
import {unifiedNavSearchMapFile} from './search-map';
import {unifiedNavMenuMapFile} from './menu-map';
export const getUnifiedNavHooks = (hooks) => {
	const searchHooks = mapColors(
		'--now-color_brand--primary',
		hooks,
		unifiedNavSearchMapFile
	);

	const menuHooks = mapColors(
		'255,255,255',
		{...hooks, ...searchHooks},
		unifiedNavMenuMapFile
	);

	const headerHooks = mapColors(
		'--now-color_brand--primary', //'--now-color_chrome--brand-10',
		{...hooks, ...searchHooks, ...menuHooks},
		unifiedNavHeaderMapFile
	);

	return {...headerHooks, ...searchHooks, ...menuHooks};
};
