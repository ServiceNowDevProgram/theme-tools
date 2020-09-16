/* eslint-env node */
module.exports = {
	useTabs: true,
	singleQuote: true,
	bracketSpacing: false,
	jsxBracketSameLine: true,
	arrowParens: 'always',
	overrides: [
		{
			files: '_theme.scss',
			options: {
				printWidth: 200
			}
		}
	]
};
