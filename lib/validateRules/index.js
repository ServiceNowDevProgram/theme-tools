import jsonAst from '../jsonAst';
import keyFormat from './keyFormat';
import valueFormat from './valueFormat';
import references from './references';
import schemaColor from './schemaColor';
import definedInRelease from './definedInRelease';
import duplicates from './duplicates';

const RULES = [
	keyFormat,
	valueFormat,
	references,
	schemaColor,
	definedInRelease,
	duplicates,
];

/**
 * @param {string} code - JSON theme data in string format
 * @param {Object} options
 * @param {string|null} options.release - Selected release, e.g. '19.0.0'
 * @param {Object} data
 * @param {Object} data.migrations
 * @param {Array}  data.releases
 * @param {Object} data.hooks
 * @param {Object} data.hooksByRelease
 */
export function runRules(code, options, data) {
	const errors = [];
	const warnings = [];

	function report(node) {
		return {
			key: {
				error: (message, fix) =>
					errors.push({
						node,
						part: 'key',
						message,
						fix,
					}),
				warning: (message, fix) =>
					warnings.push({
						node,
						part: 'key',
						message,
						fix,
					}),
			},
			value: {
				error: (message, fix) =>
					errors.push({
						node,
						part: 'value',
						message,
						fix,
					}),
				warning: (message, fix) =>
					warnings.push({
						node,
						part: 'value',
						message,
						fix,
					}),
			},
		};
	}

	const ast = jsonAst.parse(code);

	for (const rule of RULES) {
		rule({ast, options, data, report});
	}

	return {errors, warnings};
}
