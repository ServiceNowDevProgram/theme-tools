import React, {Fragment} from 'react';
import Page from '../../components/Page';
import PageHeader from '../../components/PageHeader';
import Link from 'next/link';

const path = [{id: 'colors', href: '/colors', label: 'Colors'}];
const selectedPath = 'colors';

const links = [
	{label: 'Color Range', href: '/color-range'},
	{label: 'Complimentary Colors', href: '/complimentary-colors'},
	{label: 'Contrast Checker', href: '/contrast-checker'},
	{label: 'Color Generator', href: '/color-generator'},
	{label: 'Color Generator P', href: '/color-generator-p'},
	{label: 'Color Generator Advanced (BETA)', href: '/color-generator-advanced'},
];

const ColorTools = () => {
	return (
		<Fragment>
			<PageHeader
				label="Color Tools"
				path={path}
				selectedPath={selectedPath}
				size="xl"
			/>
			<Page size="xl">
				<ul className="list-disc">
					{links.map((link) => {
						return (
							<li key={link.label}>
								<Link href={link.href}>
									<a>{link.label}</a>
								</Link>
							</li>
						);
					})}
				</ul>
			</Page>
		</Fragment>
	);
};

export default ColorTools;
