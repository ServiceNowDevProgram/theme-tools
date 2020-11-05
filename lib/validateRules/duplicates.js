import normalizePropertyName from '../normalizePropertyName';
import {keys} from 'lodash';

export default function rule({ast, report}) {
	for (const node of ast.children) {
		const {key} = node;
		const longKey = normalizePropertyName(key.value);
		const shortKey = longKey.replace(/^--now-/, '');
		const isLongKey = longKey === key.value;

		const dupes = ast.children.filter(
			(x) => x !== node && normalizePropertyName(x.key.value) === longKey
		);
		if (dupes.length === 1 && dupes[0].key.value !== key.value) {
			report(node).key.error(
				`Hook is defined twice, once using shorthand syntax (${shortKey}) and once using longhand syntax (${longKey}). Delete one of the duplicate definitions.`
			);
			continue;
		}
	}
}
