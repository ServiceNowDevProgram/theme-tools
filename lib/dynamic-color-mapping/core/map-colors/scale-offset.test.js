import {resolveHook, mapColors} from './';
import {levelOneMapFile} from '../../level-one-nav/map';
import {getContrastRatio} from '../../../generate-colors-s';
import {AA_GRPH} from '../constants';
import {genRandomColors} from '../test-utils';

describe("mapColors('--my-color-hook-2', hooks, target) OFFSET RULE", () => {
	let n = 250;
	while (n > 0) {
		const colors = genRandomColors();
		const cMap = mapColors(
			'--now-color_secondary-nav--brand-2',
			colors,
			levelOneMapFile
		);
		const cMap2 = mapColors(
			'--now-color_secondary-nav--brand-8',
			colors,
			levelOneMapFile
		);

		const bg = resolveHook(
			{...colors, ...cMap},
			'--now-color_secondary-nav--brand-2'
		);
		const btn = resolveHook(
			{...colors, ...cMap},
			'--now-canvas-toolbar-button--color'
		);
		const cr1 = getContrastRatio(bg, btn).ratio;

		it(`should correctly map L1 bg: ${bg} and button icon color: ${btn}`, () => {
			expect(cr1 > AA_GRPH).toBeTruthy();
		});

		//DARKER
		//NOTE: the active bg DOES NOT have to pass CR w/BG
		it(`should correctly assign correct offset to button bg active color`, () => {
			expect(
				cMap['--now-canvas-toolbar-button--background-color--active']
			).toBe('--now-color_secondary-nav--brand-4');
		});

		//NOTE: the hover bg DOES NOT have to pass CR w/BG
		it('should correctly assign correct offset to button bg hover color', () => {
			expect(cMap['--now-canvas-toolbar-button--background-color--hover']).toBe(
				'--now-color_secondary-nav--brand-4'
			);
		});

		it('should correctly assign string values', () => {
			expect(cMap['--now-canvas-toolbar-button--opacity--hover']).toEqual(
				'0.6'
			);
		});

		it('should correctly assign button border active color', () => {
			expect(cMap['--now-canvas-toolbar-button--border-color--active']).toEqual(
				'--now-color_secondary-nav--divider-6'
			);
		});
		//LIGHTER
		//NOTE: the active bg DOES NOT have to pass CR w/BG
		it(`should correctly assign correct offset to button bg active color`, () => {
			expect(
				cMap2['--now-canvas-toolbar-button--background-color--active']
			).toBe('--now-color_secondary-nav--brand-6');
		});

		//NOTE: the hover bg DOES NOT have to pass CR w/BG
		it('should correctly assign correct offset to button bg hover color', () => {
			expect(
				cMap2['--now-canvas-toolbar-button--background-color--hover']
			).toBe('--now-color_secondary-nav--brand-6');
		});

		it('should correctly assign string values', () => {
			expect(cMap2['--now-canvas-toolbar-button--opacity--hover']).toEqual(
				'0.6'
			);
		});

		it('should correctly assign button border active color', () => {
			expect(
				cMap2['--now-canvas-toolbar-button--border-color--active']
			).toEqual('--now-color_secondary-nav--divider-4');
		});

		n--;
	}
});
