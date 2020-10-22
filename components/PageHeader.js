import React, {Fragment} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumbs from './Breadcrumbs';
import cx from '../lib/cx';

export default function PageHeader({label, path, selectedPath, wide = false}) {
	return (
		<Fragment>
			<Head>
				<title>{label} | Theme Tools</title>
			</Head>

			<div className="bg-gray-900 p-4 text-sm uppercase">
				<Link href="/hooks">
					<a className="no-underline text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out mr-4">
						Hooks
					</a>
				</Link>
				<Link href="/releases">
					<a className="no-underline text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">
						Releases
					</a>
				</Link>
			</div>

			<div className="mb-6 bg-gray-300 p-4 text-sm">
				<Breadcrumbs
					items={[{id: 'home', label: 'Home', href: '/'}, ...path]}
					selected={selectedPath}
				/>
			</div>

			<div
				className={cx({
					'p-8': true,
					'pt-2': true,
					'm-auto': true,
					'max-w-screen-lg': !wide,
					'max-w-screen-xl': wide,
				})}>
				<h1 className="text-3xl">{label}</h1>
			</div>
		</Fragment>
	);
}
