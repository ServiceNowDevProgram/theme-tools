import React from 'react';
import Link from 'next/link';
import PageHeader from '../../components/PageHeader';

function printHookLink({uid, id}) {
	return (
		<Link href={`/hooks/${uid}`}>
			<a>{id}</a>
		</Link>
	);
}

function SimpleTable({columns, data}) {
	const rows = data.map((x) => {
		const cells = columns.map((c) => {
			if (c.renderer) {
				return c.renderer(x);
			}
			if (c.key) {
				return x[c.key];
			}
		});
		return {cells};
	});

	return (
		<table className="text-left table-fixed w-full border border-collapse">
			<thead>
				<tr>
					{columns.map((column) => (
						<th className="align-bottom py-4 px-6 bg-grey-lightest font-bold uppercase text-xs text-grey-dark border-b border-grey-light">
							{column.label}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{rows.map((row) => (
					<tr>
						{row.cells.map((cell) => (
							<td className="py-4 px-6 border-b border-grey-light">{cell}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default function ReleasesPage({id, added, removed, renamed}) {
	const path = [
		{id: 'releases', href: '/releases', label: 'Releases'},
		{id, href: `/releases/${id}`, label: id},
	];
	const selectedPath = id;

	return (
		<div className="p-8 max-w-screen-lg m-auto">
			<PageHeader
				label={`Release ${id}`}
				path={path}
				selectedPath={selectedPath}
			/>

			<div className="mb-6">
				<h2 className="text-xl mb-3">Added</h2>
				<ul className="list-disc">
					{added.map((hook) => (
						<li key={hook.id}>{printHookLink(hook)}</li>
					))}
				</ul>
				{!added.length && <p>No hooks were added in this release</p>}
			</div>

			<div className="mb-6">
				<h2 className="text-xl mb-3">Removed</h2>
				<ul className="list-disc">
					{removed.map((hook) => (
						<li key={hook.id}>{printHookLink(hook)}</li>
					))}
				</ul>
				{!removed.length && <p>No hooks were removed in this release</p>}
			</div>

			<div className="mb-6">
				<h2 className="text-xl mb-3">Renamed</h2>
				{!!renamed.length && (
					<SimpleTable
						columns={[
							{label: 'Previous Name', key: 'previousId'},
							{label: 'New Name', renderer: (row) => printHookLink(row)},
						]}
						data={renamed}
					/>
				)}
				{!renamed.length && <p>No hooks were renamed in this release</p>}
			</div>
		</div>
	);
}

export function getStaticPaths() {
	const {releases} = require('../../data/hooks.json');
	const paths = releases.map((x) => `/releases/${x}`);
	return {paths, fallback: false};
}

export function getStaticProps({params}) {
	const {id} = params;
	const data = require('../../data/hooks.json');
	const {added, removed, renamed} = data.migrations.byRelease[id];
	added.sort();
	removed.sort();
	renamed.sort();
	return {props: {id, added, removed, renamed}};
}
