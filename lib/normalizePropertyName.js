export default function normalizePropertyName(name) {
	// 1. assume unprefixed properties should be prefixed with "--now-"
	// 2. if values already have a "--" prefix, leave them alone
	if (!name.startsWith('--')) {
		return '--now-' + name;
	}
	return name;
}
