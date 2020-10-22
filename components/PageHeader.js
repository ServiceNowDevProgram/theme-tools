import React, {Fragment} from 'react';
import Head from 'next/head';
import Breadcrumbs from './Breadcrumbs';

export default function PageHeader({label, path, selectedPath}) {
	return (
		<Fragment>
			<Head>
				<title>{label} | Theme Tools</title>
			</Head>

			<div className="mb-6">
				<Breadcrumbs items={path} selected={selectedPath} />
			</div>
			<h1 className="text-3xl mb-10">{label}</h1>
		</Fragment>
	);
}
