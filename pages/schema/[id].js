import getSchemas from '../../lib/schemas/getSchemas';
import markdownToHTML from '../../lib/node/markdownToHTML';
import * as matter from 'gray-matter';

import React, {Fragment} from 'react';
import PageHeader from '../../components/PageHeader';
import Page from '../../components/Page';
import {SchemaLink} from '../../components/Links';

export default function SchemaPage({id, page, schemas}) {
	const path = [
		{id: 'hooks', href: '/hooks', label: 'Hooks'},
		{id: 'schemas', href: '/schemas', label: 'Schemas'},
		{id: id, href: `/schema/${id}`, label: id},
	];
	const selectedPath = id;

	return (
		<Fragment>
			<PageHeader label={id} path={path} selectedPath={selectedPath} />
			<Page>
				<div className="flex flex-wrap overflow-hidden">
					<div className="w-3/4 overflow-hidden pr-5">
						<article
							className="markdown"
							dangerouslySetInnerHTML={{__html: page.html}}
						/>
					</div>

					<div className="w-1/4 overflow-hidden">
						{schemas.map((x) => (
							<p key={x.id}>
								<SchemaLink id={x.id} />
							</p>
						))}
					</div>
				</div>
			</Page>
		</Fragment>
	);
}

export function getStaticPaths() {
	const schemas = getSchemas();
	const paths = schemas.map((x) => ({
		params: {
			id: x.id,
		},
	}));
	return {paths, fallback: false};
}

export async function getStaticProps({params}) {
	const {id} = params;
	const schemas = getSchemas();
	const schema = schemas.find((x) => x.id === id);
	const {data, content} = matter(schema.rawContent);
	const html = await markdownToHTML(content);
	return {
		props: {
			id,
			schemas,
			page: {
				label: schema.label,
				html,
			},
		},
	};
}
