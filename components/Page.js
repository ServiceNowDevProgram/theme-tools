import React from 'react';
import cx from '../lib/cx';

export default function Page({children, size = 'lg'}) {
	return (
		<div
			className={cx({
				'p-8': true,
				'pt-2': true,
				'm-auto': true,
				[`max-w-screen-${size}`]: true,
			})}>
			{children}
		</div>
	);
}
