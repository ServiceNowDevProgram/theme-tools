import React from 'react';
import PropTypes from 'prop-types';
import CopyValue from '../CopyValue';
import {getContrastRatio} from '../../lib/color-generator/generateColors';
import ColorInfoPopup from './ColorInfoPopup';

function getOnColor(baseColor) {
	const contrastWhite = getContrastRatio(baseColor, '#ffffff');
	if (contrastWhite.ratio > 4) {
		return 'white';
	} else {
		return 'black';
	}
}

const ColorSwatchMini = ({items}) => {
	return (
		<div className="flex flex-wrap">
			{items.map((color) => (
				<ColorInfoPopup color={color} key={color.id}>
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
				</ColorInfoPopup>
			))}
		</div>
	);
};

ColorSwatchMini.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			hex: PropTypes.string,
			rgb: PropTypes.string,
			customProperty: PropTypes.string,
			scssVariable: PropTypes.string,
			index: PropTypes.number,
		})
	),
};

export default ColorSwatchMini;
