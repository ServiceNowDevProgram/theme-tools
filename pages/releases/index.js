import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ReleasesIndex({releases}) {
	return (
		<div className="p-8 max-w-screen-lg m-auto">
			<Head>
				<title>Releases | Theme Tools</title>
			</Head>

			<h1 className="text-3xl mb-6">Releases</h1>
			<ul className="list-disc">
				{releases.map((x) => (
					<li key={x}>
						<Link href={`/releases/${x}`}>
							<a>{x}</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export function getStaticProps() {
	const data = require('../../data/hooks.json');
	const releases = [...data.releases].reverse();
	return {props: {releases}};
}
