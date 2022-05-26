import {
	getBaseIndex,
	hexToRgb,
	rgbToHex,
	hexToHSL,
	HSLToHex,
	getNeutrals,
} from './generateColorsS';

describe('hexToRgb:', () => {
	it('should return empty string if nothing is passed', () => {
		const rgb = hexToRgb();
		expect(rgb).toEqual('');
	});
	it('should return empty string if invalid hex is passed', () => {
		const rgb = hexToRgb('ddd');
		expect(rgb).toEqual('');
	});
	it('should convert #000000 to 0,0,0', () => {
		const rgb = hexToRgb('#000000');
		expect(rgb).toEqual('0,0,0');
	});
	it('should convert #FFFFFF to 255,255,255', () => {
		const rgb = hexToRgb('#FFFFFF');
		expect(rgb).toEqual('255,255,255');
	});
	it('should convert #8a433e to 138, 67, 62', () => {
		const rgb = hexToRgb('#8a433e');
		expect(rgb).toEqual('138,67,62');
	});
});

describe('rgbToHex:', () => {
	it('should return empty string if nothing is passed', () => {
		const hex = rgbToHex();
		expect(hex).toEqual('');
	});
	it('should return empty string if invalid rgb is passed', () => {
		const hex = rgbToHex('ddd');
		expect(hex).toEqual('');
	});
	it('should convert 0,0,0 to #000000', () => {
		const hex = rgbToHex('0,0,0');
		expect(hex).toEqual('#000000');
	});
	it('should convert 255,255,255 to #ffffff', () => {
		const rgb = rgbToHex('255,255,255');
		expect(rgb).toEqual('#ffffff');
	});
	it('should convert 138, 67, 62 to #8a433e', () => {
		const rgb = rgbToHex('138,67,62');
		expect(rgb).toEqual('#8a433e');
	});
});

describe('hexToHSL:', () => {
	it('should return empty hsl object if nothing is passed', () => {
		const {h, s, l} = hexToHSL();
		expect(h).toEqual('');
		expect(s).toEqual('');
		expect(l).toEqual('');
	});
	it('should return empty hsl object if invalid hex is passed', () => {
		const {h, s, l} = hexToHSL('#dd');
		expect(h).toEqual('');
		expect(s).toEqual('');
		expect(l).toEqual('');
	});
	it('should convert #000000 to 0,0,0', () => {
		const {h, s, l} = hexToHSL('#000000');
		expect(h).toEqual(0);
		expect(s).toEqual(0);
		expect(l).toEqual(0);
	});
	it('should convert #43788c to 196,35,41', () => {
		const {h, s, l} = hexToHSL('#43788c');
		expect(h).toEqual(196);
		expect(s).toEqual(35);
		expect(l).toEqual(41);
	});
	it('should convert #2b0433 to 290,86,11', () => {
		const {h, s, l} = hexToHSL('#2b0433');
		expect(h).toEqual(290);
		expect(s).toEqual(86);
		expect(l).toEqual(11);
	});
});

describe('HSLToHex:', () => {
	it('should return empty string if nothing is passed', () => {
		const hex = HSLToHex();
		expect(hex).toEqual('');
	});
	it('should return empty string if invalid hsl is passed', () => {
		const hex = HSLToHex(255, 0);
		expect(hex).toEqual('');
	});
	it('should convert 290,0,0 to #000000', () => {
		const hex = HSLToHex(290, 0, 0);
		expect(hex).toEqual('#000000');
	});
	it('should convert 141,44,47 to #44ad69', () => {
		const hex = HSLToHex(141, 44, 47);
		expect(hex).toEqual('#43ad68');
	});
	it('should convert 141,0,100 to #000000', () => {
		const hex = HSLToHex(141, 0, 100);
		expect(hex).toEqual('#ffffff');
	});
});

describe('getBaseIndex', () => {
	it('should return 0', () => {
		const index = getBaseIndex('#ffffff', 4);
		expect(index).toEqual(0);
	});
	it('should return 1', () => {
		const index = getBaseIndex('#cf7a7a', 4);
		expect(index).toEqual(1);
	});
	it('should return 1', () => {
		const index = getBaseIndex('#4F52BD', 4);
		expect(index).toEqual(1);
	});
	it('should return 2', () => {
		const index = getBaseIndex('#7F6262', 4);
		expect(index).toEqual(2);
	});
	it('should return 3', () => {
		const index = getBaseIndex('#000000', 4);
		expect(index).toEqual(3);
	});
	it('should return 0', () => {
		const index = getBaseIndex('#E9EEF9', 4);
		expect(index).toEqual(0);
	});
});

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
