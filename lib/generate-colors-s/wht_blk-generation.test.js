import {getColors, isHex, hexToRgb} from './';

describe('pure white and black color scales', () => {
	it('should generate complete primary scale for pure white', () => {
		const {primary, chromeBrand} = getColors({
			primary: '#FFFFFF',
			chromeBrand: '#FFFFFF',
			neutrals: '#333333',
		});
		expect(primary.length).equals(4);
		expect(chromeBrand.length).equals(11);
	});

	it('should generate complete primary scale for pure black', () => {
		const {primary, chromeBrand} = getColors({
			primary: '#000000',
			chromeBrand: '#000000',
			neutrals: '#333333',
		});
		expect(primary.length).equals(4);
		expect(chromeBrand.length).equals(11);
	});

	it('should generate complete primary scale for pure white (shorthand)', () => {
		const {primary, chromeBrand} = getColors({
			primary: '#FFF',
			chromeBrand: '#FFF',
			neutrals: '#333',
		});
		expect(isHex('#FFF')).toBeTruthy();
		expect(isHex('#fff')).toBeTruthy();
		expect(hexToRgb('#FFF')).equals('255,255,255');
		expect(primary.length).equals(4);
		expect(chromeBrand.length).equals(11);
	});

	it('should generate complete primary scale for pure black (shortand)', () => {
		const {primary, chromeBrand} = getColors({
			primary: '#000',
			chromeBrand: '#000',
			neutrals: '#333',
		});
		expect(isHex('#000')).toBeTruthy();
		expect(primary.length).equals(4);
		expect(chromeBrand.length).equals(11);
	});

	it('should generate complete secondary scale for pure white', () => {
		const {secondary, surfaceBrand} = getColors({
			secondary: '#FFFFFF',
			surfaceBrand: '#FFFFFF',
			neutrals: '#333333',
		});
		expect(secondary.length).equals(4);
		expect(surfaceBrand.length).equals(7);
	});

	it('should generate complete secondary scale for pure black', () => {
		const {secondary, surfaceBrand} = getColors({
			secondary: '#000000',
			surfaceBrand: '#000000',
			neutrals: '#333333',
		});
		expect(secondary.length).equals(4);
		expect(surfaceBrand.length).equals(7);
	});

	it('should generate complete neutral scale for pure white', () => {
		const {neutrals} = getColors({neutrals: '#333333'});
		expect(neutrals.length).equals(22);
	});

	it('should generate complete neutral scale for pure black', () => {
		const {neutrals} = getColors({neutrals: '#333333'});
		expect(neutrals.length).equals(22);
	});
});
