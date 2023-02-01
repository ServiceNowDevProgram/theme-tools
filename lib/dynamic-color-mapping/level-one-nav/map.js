import {AA_GRPH} from '../core/constants';

export const levelOneMapFile = {
	'--now-toolbar-nav--background-color-start': 'INITIAL_COLOR',
	'--now-toolbar-nav--background-color-end': {
		value: 'INITIAL_COLOR',
		'--now-canvas-toolbar-button--background-color--hover': {
			scale: '--now-color_secondary-nav--brand',
			offset: 2,
		},
		'--now-canvas-toolbar-button--background-color--active': {
			scale: '--now-color_secondary-nav--brand',
			offset: 2,
		},
		'--now-canvas-toolbar-button--border-color--active': {
			scale: '--now-color_secondary-nav--brand',
			targetScale: '--now-color_secondary-nav--divider',
			offset: 4,
		},
		'--now-canvas-toolbar-button--color': {
			comparisonValue: '--now-color--neutral-21',
			threshold: AA_GRPH,
			pass: '--now-color--neutral-21',
			fail: '--now-color--neutral-0',
			state: {
				'--now-canvas-toolbar-button--opacity--hover': '0.6',
				'--now-canvas-toolbar-button--color--focus': {
					backgroundColorOverride:
						'--now-canvas-toolbar-button--background-color--active',
					comparisonValue: '--now-color--neutral-21',
					threshold: AA_GRPH,
					pass: '--now-color--neutral-21',
					fail: '--now-color--neutral-0',
				},
			},
		},
	},
};
