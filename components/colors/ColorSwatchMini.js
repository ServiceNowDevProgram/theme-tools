import React from 'react';
import PropTypes from 'prop-types';
import CopyValue from '../CopyValue';
import Tippy from '@tippyjs/react';
import {getContrastRatio} from '../../lib/color-generator/generateColors';

function getOnColor(baseColor) {
	const contrastWhite = getContrastRatio(baseColor, '#ffffff');
	if (contrastWhite.ratio > 4) {
		return 'white';
	} else {
		return 'black';
	}
}

function ColorCircle({color, index}) {
	const tooltip = (
		<div>
			<div className="w-full h-20" style={{backgroundColor: color.hex}}></div>
			<div className="p-4 border-t border-gray-500">
				<p className="text-2xs uppercase opacity-75 pb-1">SCSS Variable</p>
				<CopyValue withButton value={color.scssVariable}>
					<p>{color.scssVariable}</p>
				</CopyValue>

				<p className="text-2xs uppercase opacity-75 pb-1 mt-3">
					CSS Custom Property
				</p>
				<CopyValue withButton value={color.customProperty}>
					<p>{color.customProperty}</p>
				</CopyValue>

				<p className="text-2xs uppercase opacity-75 pb-1 mt-3">Hex Color</p>
				<CopyValue withButton value={color.hex}>
					<p>{color.hex}</p>
				</CopyValue>

				<p className="text-2xs uppercase opacity-75 pb-1 mt-3">RGB Color</p>
				<CopyValue withButton value={color.rgb}>
					<p>{color.rgb}</p>
				</CopyValue>
			</div>
		</div>
	);

	return (
		<Tippy
			content={tooltip}
			trigger="click"
			interactive={true}
			theme="colorbox"
			arrow={false}>
			<button
				style={{
					height: '45px',
					width: '45px',
					marginRight: '-8px',
					borderRadius: '100%',
					border: '1px solid lightgray',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: color.hex,
					color: getOnColor(color.hex),
				}}>
				<span className="text-xs">{color.index}</span>
			</button>
		</Tippy>
	);
}

const ColorSwatchMini = ({name, description, items}) => {
	return (
		<div className="flex flex-wrap">
			{items.map((color, index) => (
				<ColorCircle color={color} index={index} key={color.id} />
			))}
		</div>
	);
};

ColorSwatchMini.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			name: PropTypes.string,
			hex: PropTypes.string,
			customProperty: PropTypes.string,
			scssVariable: PropTypes.string,
		})
	),
};

export default ColorSwatchMini;
