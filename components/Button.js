import React from 'react';
import PropTypes from 'prop-types';
import cx from '../lib/cx';

function Button({children, size = 'md', onClick = () => {}}) {
	return (
		<button
			className={cx({
				'bg-blue-500': true,
				'hover:bg-blue-700': true,
				'text-white': true,
				'font-bold': true,
				'py-1': size === 'md',
				'px-2': size === 'md',
				'py-2': size === 'lg',
				'px-4': size === 'lg',
				rounded: true,
			})}
			onClick={onClick}>
			{children}
		</button>
	);
}

Button.propTypes = {
	size: PropTypes.oneOf(['md', 'lg']),
	onClick: PropTypes.func,
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export default Button;
