import React from 'react';
import cx from '../lib/cx';

export default function Page({children, wide = false}) {
	return (
		<div
			className={cx({
				'p-8': true,
				'pt-2': true,
				'm-auto': true,
				'max-w-screen-lg': !wide,
				'max-w-screen-xl': wide,
			})}>
			{children}
		</div>
	);
}
