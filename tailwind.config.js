const {colors} = require('tailwindcss/defaultTheme');

module.exports = {
	future: {
		// removeDeprecatedGapUtilities: true,
		// purgeLayersByDefault: true,
	},
	purge: [],
	theme: {
		extend: {
			colors: {
				primary: colors.purple,
			},
		},
	},
	variants: {},
	plugins: [],
};