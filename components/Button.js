import React from 'react';
import PropTypes from 'prop-types';
import cx from '../lib/cx';
import Spinner from './Spinner';

function Button({children, size = 'md', onClick = () => {}, loading = false}) {
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
	onClick: PropTypes.func,
	loading: PropTypes.bool,
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export default Button;
