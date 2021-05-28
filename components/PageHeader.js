import React, {Fragment} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumbs from './Breadcrumbs';
import cx from '../lib/cx';

function NavLink({label, href}) {
	return (
		<Link href={href}>
			<a className="no-underline text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out mr-4">
				{label}
			</a>
		</Link>
	);
}

export default function PageHeader({label, path, selectedPath, size = 'lg'}) {
	return (
		<Fragment>
			<Head>
				<title>{label} | Theme Tools</title>
			</Head>

			<div className="bg-gray-900 p-4 text-sm uppercase">
				<NavLink href="/hooks" label="Hooks" />
				<NavLink href="/releases" label="Releases" />
				<NavLink href="/validator" label="Validator" />
				<NavLink href="/decoder" label="Decoder" />
				<NavLink href="/colors" label="Colors" />
				<NavLink href="/themes" label="Themes" />
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
					[`max-w-screen-${size}`]: true,
				})}>
				<h1 className="text-3xl">{label}</h1>
			</div>
		</Fragment>
	);
}
