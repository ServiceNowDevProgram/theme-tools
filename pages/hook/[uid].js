import React, {Fragment} from 'react';
import Link from 'next/link';
import PageHeader from '../../components/PageHeader';
import Page from '../../components/Page';
import SimpleTable from '../../components/SimpleTable';
import cx from '../../lib/cx';
import {ReleaseLink, HookLink} from '../../components/Links';

function LabelValue({items}) {
	return (
		<Fragment>
			{items.map((x) => (
				<div key={x.id} className="sm:grid sm:grid-cols-4 sm:gap-4 mb-3">
					<dt className="leading-7 font-medium text-gray-500">{x.label}</dt>
					<dd
						className={cx({
							'mt-1': true,
							'leading-7': true,
							'sm:mt-0': true,
							'sm:col-span-3': true,
							'text-gray-900': true,
							['text-' + x.color]: !!x.color,
							['font-' + x.weight]: !!x.weight,
						})}>
						{x.value}
					</dd>
				</div>
			))}
		</Fragment>
	);
}

function ColorDef({namespace, subnamespace, variant, cssProperty, modifier}) {
	const output = [];
	output.push(<span className="text-gray-500">now-</span>);
	output.push(<span className="text-teal-700 font-semibold">{namespace}</span>);
	if (subnamespace.length) {
		output.push(<span className="text-gray-500">_</span>);
		output.push(
			<span className="text-pink-700 font-semibold">
				{subnamespace.join('_')}
			</span>
		);
	}
	if (variant.length) {
		output.push(<span className="text-gray-500">--</span>);
		output.push(
			<span className="text-orange-700 font-semibold">{variant.join('_')}</span>
		);
	}
	if (cssProperty.length) {
		output.push(<span className="text-gray-500">--</span>);
		output.push(
			<span className="text-green-700 font-semibold">
				{cssProperty.join('_')}
			</span>
		);
	}
	if (modifier.length) {
		output.push(<span className="text-gray-500">--</span>);
		output.push(
			<span className="text-blue-700 font-semibold">{modifier.join('_')}</span>
		);
	}

	return <div className="inline-block p-4 bg-gray-200 mt-2 mb-4">{output}</div>;
}

export default function HooksPage({uid, releases, definitions, metadata}) {
	const path = [
		{id: 'hooks', href: '/hooks', label: 'Hooks'},
		{id: uid, href: `/hook/${uid}`, label: metadata.latestId},
	];
	const selectedPath = uid;
	const latestDef = definitions[metadata.latestId];

	return (
		<Fragment>
			<PageHeader
				label={metadata.latestId}
				path={path}
				selectedPath={selectedPath}
			/>
			<Page>
				<div className="mb-10">
					<LabelValue
						items={[
							{
								id: 'added',
								label: 'Added in release',
								value: (
									<Link href={`/release/${metadata.added}`}>
										{metadata.added}
									</Link>
								),
							},
							{
								id: 'removed',
								label: 'Removed in release',
								value: metadata.removed ? (
									<Link href={`/release/${metadata.removed}`}>
										{metadata.removed}
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
								id: 'path',
								label: 'Theme Behavior Path',
								value: latestDef.path || '-',
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
					<div>
						<ColorDef {...latestDef} />
					</div>
					<LabelValue
						items={[
							{
								id: 'namespace',
								label: 'Namespace',
								value: latestDef.namespace,
								color: 'teal-700',
								weight: 'semibold',
							},
							{
								id: 'subnamespace',
								label: 'Subnamespace',
								value: latestDef.subnamespace.length
									? latestDef.subnamespace.join(' > ')
									: '-',
								color: 'pink-700',
								weight: 'semibold',
							},
							{
								id: 'variant',
								label: 'Variant',
								value: latestDef.variant.length
									? latestDef.variant.join(' + ')
									: '-',
								color: 'orange-700',
								weight: 'semibold',
							},
							{
								id: 'cssProperty',
								label: 'CSS Property',
								value: latestDef.cssProperty.length
									? latestDef.cssProperty.join(' + ')
									: '-',
								color: 'green-700',
								weight: 'semibold',
							},
							{
								id: 'modifier',
								label: 'Modifier',
								value: latestDef.modifier.length
									? latestDef.modifier.join(' + ')
									: '-',
								color: 'blue-700',
								weight: 'semibold',
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
			</Page>
		</Fragment>
	);
}

export function getStaticPaths() {
	const data = require('../../data/hooks.json');
	const uids = Object.keys(data.hooks);
	const paths = uids.map((x) => `/hook/${x}`);
	return {paths, fallback: false};
}

export function getStaticProps({params}) {
	const {uid} = params;
	const data = require('../../data/hooks.json');
	const hook = data.hooks[uid];
	return {props: {...hook}};
}
