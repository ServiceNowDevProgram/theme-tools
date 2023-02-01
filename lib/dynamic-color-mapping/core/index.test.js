import {isHook, resolveHook, mapColors} from './';

describe('core', () => {
	it('should expose the following functions', () => {
		expect(typeof mapColors).toBe('function');
		expect(typeof isHook).toBe('function');
		expect(typeof resolveHook).toBe('function');
	});
});
