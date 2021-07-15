import React from 'react';
import PropTypes from 'prop-types';
import CopyValue from '../CopyValue';
import Tippy from '@tippyjs/react';

const ColorInfoPopup = ({color, children}) => {
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
			{children}
		</Tippy>
	);
};

ColorInfoPopup.propTypes = {
	color: PropTypes.shape({
		id: PropTypes.string,
		hex: PropTypes.string,
		rgb: PropTypes.string,
		customProperty: PropTypes.string,
		scssVariable: PropTypes.string,
		index: PropTypes.number,
	}),
};

export default ColorInfoPopup;
