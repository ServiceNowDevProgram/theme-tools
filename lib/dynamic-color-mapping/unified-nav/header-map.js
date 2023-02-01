import {AA_GRPH, AA_TXT} from '../core/constants';

export const unifiedNavHeaderMapFile = {
	'--now-unified-nav_header--background-color': {
		value: 'INITIAL_COLOR',
		'--now-unified-nav_header--color': {
			comparisonValue: '--now-color--neutral-21',
			threshold: AA_TXT,
			pass: '--now-color--neutral-21',
			fail: '--now-color--neutral-0',
		},
		'--now-unified-nav_nav-menu-trigger--color': {
			value: '--now-unified-nav_header--color',
		},
		'--now-unified-nav_nav-menu-trigger--border-size--hover': {
			value: '1px',
		},
		'--now-unified-nav_nav-menu-trigger--border-size--active': {
			value: '2px',
		},
		'--now-unified-nav_nav-menu-trigger--border-color--hover': {
			value: '--now-unified-nav_header--color',
		},
		'--now-unified-nav_nav-menu-trigger--border-color-alpha': {
			value: '1.0',
		},
		'--now-unified-nav_focus-ring--color': {
			value: '--now-color--focus-2',
		},
		'--now-unified-nav_focus-ring-inner--color': {
			value: '--now-color--neutral-1',
		},
		'--now-unified-nav_nav-menu-trigger--background-color': {
			value: '--now-unified-nav_header--background-color',
		},
		'--now-unified-nav_nav-menu-trigger--background-color-alpha--hover': {
			value: '0',
		},
		'--now-unified-nav_nav-menu-trigger--background-color-alpha': {
			value: '0',
		},
		'--now-unified-nav_nav-menu-trigger--background-color--hover': {
			backgroundColorOverride: '--now-unified-nav_header--color',
			is: '--now-color--neutral-0',
			then: '--now-color_chrome--brand-9',
			otherwise: '--now-color--neutral-0',
			'--now-unified-nav_nav-menu-trigger--color--hover': {
				comparisonValue: '--now-color--neutral-21',
				threshold: AA_TXT,
				pass: '--now-color--neutral-21',
				fail: '--now-color--neutral-0',
			},
		},
		'--now-unified-nav_menu-button-iconic--color': {
			value: '--now-unified-nav_nav-menu-trigger--color--hover',
		},
		'--now-unified-nav_menu-button-iconic--color--hover': {
			value: '100,100,100',
		},
		'--now-unified-nav_nav-menu-trigger--background-color--active': {
			value: '--now-color--neutral-0',
			'--now-unified-nav_nav-menu-trigger--color--active': {
				value: '--now-color--neutral-21',
			},
			'--now-unified-nav_utility-menu-trigger--color--active': {
				value: '--now-unified-nav_nav-menu-trigger--color--hover',
			},
		},
		'--now-unified-nav_contextual-app-pill--background-color': {
			value: 'INITIAL_COLOR',
			'--now-unified-nav_contextual-app-pill--color': {
				value: '--now-unified-nav_header--color',
			},
			'--now-unified-nav_favorite-icon--color': {
				comparisonValue: '--now-color_grouped--yellow-1',
				threshold: AA_GRPH,
				pass: '--now-color_grouped--yellow-1',
				fail: '--now-color_grouped--yellow-5',
			},
		},
		'--now-unified-nav_contextual-app-pill--border-color': {
			comparisonValue: '--now-color_chrome--divider-1',
			threshold: AA_GRPH,
			pass: '--now-color_chrome--divider-1',
			fail: '--now-color_chrome--divider-10',
		},
		'--now-unified-nav_utility-menu-trigger--background-color': {
			value: 'INITIAL_COLOR',
			'--now-unified-nav_utility-menu-trigger--color': {
				value: '--now-unified-nav_header--color',
			},
		},
		'--now-unified-nav_utility-menu-trigger--background-color-alpha': {
			value: '--now-unified-nav_button--background-color-alpha',
		},
		'--now-unified-nav_utility-menu-trigger--background-color--hover': {
			value: '--now-unified-nav_nav-menu-trigger--background-color--hover',
			'--now-unified-nav_utility-menu-trigger--color--hover': {
				value: '--now-unified-nav_nav-menu-trigger--color--hover',
			},
		},
		'--now-unified-nav_utility-menu-trigger--background-color-alpha--hover': {
			value: '--now-unified-nav_button--background-color-alpha--hover',
		},
		'--now-unified-nav_utility-menu-trigger--background-color--active': {
			value: '--now-unified-nav_utility-menu-trigger--background-color--hover',
		},
		'--now-unified-nav_nav-menu-trigger--border-color--active': {
			threshold: AA_GRPH,
			comparisonValue: '--now-color_alert--critical-3',
			pass: '--now-color_alert--critical-3',
			fail: '--now-color--neutral-0',
		},
		'--now-unified-nav_utility-panel-header--color': '--now-color--neutral-21',
		'--now-unified-nav_utility-panel-tabs--color': '--now-color_text--primary',
		'--now-unified-nav_utility-panel-tabs--color--selected':
			'--now-color_selection--primary-2',
		'--now-unified-nav_utility-panel-tabs--color--hover':
			'--now-color_selection--primary-3',
		'--now-unified-nav_utility-panel-tabs--color--active':
			'--now-color_selection--primary-4',
		'--now-unified-nav_utility-panel-tabs--border-color--selected':
			'--now-color_selection--primary-2',
		'--now-unified-nav_utility-panel-tabs--border-color--active':
			'--now-color_selection--primary-4',
	},
};
