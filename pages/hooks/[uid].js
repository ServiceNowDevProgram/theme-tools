import React, {Fragment} from 'react';
import Link from 'next/link';
import PageHeader from '../../components/PageHeader';
import SimpleTable from '../../components/SimpleTable';
import {ReleaseLink, HookLink} from '../../components/Links';

function LabelValue({items}) {
	return (
		<Fragment>
			{items.map((x) => (
				<div key={x.id} class="sm:grid sm:grid-cols-4 sm:gap-4 mb-3">
					<dt className="leading-7 font-medium text-gray-500">{x.label}</dt>
					<dd className="mt-1 leading-7 text-gray-900 sm:mt-0 sm:col-span-3">
						{x.value}
					</dd>
				</div>
			))}
		</Fragment>
	);
}

export default function HooksPage({uid, releases, definitions, metadata}) {
	const path = [
		{id: 'hooks', href: '/hooks', label: 'Hooks'},
		{id: uid, href: `/hooks/${uid}`, label: metadata.latestId},
	];
	const selectedPath = uid;
	const latestDef = definitions[metadata.latestId];

	return (
		<div className="p-8 max-w-screen-lg m-auto">
			<PageHeader
				label={metadata.latestId}
				path={path}
				selectedPath={selectedPath}
			/>

			<div className="mb-10">
				<LabelValue
					items={[
						{
							id: 'added',
							label: 'Added in release',
							value: (
								<Link href={`/releases/${metadata.added}`}>
									<a>{metadata.added}</a>
								</Link>
							),
						},
						{
							id: 'removed',
							label: 'Removed in release',
							value: metadata.removed ? (
								<Link href={`/releases/${metadata.removed}`}>
									<a>{metadata.removed}</a>
								</Link>
							) : (
								'N/A, still active and not removed'
							),
						},
						{
							id: 'customProperty',
							label: 'CSS Custom Property',
							value: latestDef.customProperty || '-',
						},
						{
							id: 'scssVariable',
							label: 'SCSS Variable',
							value: latestDef.scssVariable || '-',
						},
						{
							id: 'fallbacks',
							label: 'Fallbacks',
							value: latestDef.fallbacks.length
								? latestDef.fallbacks.join(' > ')
								: '-',
						},
						{
							id: 'defaultValue',
							label: 'Default Value',
							value: latestDef.defaultValue || '-',
						},
						{
							id: 'schema',
							label: 'Data Type',
							value: latestDef.schema || '-',
						},
					]}
				/>
			</div>

			<div className="mb-10">
				<h2 className="text-xl mb-4">Definition</h2>
				<LabelValue
					items={[
						{
							id: 'namespace',
							label: 'Namespace',
							value: latestDef.namespace,
						},
						{
							id: 'subnamespace',
							label: 'Subnamespace',
							value: latestDef.subnamespace.length
								? latestDef.subnamespace.join(' > ')
								: '-',
						},
						{
							id: 'variant',
							label: 'Variant',
							value: latestDef.variant.length
								? latestDef.variant.join(' + ')
								: '-',
						},
						{
							id: 'cssProperty',
							label: 'CSS Property',
							value: latestDef.cssProperty.length
								? latestDef.cssProperty.join(' + ')
								: '-',
						},
						{
							id: 'modifier',
							label: 'Modifier',
							value: latestDef.modifier.length
								? latestDef.modifier.join(' + ')
								: '-',
						},
					]}
				/>
			</div>

			<div className="mb-10">
				<h2 className="text-xl mb-4">Renames</h2>
				{!!metadata.renames.length && (
					<SimpleTable
						columns={[
							{
								label: 'Version',
								renderer: (row) => <ReleaseLink id={row.release} />,
							},
							{label: 'Previous Name', key: 'previousId'},
							{
								label: 'New Name',
								renderer: (row) => <HookLink id={row.id} uid={row.uid} />,
							},
						]}
						data={metadata.renames}
					/>
				)}
				{!metadata.renames.length && (
					<p>No hooks were renamed in this release</p>
				)}
			</div>
		</div>
	);
}

export function getStaticPaths() {
	const data = require('../../data/hooks.json');
	const uids = Object.keys(data.hooks);
	const paths = uids.map((x) => `/hooks/${x}`);
	return {paths, fallback: false};
}

export function getStaticProps({params}) {
	const {uid} = params;
	const data = require('../../data/hooks.json');
	const hook = data.hooks[uid];
	return {props: {...hook}};
}
