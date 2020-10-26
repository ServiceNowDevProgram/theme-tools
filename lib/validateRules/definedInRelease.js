import normalizePropertyName from '../normalizePropertyName';

export default function rule({ast, report, options, data}) {
	const {release} = options;

	if (!release) return;

	for (const node of ast.children) {
		const {key} = node;
		const normalizedKey = normalizePropertyName(key.value);
		if (normalizedKey.startsWith('--now')) {
			const id = normalizedKey.replace(/^--/, '');
			if (!data.hooksByRelease[release][id]) {
				let fix;
				if (data.migrations.byPreviousId[id]) {
					fix = data.migrations.byPreviousId[id];
				}
				report(node).key.error(
					`Hook not used by any NDS components in release "${release}". Check hook spelling, or check that you are on the right version.`,
					fix
				);
			}
		}
	}
}
