import {AA_TXT} from '../core/constants';

export const unifiedNavMenuMapFile = {
	'--now-unified-nav_menu--background-color': {
		value: 'INITIAL_COLOR',
		'--now-unified-nav_button--background-color': 'INITIAL_COLOR',
		'--now-unified-nav_button--background-color--hover': {
			value: '--now-color_brand--primary',
			'--now-unified-nav_button--color--hover': {
				comparisonValue: '--now-color--neutral-21',
				threshold: AA_TXT,
				pass: '--now-color--neutral-21',
				fail: '--now-color--neutral-0',
			},
		},
		'--now-unified-nav_button--background-color--active':
			'--now-unified-nav_button--background-color',
		'--now-unified-nav_button--background-color-alpha': '0',
		'--now-unified-nav_button--background-color-alpha--hover': '1',
		'--now-unified-nav_button--background-color-alpha--active': '1',
		'--now-unified-nav_button--color': {
			comparisonValue: '--now-color--neutral-21',
			threshold: AA_TXT,
			pass: '--now-color--neutral-21',
			fail: '--now-color--neutral-0',
		},
		'--now-unified-nav_button--color--active':
			'--now-unified-nav_button--color',
		'--now-unified-nav_menu-item--color': {
			value: '--now-color--neutral-18',
		},
		'--now-unified-nav_menu-item--color--active': {
			value: '--now-unified-nav_button--color',
		},
		'--now-unified-nav_menu-button-iconic--color': {
			value: '--now-unified-nav_button--color--hover',
		},
		'--now-unified-nav_menu-section-header--color': {
			value: '--now-color--neutral-21',
		},
		'--now-unified-nav_menu-section-header--background-color': {
			value: '--now-color_chrome--divider-1',
		},
		'--now-unified-nav_menu-item--background-color--hover': {
			value: '--now-color_brand--primary',
			'--now-unified-nav_menu-item--color--hover': {
				comparisonValue: '--now-color--neutral-21',
				threshold: AA_TXT,
				pass: '--now-color--neutral-21',
				fail: '--now-color--neutral-0',
			},
			'--now-unified-nav_menu-item--border-color--hover': {
				value: '--now-unified-nav_menu-item--color--hover',
			},
			'--now-unified-nav_menu-item--border-color-alpha--hover': {
				value: '1',
			},
			'--now-unified-nav_menu-button-iconic--background-color': {
				value: '--now-color--neutral-0',
			},
			'--now-unified-nav_menu-button-iconic--background-color--active': {
				value: '--now-unified-nav_menu-item--background-color--hover',
			},
			'--now-unified-nav_menu-button-iconic--background-color-alpha': {
				value: '0',
			},
			'--now-unified-nav_menu-button-iconic--background-color--hover': {
				value: '--now-color_brand--primary',
			},
			'--now-unified-nav_menu-filter-result-mark--color': {
				value: '--now-color--neutral-17',
			},
			'--now-unified-nav_menu-filter-result-mark--color--hover': {
				comparisonValue: '--now-color--neutral-21',
				threshold: AA_TXT,
				pass: '--now-color--neutral-21',
				fail: '--now-color--neutral-0',
			},
			'--now-unified-nav_menu-button-iconic--color--hover': {
				value: '--now-color--neutral-21',
			},
		},
		'--now-unified-nav_favorite-icon--background-color--hover': {
			value: '--now-color--neutral-0',
		},
		'--now-unified-nav_favorite-icon--color--hover': {
			value: '--now-color_grouped--yellow-4',
		},
		'--now-unified-nav_menu-item--background-color--active': {
			value: '--now-unified-nav_menu-item--background-color--hover',
		},
		'--now-unified-nav_menu-item--background-color-alpha--hover': {
			value: '1',
		},
		'--now-unified-nav_menu-item--text-decoration--hover': {
			value: 'underline',
		},
		'--now-unified-nav_menu-item--background-color-alpha--active': {
			value: '1',
		},
		'--now-unified-nav_menu-subitem--color': {
			value: '--now-unified-nav_button--color',
		},
	},
	'--now-unified-nav_menu--background-color-alpha': {
		value: '1',
	},
	'--now-unified-nav_menu--background-image-alpha': {
		value: '0',
	},
	'--now-unified-nav_menu-filter--color': '--now-color--neutral-0',
	'--now-unified-nav_menu-filter--color--placeholder':
		'--now-unified-nav_menu-filter--color',
	'--now-unified-nav_menu-filter--color--placeholder--focus':
		'--now-color--neutral-18',
	'--now-unified-nav_menu-filter--color--opened': '--now-color--neutral-18',
	'--now-unified-nav_menu-filter--background-color': {
		value: '--now-color_background--secondary',
		'--now-unified-nav_menu-filter--color': {
			comparisonValue: '--now-color--neutral-21',
			threshold: AA_TXT,
			pass: '--now-color--neutral-21',
			fail: '--now-color--neutral-0',
		},
	},
	'--now-unified-nav_menu-filter--background-color--hover': {
		value: '--now-color_background--tertiary',
	},
	'--now-unified-nav_menu-filter--background-color--opened':
		'--now-color--neutral-0',
	'--now-unified-nav_menu-filter--border-color':
		'--now-color_chrome--divider-1',
	'--now-unified-nav_menu-filter--border-color--opened': '--now-color--focus-1',
	'--now-unified-nav_menu-filter-result--color': {
		value: '--now-color--neutral-18',
	},
	'--now-unified-nav_menu-filter-result--color--hover': {
		value: '--now-color--neutral-21',
	},
	'--now-unified-nav_menu-divider-horizontal--color':
		'--now-color_chrome--divider-2',
	'--now-unified-nav_menu-divider-vertical--color':
		'--now-unified-nav_menu-subitem--color',
	'--now-unified-nav_menu-scrollbar--color': {
		value: '--now-color--neutral-8',
	},
	'--now-unified-nav_menu--border-color': '--now-color_chrome--divider-3',
	'--now-unified-nav_menu-button-iconic--color--active':
		'--now-unified-nav_button--color--active',
	'--now-unified-nav_menu-sublabel--color': {
		value: '--now-color--neutral-15',
	},
	'--now-unified-nav_menu-sublabel--color--hover': {
		value: '--now-unified-nav_menu-item--color--hover',
	},
	'--now-unified-nav_menu-item--border-size': {
		value: '1px',
	},
	'--now-unified-nav_menu-subitem--border-size': {
		value: '1px',
	},
	'--now-unified-nav_menu-subitem--border-color--hover': {
		value: '--now-unified-nav_menu-item--color--hover',
	},
	'--now-unified-nav_menu-subitem--border-radius': {
		value: '4px',
	},
};
