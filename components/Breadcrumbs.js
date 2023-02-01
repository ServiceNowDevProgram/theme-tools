import React, {Fragment} from 'react';
import Link from 'next/link';
import cx from '../lib/cx';

export default function Breadcrumbs({items, selected}) {
	return (
		<div className="text-sm text-gray-600">
			{items.map((x, i) => (
				<Fragment key={x.id}>
					<Link
						key={x.id}
						href={x.href}
						className={cx({
							'mr-2': true,
							'text-gray-800': selected === x.id,
							'no-underline': true,
						})}>
						{x.label}
					</Link>
					{i !== items.length - 1 && <span className="mr-2"></span>}
				</Fragment>
			))}
		</div>
	);
}
