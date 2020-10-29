export default function shallowEqual(a, b) {
	for (const k in a) {
		if (a[k] !== b[k]) return false;
	}
	for (const k in b) {
		if (a[k] !== b[k]) return false;
	}
	return true;
}
