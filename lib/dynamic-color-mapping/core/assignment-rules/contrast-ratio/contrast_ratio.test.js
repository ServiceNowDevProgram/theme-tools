import {isConstrastRatioAssignment, contrastRatioAssignRule} from './';

describe('contrast-ratio highestFallback', () => {
	it('should export 2 functions', () => {
		expect(typeof isConstrastRatioAssignment).toBe('function');
		expect(typeof contrastRatioAssignRule).toBe('function');
	});
	it('should assign value to target hook using next highest', () => {
		const hook = '--my-test';
		const hooks = {
			'--compare-val': '166,22,36',
			'--option-a': '100,120,45',
			'--option-b': '230,120,105',
			'--option-c': '90,120,45',
			'--my-bg-color': '#A24949',
		};
		const node = {
			comparisonValue: '--compare-val',
			threshold: 3,
			highestFallback: [
				'--option-a',
				'--option-b',
				'--option-c',
				'#000000',
				'#FFFFFF',
			],
		};
		expect(isConstrastRatioAssignment(node)).toBeTruthy();
		const result = contrastRatioAssignRule('--my-bg-color', hook, node, hooks);
		expect(result).to.deep.equal({'--my-test': '#FFFFFF'});
	});
});
