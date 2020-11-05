import normalizePropertyName from '../normalizePropertyName';

function findRename(data, release, id) {
	const priorReleases = data.releases.slice(
		0,
		data.releases.indexOf(release) + 1
	);
	const renames = [];
	for (const priorRelease of priorReleases) {
		const migration = data.migrations.byRelease[priorRelease];
		for (const rename of migration.renamed) {
			if (rename.previousId === id) {
				renames.push(rename);
			}
		}
	}
	return renames.slice(-1)[0];
}

export default function rule({ast, report, options, data}) {
	const {release} = options;

	if (!release) return;

	for (const node of ast.children) {
		const {key} = node;
		const normalizedKey = normalizePropertyName(key.value);
		if (normalizedKey.startsWith('--now')) {
			const id = normalizedKey.replace(/^--/, '');
			const rename = findRename(data, release, id);
			if (rename) {
				const fix = '--' + rename.id;
				report(node).key.error(
					`Hook was renamed in prior release "${rename.release}", update to use the new name`,
					fix
				);
				continue;
			}
			const uid = data.hooksByRelease[release][id];
			if (!uid) {
				report(node).key.error(
					`Hook not used by any NDS components in release "${release}". Check hook spelling, or check that you are on the right version.`
				);
				continue;
			}
			const def = data.hooks[uid].definitions[id];
			if (!def.customProperty) {
				report(node).key.error(
					`Hook is static and cannot be themed, defining this value will do nothing`
				);
			}
		}
	}
}
