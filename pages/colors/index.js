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
	// commenting this page out for now until i know for sure we dont need this anymore
	// {label: 'Color Generator', href: '/color-generator'},
	// {label: 'Color Generator', href: '/color-generator-p'},
	{label: 'Color Generator Advanced', href: '/color-generator-advanced'},
	{label: 'Compare Color JSON', href: '/compare-colors'},
	{label: 'Neutrals Checker', href: '/color-neutrals-checker'},
	// {label: 'Nav Formula', href: '/nav-formula'},
	{label: 'Color Generator Algo V1', href: '/color-generator-algo-v1'},
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
								<Link href={link.href}>{link.label}</Link>
							</li>
						);
					})}
				</ul>
			</Page>
		</Fragment>
	);
};

export default ColorTools;
