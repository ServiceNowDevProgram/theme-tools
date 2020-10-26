export default function rule({ast, report}) {
	for (const node of ast.children) {
		const {key} = node;
		if (key.value.startsWith('now')) {
			const fix = `--${key.value}`;
			report(node).key.error('Hook names should start with "--"', fix);
		}
	}
}
