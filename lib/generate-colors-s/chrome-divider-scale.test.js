import {getColors} from './';

describe('chrome--divider updated scale', () => {
	const {chromeDivider} = getColors({
		neutrals: '#7243A2',
		chromeDivider: '#AF151E',
	});

	it('should be a function', () => {
		expect(typeof getColors).equals('function');
	});

	it('should generate 11 steps', () => {
		expect(chromeDivider.length).equals(11);
	});
	it('should desaturate scale', () => {
		expect(chromeDivider[0].hex).equals('#f3f2f2');
		expect(chromeDivider[0].rgb).equals('243,242,242');
		expect(chromeDivider[0].name).equals('--now-color_chrome--divider-0');

		expect(chromeDivider[1].hex).equals('#dcdada');
		expect(chromeDivider[1].rgb).equals('220,218,218');
		expect(chromeDivider[1].name).equals('--now-color_chrome--divider-1');

		expect(chromeDivider[2].hex).equals('#c3bfc0');
		expect(chromeDivider[2].rgb).equals('195,191,192');
		expect(chromeDivider[2].name).equals('--now-color_chrome--divider-2');

		expect(chromeDivider[3].hex).equals('#aca7a8');
		expect(chromeDivider[3].rgb).equals('172,167,168');
		expect(chromeDivider[3].name).equals('--now-color_chrome--divider-3');

		expect(chromeDivider[4].hex).equals('#958f8f');
		expect(chromeDivider[4].rgb).equals('149,143,143');
		expect(chromeDivider[4].name).equals('--now-color_chrome--divider-4');

		expect(chromeDivider[5].hex).equals('#7d7475');
		expect(chromeDivider[5].rgb).equals('125,116,117');
		expect(chromeDivider[5].name).equals('--now-color_chrome--divider-5');

		expect(chromeDivider[6].hex).equals('#665c5d');
		expect(chromeDivider[6].rgb).equals('102,92,93');
		expect(chromeDivider[6].name).equals('--now-color_chrome--divider-6');

		expect(chromeDivider[7].hex).equals('#514949');
		expect(chromeDivider[7].rgb).equals('81,73,73');
		expect(chromeDivider[7].name).equals('--now-color_chrome--divider-7');

		expect(chromeDivider[8].hex).equals('#3a3435');
		expect(chromeDivider[8].rgb).equals('58,52,53');
		expect(chromeDivider[8].name).equals('--now-color_chrome--divider-8');

		expect(chromeDivider[9].hex).equals('#252121');
		expect(chromeDivider[9].rgb).equals('37,33,33');
		expect(chromeDivider[9].name).equals('--now-color_chrome--divider-9');

		expect(chromeDivider[10].hex).equals('#0e0d0d');
		expect(chromeDivider[10].rgb).equals('14,13,13');
		expect(chromeDivider[10].name).equals('--now-color_chrome--divider-10');
	});
});
