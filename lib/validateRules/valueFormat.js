export default function rule({ast, report}) {
	for (const node of ast.children) {
		const {value} = node;
		if (value.value.startsWith('now-')) {
			const fix = `--${value.value}`;
			report(node).value.error('Reference values should start with "--"', fix);
		}
		if (value.value.startsWith('$now')) {
			const fix = `--${value.value.slice(1)}`;
			report(node).value.error(
				'Reference values should start with "--" not "$"',
				fix
			);
		}
		if (value.value.startsWith('var(') && value.value.endsWith(')')) {
			const fix = value.value.replace(/^var\(/, '').replace(/\)$/, '');
			report(node).value.error(
				'Reference values should not be wrapped in "var(...)" statement',
				fix
			);
			continue;
		}
	}
}
