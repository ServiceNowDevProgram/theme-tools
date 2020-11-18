import React from 'react';
import PropTypes from 'prop-types';
import cx from '../lib/cx';

function Input({
	layout = 'vertical',
	type,
	name,
	label,
	value,
	onChange = () => {},
	placeholder,
}) {
	return (
		<div
			className={cx({
				flex: true,
				'items-center': layout === 'horizontal',
				'flex-col': layout === 'vertical',
			})}>
			<label
				className={cx({
					'mb-1': layout === 'vertical',
					'mr-2': layout === 'horizontal',
					label: true,
				})}
				htmlFor={name}>
				{label}
			</label>
			<input
				name={name}
				className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
				type={type}
				value={value || ''}
				onChange={(e) => {
					onChange(e.target.value || undefined);
				}}
				placeholder={placeholder}
			/>
		</div>
	);
}

Input.propTypes = {
	layout: PropTypes.oneOf(['vertical', 'horizontal']),
	type: PropTypes.oneOf(['text', 'number']),
	name: PropTypes.string,
	label: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
};

export default Input;
