import {resolveHook} from './';

describe('resolveHook(hooks, hook)', () => {
	it('should resolve nested hooks', () => {
		const hooks = {
			'--hook-one': '--hook-two',
			'--hook-two': '--hook-three',
			'--hook-three': '#FF0000',
		};
		const hook = '--hook-one';
		expect(resolveHook(hooks, hook)).toEqual('#FF0000');
	});

	it('should throw an error if it can not resolve', () => {
		const hooks = {
			'--hook-one': '--hook-two',
			'--hook-two': '--hook-three',
			'--hook-threex': '#FF0000',
		};
		const hook = '--hook-one';
		expect(() => {
			resolveHook(hooks, hook);
		}).toThrow('--hook-three is not defined in hooks');
	});

	it('should also fail on circular references', () => {
		const hooks = {
			'--hook-one': '--hook-two',
			'--hook-two': '--hook-three',
			'--hook-three': '--hook-one',
		};
		const hook = '--hook-one';
		expect(() => {
			resolveHook(hooks, hook);
		}).toThrow(
			'resolveHook failed with circular references: --hook-one > --hook-two > --hook-three > --hook-one'
		);
	});
});
