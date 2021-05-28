import React from 'react';
import PropTypes from 'prop-types';
import CopyValue from '../CopyValue';
import A11ySelect from '../A11ySelect';

const ColorSwatch = ({
	items,
	hideName,
	a11yCheckColors = [],
	hideA11yCheckColors,
}) => {
	return (
		<div className="flex">
			{items && items.length ? (
				items.map((color) => {
					let name = color.name.split('-');
					name = name[name.length - 1];

					return (
						<div className="flex-1" title={color.name} key={color.name}>
							<div style={{height: '80px', backgroundColor: color.hex}}></div>
							{!hideName ? (
								<CopyValue value={color.name}>
									<small style={{fontSize: '10px'}}>{name}</small>
								</CopyValue>
							) : null}
							<CopyValue value={color.hex}>
								<small style={{fontSize: '10px'}}>{color.hex}</small>
							</CopyValue>
							{!hideA11yCheckColors ? (
								<A11ySelect items={a11yCheckColors} baseColor={color.hex} />
							) : null}
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
	hideName: PropTypes.bool,
	a11yCheckColors: PropTypes.array,
	hideA11yCheckColors: PropTypes.bool,
};

export default ColorSwatch;
