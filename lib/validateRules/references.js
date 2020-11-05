export default function rule({ast, report}) {
	for (const node of ast.children) {
		const {value} = node;
		if (value.value.startsWith('--')) {
			const parent = ast.children.find((x) => x.key.value === value.value);
			if (!parent) {
				report(node).value.warning(
					`Reference value should be defined in theme but "${value.value}" is not defined. This might not be a problem on the instance if you sys_ux_theme records extends another theme that has "${value.value}" defined.`
				);
			}
		}
	}
}
