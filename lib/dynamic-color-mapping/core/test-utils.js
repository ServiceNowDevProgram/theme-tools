import {getColors, getNeutrals} from '../../generate-colors-s';

export const genRandomColor = () => {
	let str = Math.floor(Math.random() * 16777215).toString(16);
	while (str.length < 6) {
		str += '0';
	}
	return `#${str}`;
};

export const genRandomColors = () => {
	let out = {};
	const primary = genRandomColor();
	const neutral = genRandomColor();
	const neutrals = getNeutrals(neutral);
	const clrs = getColors({
		neutrals: neutral,
		primary,
		secondary: genRandomColor(),
		secondaryNavBrand: neutrals[1].hex,
		secondaryNavDivider: neutrals[2].hex,
		groupedYellow: '#F0CF65',
		alertCritical: '#C83C36',
		chromeBrand: primary,
		chromeDivider: primary,
	});
	Object.keys(clrs).forEach((c) => {
		if (clrs[c].length) {
			clrs[c].forEach((clr) => {
				const {name, hex} = clr;
				out[name] = hex;
			});
		}
	});
	out['--now-color_brand--primary'] = primary;
	return out;
};
