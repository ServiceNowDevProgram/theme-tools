import getSchemas from '../../lib/schemas/getSchemas';

import React, {Fragment} from 'react';
import PageHeader from '../../components/PageHeader';
import Page from '../../components/Page';
import Link from 'next/link';

export default function SchemasIndex({schemas}) {
	const path = [
		{id: 'hooks', href: '/hooks', label: 'Hooks'},
		{id: 'schemas', href: '/schemas', label: 'Schemas'},
	];
	const selectedPath = 'schemas';

	return (
		<Fragment>
			<PageHeader label="Schemas" path={path} selectedPath={selectedPath} />
			<Page>
				<ul className="list-disc">
					{schemas.map((x) => (
						<li key={x.id}>
							<Link href={`/schema/${x.id}`}>
								<a>{x.id}</a>
							</Link>
						</li>
					))}
				</ul>
			</Page>
		</Fragment>
	);
}

export function getStaticProps() {
	const schemas = getSchemas();
	return {props: {schemas}};
}
