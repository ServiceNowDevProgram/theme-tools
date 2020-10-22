export default function cx(object) {
	const classNames = [];
	for (const k in object) {
		if (!object.hasOwnProperty(k)) continue;
		if (object.hasOwnProperty(k) && object[k]) {
			classNames.push(k);
		}
	}
	return classNames.join(' ');
}
