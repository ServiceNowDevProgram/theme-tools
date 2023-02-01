import {getL1Hooks} from './';
import {genRandomColors} from '../core/test-utils';

describe('getL1Hooks(source)', () => {
	it('should return A11y compliant secondary-nav hooks', () => {
		const hks = genRandomColors();
		const hooks = getL1Hooks(hks);
		expect(Object.keys(hooks))
			.to.be.an('array')
			.to.include('--now-toolbar-nav--background-color-start');
		expect(Object.keys(hooks))
			.to.be.an('array')
			.to.include('--now-toolbar-nav--background-color-end');
		expect(Object.keys(hooks))
			.to.be.an('array')
			.to.include('--now-canvas-toolbar-button--background-color--hover');
		expect(Object.keys(hooks))
			.to.be.an('array')
			.to.include('--now-canvas-toolbar-button--background-color--active');
		expect(Object.keys(hooks))
			.to.be.an('array')
			.to.include('--now-canvas-toolbar-button--border-color--active');
		expect(Object.keys(hooks))
			.to.be.an('array')
			.to.include('--now-canvas-toolbar-button--color');
		expect(Object.keys(hooks))
			.to.be.an('array')
			.to.include('--now-canvas-toolbar-button--opacity--hover');
		expect(Object.keys(hooks))
			.to.be.an('array')
			.to.include('--now-canvas-toolbar-button--color--focus');
	});
});
