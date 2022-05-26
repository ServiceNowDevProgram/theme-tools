import {getNeutrals} from './generateColorsS';

describe('getNeutrals:', () => {
	it('should get the neutral colors from a base hex', () => {
		let neutrals = getNeutrals('#5c5c88');
		const expectedHexColors = [
			'#ffffff',
			'#f6f6f7',
			'#e5e5e7',
			'#d5d5d9',
			'#c4c4c9',
			'#b5b5bb',
			'#a4a4ab',
			'#94949c',
			'#83838c',
			'#74747d',
			'#63636c',
			'#55555e',
			'#4c4c55',
			'#43434c',
			'#3a3a43',
			'#32323a',
			'#292930',
			'#212127',
			'#18181d',
			'#101014',
			'#08080a',
			'#000000',
		];
		neutrals = neutrals.map((neutral) => neutral.hex);
		expect(neutrals).toEqual(expectedHexColors);
	});
});
