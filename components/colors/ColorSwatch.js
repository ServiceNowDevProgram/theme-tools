import React from 'react';
import PropTypes from 'prop-types';
import CopyValue from '../CopyValue';

const ColorSwatch = ({items}) => {
	return (
		<div className="flex">
			{items && items.length ? (
				items.map((color) => {
					let name = color.name.split('--');
					name = name[name.length - 1];
					return (
						<div className="flex-1" title={color.name} key={color.name}>
							<div style={{height: '80px', backgroundColor: color.hex}}></div>
							<CopyValue value={color.name}>
								<small style={{fontSize: '10px'}}>{name}</small>
							</CopyValue>
							<CopyValue value={color.hex}>
								<small style={{fontSize: '10px'}}>{color.hex}</small>
							</CopyValue>
						</div>
					);
				})
			) : (
				<div className="flex-1">
					<div style={{height: '80px', backgroundColor: '#f5f5f5'}}></div>
				</div>
			)}
		</div>
	);
};

ColorSwatch.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			hex: PropTypes.string,
		})
	),
};

export default ColorSwatch;
