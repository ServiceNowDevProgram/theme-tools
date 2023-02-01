import {resolveHook, mapColors} from './';
import {levelOneMapFile} from '../../level-one-nav/map';
import {getContrastRatio, isHex, hexToHSL} from '../../../generate-colors-s';
import {AA_GRPH} from '../constants';
import {genRandomColor, genRandomColors} from '../test-utils';

describe('mapColors(RANDOM_COLOR, hooks, target) OFFSET RULE', () => {
	let n = 250;
	while (n > 0) {
		const colors = genRandomColors();
		const cMap = mapColors(genRandomColor(), colors, levelOneMapFile);

		const bg = cMap['--now-toolbar-nav--background-color-start'];
		const btn = resolveHook(
			{...colors, ...cMap},
			'--now-canvas-toolbar-button--color'
		);

		const cr1 = getContrastRatio(bg, btn).ratio;
		//console.log({bg, cr1, btn});

		it('should correctly assign the correct offsets based on lightness', () => {
			const bgHSL = hexToHSL(bg);
			const btnBgActive = hexToHSL(
				cMap['--now-canvas-toolbar-button--background-color--active']
			);
			const btnBorderActive = hexToHSL(
				cMap['--now-canvas-toolbar-button--border-color--active']
			);
			if (bgHSL.l > btnBorderActive.l)
				expect(btnBgActive.l < bgHSL.l).toBeTruthy();
			else expect(btnBgActive.l > bgHSL.l).toBeTruthy();
		});

		it(`should correctly map L1 bg: ${bg} and button icon color: ${btn}`, () => {
			expect(cr1 >= AA_GRPH).toBeTruthy();
		});

		it(`should correctly assign correct offset to button bg active color`, () => {
			expect(
				isHex(cMap['--now-toolbar-nav--background-color-start'])
			).toBeTruthy();
			expect(
				isHex(cMap['--now-toolbar-nav--background-color-end'])
			).toBeTruthy();
		});
		//NOTE: the active bg DOES NOT have to pass CR w/BG
		it(`should correctly assign correct offset to button bg active color`, () => {
			expect(
				isHex(cMap['--now-canvas-toolbar-button--background-color--active'])
			).toBeTruthy();
		});

		//NOTE: the hover bg DOES NOT have to pass CR w/BG
		it('should correctly assign correct offset to button bg hover color', () => {
			expect(
				isHex(cMap['--now-canvas-toolbar-button--background-color--hover'])
			).toBeTruthy();
		});

		it('should correctly assign string values', () => {
			expect(cMap['--now-canvas-toolbar-button--opacity--hover']).toEqual(
				'0.6'
			);
		});

		it('should correctly assign button border active color', () => {
			expect(
				isHex(cMap['--now-canvas-toolbar-button--border-color--active'])
			).toBeTruthy();
		});
		n--;
	}
});
