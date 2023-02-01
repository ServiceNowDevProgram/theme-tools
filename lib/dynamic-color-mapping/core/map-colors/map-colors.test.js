import {mapColors} from './';

describe('mapColors(initialColor, hooks, mapFile)', () => {
	it('should be exposed as a function', () => {
		expect(typeof mapColors).toBe('function');
	});
});
