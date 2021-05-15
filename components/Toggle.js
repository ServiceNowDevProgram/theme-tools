import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Home.module.css';
import cx from '../lib/cx';

function Toggle({label, checked = false, onChange = () => {}}) {
	const [value, setValue] = useState(checked);

	const onKeyPress = () => {
		setValue(!value);
		onChange(value);
	};

	return (
		<label className="flex items-center cursor-pointer">
			<a
				role="button"
				tabIndex="0"
				className="relative"
				onKeyPress={onKeyPress}>
				<input
					name={label}
					type="checkbox"
					className="hidden"
					onChange={() => {
						setValue(!value);
						onChange(value);
					}}
					checked={checked}
				/>
				<div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
				<div
					className={cx({
						[styles.toggle__dot]: true,
						absolute: true,
						'w-6': true,
						'h-6': true,
						'bg-white': true,
						'rounded-full': true,
						shadow: true,
						'inset-y-0': true,
						'left-0': true,
					})}></div>
			</a>
			<div className="ml-3">{label}</div>
		</label>
	);
}

Toggle.propTypes = {
	label: PropTypes.string,
	checked: PropTypes.bool,
	onChange: PropTypes.func,
};

export default Toggle;
