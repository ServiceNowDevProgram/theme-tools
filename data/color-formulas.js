export const colorFormulas = [
	{
		label: 'Brand Primary',
		hook: '--now-color_brand--primary',
		light: {
			color: '#4F52BD',
		},
	},
	{
		label: 'Brand Secondary',
		hook: '--now-color_brand--secondary',
		light: {
			color: '#302F4B',
		},
	},
	{
		label: 'Brand Neutral',
		hook: '--now-color_brand--neutral',
		light: {
			color: '#4F5664',
		},
	},
	{
		label: 'Neutrals',
		hook: 'now-color--neutral',
		light: {
			color: '#4F5664',
			lightVariations: 10,
			lightPercentage: 0.95,
			lightSaturation: 1,
			darkVariations: 9,
			darkPercentage: 0.9,
			darkSaturation: 1,
			startIndex: 0,
			includeEnds: true,
			derived: [
				{
					group: [
						{
							label: 'Text Primary',
							hook: '--now-color_text--primary',
							color: '--now-color--neutral-18',
						},
						{
							label: 'Text Secondary',
							hook: '--now-color_text--secondary',
							color: '--now-color--neutral-12',
						},
						{
							label: 'Text Tertiary',
							hook: '--now-color_text--tertiary',
							color: '--now-color--neutral-9',
						},
					],
				},
				{
					group: [
						{
							label: 'Background Primary',
							hook: '--now-color_background--primary',
							color: '--now-color--neutral-0',
						},
						{
							label: 'Background Secondary',
							hook: '--now-color_background--secondary',
							color: '--now-color--neutral-1',
						},
						{
							label: 'Background Tertiary',
							hook: '--now-color_background--tertiary',
							color: '--now-color--neutral-2',
						},
					],
				},
				{
					group: [
						{
							label: 'Border Primary',
							hook: '--now-color_border--primary',
							color: '--now-color--neutral-7',
						},
						{
							label: 'Border Secondary',
							hook: '--now-color_border--secondary',
							color: '--now-color--neutral-5',
						},
						{
							label: 'Border Tertiary',
							hook: '--now-color_border--tertiary',
							color: '--now-color--neutral-3',
						},
					],
				},
				{
					group: [
						{
							label: 'Divider Primary',
							hook: '--now-color_divider--primary',
							color: '--now-color--neutral-7',
						},
						{
							label: 'Divider Secondary',
							hook: '--now-color_divider--secondary',
							color: '--now-color--neutral-5',
						},
						{
							label: 'Divider Tertiary',
							hook: '--now-color_divider--tertiary',
							color: '--now-color--neutral-3',
						},
					],
				},
				{
					group: [
						{
							label: 'Focus Ring Shadow',
							hook: '--now-color_focus-ring_shadow',
							color: '--now-color--neutral-0',
						},
					],
				},
				{
					group: [
						{
							label: 'Datavis Color Primary',
							hook: '--now-datavis_color--primary',
							color: '--now-color--neutral-0',
						},
					],
				},
				{
					group: [
						{
							label: 'Datavis Color Chart Primary',
							hook: '--now-datavis_color_chart--primary',
							color: '--now-color--neutral-2',
						},
						{
							label: 'Datavis Color Chart Secondary',
							hook: '--now-datavis_color_chart--secondary',
							color: '--now-color--neutral-4',
						},
						{
							label: 'Datavis Color Chart Tertiary',
							hook: '--now-datavis_color_chart--tertiary',
							color: '--now-color--neutral-7',
						},
					],
				},
				{
					group: [
						{
							label: 'Datavis Color Label Primary',
							hook: '--now-datavis_color_label--primary',
							color: '--now-color--neutral-18',
						},
						{
							label: 'Datavis Color Label Secondary',
							hook: '--now-datavis_color_label--secondary',
							color: '--now-color--neutral-9',
						},
						{
							label: 'Datavis Color Label Tertiary',
							hook: '--now-datavis_color_label--tertiary',
							color: '--now-color--neutral-5',
						},
					],
				},
				{
					group: [
						{
							label: 'Datavis Color Layer Primary',
							hook: '--now-datavis_color_layer--primary',
							color: '--now-color--neutral-2',
						},
						{
							label: 'Datavis Color Layer Secondary',
							hook: '--now-datavis_color_layer--secondary',
							color: '--now-color--neutral-4',
						},
						{
							label: 'Datavis Color Layer Tertiary',
							hook: '--now-datavis_color_layer--tertiary',
							color: '--now-color--neutral-5',
						},
						{
							label: 'Datavis Color Layer Quad',
							hook: '--now-datavis_color_layer--quad',
							color: '--now-color--neutral-20',
						},
					],
				},
			],
		},
	},
	{
		label: 'Primary',
		hook: 'now-color--primary',
		light: {
			color: '#4F52BD',
			lightPercentage: 0.74,
			lightVariations: 1,
			darkPercentage: 0.65,
			darkVariations: 2,
		},
	},
	{
		label: 'Secondary',
		hook: 'now-color--secondary',
		light: {
			color: '#4F52BD',
			lightPercentage: 0.74,
			lightVariations: 1,
			darkPercentage: 0.65,
			darkVariations: 2,
		},
		dark: {
			color: '#4F52BD',
			lightPercentage: 0.95,
			lightVariations: 3,
			lightSaturation: 1,
			darkPercentage: 0.65,
			darkVariations: 0,
			darkSaturation: 1,
		},
	},
	{
		label: 'Selection Primary',
		hook: 'now-color_selection--primary',
		light: {
			color: '#007B58',
			lightPercentage: 0.85,
			lightVariations: 2,
			darkPercentage: 0.5,
			darkVariations: 2,
		},
		dark: {
			color: '#007B58',
			lightPercentage: 0.75,
			lightVariations: 3,
			lightSaturation: 1,
			darkPercentage: 0.25,
			darkVariations: 1,
			darkSaturation: 1,
		},
	},
	{
		label: 'Selection Secondary',
		hook: 'now-color_selection--secondary',
		light: {
			color: '#4F52BD',
			lightPercentage: 0.74,
			lightVariations: 2,
			darkPercentage: 0.65,
			darkVariations: 2,
		},
		dark: {
			color: '#4F52BD',
			lightPercentage: 0.75,
			lightVariations: 3,
			darkPercentage: 0.25,
			darkSaturation: 0.25,
			darkVariations: 1,
		},
	},
	{
		label: 'Interactive',
		hook: 'now-color--interactive',
		light: {
			color: '#4F52BD',
			lightPercentage: 0.74,
			lightVariations: 2,
			darkPercentage: 0.7,
			darkVariations: 2,
		},
		dark: {
			color: '#4F52BD',
			lightPercentage: 0.75,
			lightVariations: 3,
			lightSaturation: 1,
			darkPercentage: 0.25,
			darkVariations: 1,
			darkSaturation: 0.25,
		},
	},
	{
		label: 'Link',
		hook: 'now-color--link',
		light: {
			color: '#3C59E7',
			lightPercentage: 0.32,
			lightVariations: 1,
			darkPercentage: 0.63,
			darkVariations: 2,
			startIndex: 1,
		},
		dark: {
			color: '#3C59E7',
			lightPercentage: 0.75,
			lightVariations: 3,
			lightSaturation: 1,
			darkPercentage: 0.25,
			darkVariations: 0,
			darkSaturation: 0.25,
			startIndex: 1,
		},
	},
	{
		label: 'Focus',
		hook: 'now-color--focus',
		light: {
			color: '#3C59E7',
			lightPercentage: 0.3,
			lightVariations: 1,
			darkPercentage: 0.63,
			darkVariations: 1,
			startIndex: 1,
			derived: [
				{
					group: [
						{
							label: 'Focus Ring',
							hook: '--now-color_focus-ring',
							color: '--now-color--focus-2',
						},
					],
				},
			],
		},
		dark: {
			color: '#3C59E7',
			lightPercentage: 0.75,
			lightVariations: 2,
			lightSaturation: 1,
			darkPercentage: 0.63,
			darkVariations: 0,
			startIndex: 1,
		},
	},
	{
		label: 'Surface Brand',
		hook: 'now-color_surface--brand',
		light: {
			color: '#007B58',
			lightPercentage: 0.9,
			lightVariations: 5,
			darkPercentage: 0.5,
			darkVariations: 0,
			startIndex: 1,
		},
	},
	{
		label: 'Surface Neutral',
		hook: 'now-color_surface--neutral',
		light: {
			color: '#C0C5CD',
			lightPercentage: 0.95,
			lightVariations: 6,
			darkPercentage: 0.81,
			darkVariations: 0,
			startIndex: 1,
			removeEnd: true,
		},
	},
	{
		label: 'Surface Divider',
		hook: 'now-color_surface--divider',
		light: {
			color: '#7d8592',
			lightPercentage: 0.9,
			lightVariations: 6,
			darkPercentage: 0,
			darkVariations: 0,
			startIndex: 1,
			removeEnd: true,
		},
	},
	{
		label: 'Chrome Brand',
		hook: 'now-color_chrome--brand',
		light: {
			color: '#302F4B',
			lightPercentage: 0.85,
			lightVariations: 5,
			darkPercentage: 0.5,
			darkVariations: 5,
		},
	},
	{
		label: 'Chrome Divider',
		hook: 'now-color_chrome--divider',
		light: {
			color: '#2A2941',
			lightPercentage: 0.6,
			lightVariations: 5,
			darkPercentage: 0.8,
			darkVariations: 5,
		},
	},
	{
		label: 'Alert Critical',
		hook: 'now-color_alert--critical',
		light: {
			color: '#FF334B',
			lightPercentage: 0.75,
			lightVariations: 2,
			darkPercentage: 0.6,
			darkVariations: 3,
			startIndex: 0,
		},
	},
	{
		label: 'Alert High',
		hook: 'now-color_alert--high',
		light: {
			color: '#FD9700',
			lightPercentage: 0.75,
			lightVariations: 2,
			darkPercentage: 0.72,
			darkVariations: 3,
			startIndex: 0,
		},
	},
	{
		label: 'Alert Warning',
		hook: 'now-color_alert--warning',
		light: {
			color: '#F0E000',
			lightPercentage: 0.75,
			lightVariations: 2,
			darkPercentage: 0.72,
			darkVariations: 3,
			startIndex: 0,
		},
	},
	{
		label: 'Alert Moderate',
		hook: 'now-color_alert--moderate',
		light: {
			color: '#8B6BFF',
			lightPercentage: 0.74,
			lightVariations: 2,
			darkPercentage: 0.72,
			darkVariations: 3,
			startIndex: 0,
		},
	},
	{
		label: 'Alert Info',
		hook: 'now-color_alert--info',
		light: {
			color: '#38AAF4',
			lightPercentage: 0.74,
			lightVariations: 2,
			darkPercentage: 0.72,
			darkVariations: 3,
			startIndex: 0,
		},
	},
	{
		label: 'Alert Positive',
		hook: 'now-color_alert--positive',
		light: {
			color: '#51AE00',
			lightPercentage: 0.74,
			lightVariations: 2,
			darkPercentage: 0.79,
			darkVariations: 3,
			startIndex: 0,
		},
	},
	{
		label: 'Alert Low',
		hook: 'now-color_alert--low',
		light: {
			color: '#9698A4',
			lightPercentage: 0.74,
			lightVariations: 2,
			darkPercentage: 0.79,
			darkVariations: 3,
			startIndex: 0,
		},
	},
	{
		label: 'Grouped Blue',
		hook: `now-color_grouped--blue`,
		light: {
			color: '#67D2E6',
			lightVariations: 2,
			lightPercentage: 0.75,
			darkVariations: 3,
			darkPercentage: 0.65,
			startIndex: 0,
		},
	},
	{
		label: 'Grouped Brown',
		hook: `now-color_grouped--brown`,
		light: {
			color: '#D3A675',
			lightVariations: 2,
			lightPercentage: 0.75,
			darkVariations: 3,
			darkPercentage: 0.65,
			startIndex: 0,
		},
	},
	{
		label: 'Grouped Gray',
		hook: `now-color_grouped--gray`,
		light: {
			color: '#A3ABAC',
			lightVariations: 2,
			lightPercentage: 0.75,
			darkVariations: 3,
			darkPercentage: 0.65,
			startIndex: 0,
		},
	},
	{
		label: 'Grouped Green',
		hook: `now-color_grouped--green`,
		light: {
			color: '#51B962',
			lightVariations: 2,
			lightPercentage: 0.75,
			darkVariations: 3,
			darkPercentage: 0.65,
			startIndex: 0,
		},
	},
	{
		label: 'Grouped Green Yellow',
		hook: `now-color_grouped--green-yellow`,
		light: {
			color: '#C8DA6E',
			lightVariations: 2,
			lightPercentage: 0.75,
			darkVariations: 3,
			darkPercentage: 0.65,
			startIndex: 0,
		},
	},
	{
		label: 'Grouped Magenta',
		hook: `now-color_grouped--magenta`,
		light: {
			color: '#E869BF',
			lightVariations: 2,
			lightPercentage: 0.75,
			darkVariations: 3,
			darkPercentage: 0.65,
			startIndex: 0,
		},
	},
	{
		label: 'Grouped Orange',
		hook: `now-color_grouped--orange`,
		light: {
			color: '#FF8C72',
			lightVariations: 2,
			lightPercentage: 0.75,
			darkVariations: 3,
			darkPercentage: 0.65,
			startIndex: 0,
		},
	},
	{
		label: 'Grouped Pink',
		hook: `now-color_grouped--pink`,
		light: {
			color: '#E080A0',
			lightVariations: 2,
			lightPercentage: 0.75,
			darkVariations: 3,
			darkPercentage: 0.65,
			startIndex: 0,
		},
	},
	{
		label: 'Grouped Purple',
		hook: `now-color_grouped--purple`,
		light: {
			color: '#BD7AEA',
			lightVariations: 2,
			lightPercentage: 0.75,
			darkVariations: 3,
			darkPercentage: 0.65,
			startIndex: 0,
		},
	},
	{
		label: 'Grouped Teal',
		hook: `now-color_grouped--teal`,
		light: {
			color: '#51C2C2',
			lightVariations: 2,
			lightPercentage: 0.75,
			darkVariations: 3,
			darkPercentage: 0.65,
			startIndex: 0,
		},
	},
	{
		label: 'Grouped Yellow',
		hook: `now-color_grouped--yellow`,
		light: {
			color: '#FFC651',
			lightVariations: 2,
			lightPercentage: 0.75,
			darkVariations: 3,
			darkPercentage: 0.65,
			startIndex: 0,
		},
	},
];
