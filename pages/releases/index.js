import React, {Fragment} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PageHeader from '../../components/PageHeader';
import Page from '../../components/Page';

export default function ReleasesIndex({releases}) {
	const path = [{id: 'releases', href: '/releases', label: 'Releases'}];
	const selectedPath = 'releases';

	return (
		<Fragment>
			<PageHeader label="Releases" path={path} selectedPath={selectedPath} />
			<Page>
				<ul className="list-disc">
					{releases.map((x) => (
						<li key={x}>
							<Link href={`/release/${x}`}>
								<a>{x}</a>
							</Link>
						</li>
					))}
				</ul>
			</Page>
		</Fragment>
	);
}

export function getStaticProps() {
	const data = require('../../data/hooks.json');
	const releases = [...data.releases].reverse();
	return {props: {releases}};
}
