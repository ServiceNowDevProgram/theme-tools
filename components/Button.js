import React from 'react';
import PropTypes from 'prop-types';
import cx from '../lib/cx';
import Spinner from './Spinner';

function Button({
	children,
	size = 'md',
	variant = 'primary',
	onClick = () => {},
	loading = false,
}) {
	return (
		<button
			className={cx({
				'bg-blue-500': variant === 'primary',
				'hover:bg-blue-700': variant === 'primary',
				'text-white': variant === 'primary',
				'bg-gray-300': variant === 'secondary',
				'hover:bg-gray-400': variant === 'secondary',
				'text-black': variant === 'secondary',
				'py-1': size === 'md',
				'px-2': size === 'md',
				'py-2': size === 'lg',
				'px-4': size === 'lg',
				rounded: true,
				flex: true,
				'items-center': true,
			})}
			onClick={onClick}>
			{loading && <Spinner variant="reverse" />}
			{children}
		</button>
	);
}

Button.propTypes = {
	size: PropTypes.oneOf(['md', 'lg']),
	variant: PropTypes.oneOf(['primary', 'secondary']),
	onClick: PropTypes.func,
	loading: PropTypes.bool,
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export default Button;
