import {isValidHexString, hexToRgb, isValidRgbString} from '../color';

export default function rule({ast, report, data}) {
	function findDefinition(id) {
		if (id.startsWith('--now')) {
			id = id.replace(/^--/, '');
		}
		const hook = Object.values(data.hooks).find((x) => x.definitions[id]);
		return hook ? hook.definitions[id] : null;
	}

	for (const node of ast.children) {
		const {key, value} = node;
		const def = findDefinition(key.value);
		if (def && def.schema === 'color') {
			if (value.value.startsWith('--')) {
				// Reference to another value
				// @TODO: Check that the referenced value has a compatible schema
				continue;
			}
			if (isValidHexString(value.value)) {
				const fix = hexToRgb(value.value).toString();
				report(node).value.error(
					'Colors should be in RGB format not hex format',
					fix
				);
				continue;
			}
			if (!isValidRgbString(value.value)) {
				report(node).value.error(
					`Hook expects a color value in RGB format (e.g. "1,2,3") but received "${value.value}"`
				);
				continue;
			}
		}
	}
}
