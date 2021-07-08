const {colors} = require('tailwindcss/defaultTheme');

module.exports = {
	future: {
		// removeDeprecatedGapUtilities: true,
		// purgeLayersByDefault: true,
	},
	purge: [],
	theme: {
		extend: {
			fontSize: {
				'2xs': '0.625rem',
			},
			colors: {
				primary: colors.purple,
			},
		},
	},
	variants: {},
	plugins: [],
};
