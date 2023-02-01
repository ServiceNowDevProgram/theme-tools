import {getUnifiedNavHooks} from './';
import {genRandomColors} from '../core/test-utils';
import {getContrastRatio} from '../../generate-colors-s';
import {resolveHook} from '../core';
import {AA_TXT} from '../core/constants';
import POLARIS from '../../generate-colors-s/polaris.json';

const totalUNHooks = 93;
const totalSearchHooks = 6;

describe('getUnifiedNavHooks(hooks)', () => {
	const colors = genRandomColors();
	const h = getUnifiedNavHooks(colors);
	const hks = new Map(); // validate uniqueness
	Object.keys(h).forEach((k) => {
		if (/unified/.test(k)) hks.set(k, true);
	});
	const allHooks = {...colors, ...h};
	let cnt = 0;
	let found = 0;

	Object.keys(POLARIS).forEach((pol) => {
		if (/unified/.test(pol)) {
			cnt++;
			if (hks.get(pol)) {
				found++;
			} else {
				console.log({pol}, 'was not found in map file');
			}
		}
	});
	//copy this to /snippets-testing/unified-nav/update-theme.js
	//console.log({allHooks});
	const bg = resolveHook(
		allHooks,
		'--now-unified-nav_header--background-color'
	);
	const txtColor = resolveHook(allHooks, '--now-color--neutral-21');
	const cr = getContrastRatio(bg, txtColor).ratio;
	const textColor =
		cr >= AA_TXT ? '--now-color--neutral-21' : '--now-color--neutral-0';
	it('should return the correct number of unified nav hooks w/no duplicates', () => {
		console.log(hks.size, {cnt, found});
		expect(cnt).toBe(found);
		expect(hks.size).toBe(totalUNHooks + totalSearchHooks);
		//expect(totalUNHooks).toBe(found);
		expect(h['--now-unified-nav_header--background-color']).toBe(
			'--now-color_brand--primary'
		);
		expect(h['--now-unified-nav_button--background-color--hover']).toBe(
			'--now-color_brand--primary'
		);
		expect(h['--now-unified-nav_header--color']).toBe(textColor);
	});
	it('should correctly assign hover & hover text correctly', () => {
		const bg = resolveHook(
			allHooks,
			'--now-unified-nav_nav-menu-trigger--background-color--hover'
		);
		const fg = resolveHook(
			allHooks,
			'--now-unified-nav_nav-menu-trigger--color--hover'
		);
		const cr = getContrastRatio(bg, fg).ratio;
		expect(cr).to.be.above(AA_TXT);
	});
});
