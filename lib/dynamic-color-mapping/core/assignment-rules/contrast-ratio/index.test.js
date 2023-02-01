import {isConstrastRatioAssignment, contrastRatioAssignRule} from './';

describe('contrast ratio assign rule', () => {
	it('should work', () => {
		expect(typeof isConstrastRatioAssignment).toBe('function');
	});
	it('should correctly determine rule', () => {
		expect(
			isConstrastRatioAssignment({
				threshold: '5.0',
				comparisonValue: '#FFF',
			})
		).toBeTruthy();
		expect(isConstrastRatioAssignment({comparisonValue: '#FFF'})).toBeFalsy();
	});
	it('should assign correct value', () => {
		const result = contrastRatioAssignRule(
			'#FFF',
			'--my-bg-hook',
			{
				threshold: '5.0',
				comparisonValue: '#FFF',
				pass: '#FFF',
				fail: '#000',
			},
			{'--no-hooks': 'needed here'}
		);
		const result2 = contrastRatioAssignRule(
			'#000',
			'--my-bg-hook2',
			{
				threshold: '5.0',
				comparisonValue: '#000',
				pass: '#000',
				fail: '#FFF',
			},
			{'--no-hooks': 'needed here'}
		);

		expect(result).to.deep.equal({'--my-bg-hook': '#000'});
		expect(result2).to.deep.equal({'--my-bg-hook2': '#FFF'});
	});
});
