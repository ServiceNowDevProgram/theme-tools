export const offsetColorRuleMapFile = {
	'--now-toolbar-nav--background-color-start': 'INITIAL_COLOR',
	'--now-toolbar-nav--background-color-end': 'INITIAL_COLOR',
	layer: {
		'--now-canvas-toolbar-button--background-color--hover': {
			rule: 'offset',
			scale: '--now-color_secondary-nav--brand',
			threshold: 'AA_GRPH',
			offset: 2,
		},
		'--now-canvas-toolbar-button--background-color--active': {
			rule: 'offset',
			scale: '--now-color_secondary-nav--brand',
			threshold: 'AA_GRPH',
			offset: 2,
		},
		'--now-canvas-toolbar-button--border-color--active':
			'--now-color_secondary-nav--divider-8',
		'--now-canvas-toolbar-button--color': {
			rule: 'pass-fail',
			comparisonValue: '--now-color--neutral-21',
			threshold: 'AA_GRPH',
			pass: '--now-color--neutral-21',
			fail: '--now-color--neutral-0',
			state: {
				'--now-canvas-toolbar-button--opacity--hover': '0.6',
				'--now-canvas-toolbar-button--color--focus': {
					rule: 'pass-fail',
					backgroundColorOverride:
						'--now-canvas-toolbar-button--background-color--active',
					comparisonValue: '--now-color--neutral-21',
					threshold: 'AA_GRPH',
					pass: '--now-color--neutral-21',
					fail: '--now-color--neutral-0',
				},
			},
		},
	},
};
