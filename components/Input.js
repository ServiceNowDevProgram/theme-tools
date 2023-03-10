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
	disabled,
}) {
	return (
		<div
			className={cx({
				'w-full': true,
				flex: true,
				'items-center': layout === 'horizontal',
				'flex-col': layout === 'vertical',
			})}>
			<label
				className={cx({
					'mb-1': layout === 'vertical',
					'mr-2': layout === 'horizontal',
					'flex-1-0-auto': true,
					label: true,
				})}
				htmlFor={name}>
				{label}
			</label>
			<input
				name={name}
				className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-full"
				type={type}
				value={value || ''}
				onChange={(e) => {
					onChange(e.target.value || undefined);
				}}
				disabled={disabled}
				placeholder={placeholder}
			/>
		</div>
	);
}

Input.propTypes = {
	layout: PropTypes.oneOf(['vertical', 'horizontal']),
	type: PropTypes.oneOf(['text', 'number', 'password']),
	name: PropTypes.string,
	label: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
};

export default Input;
