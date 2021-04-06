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
	{label: 'Theme Generator', href: '/color-generator'},
	{label: 'Theme Generator P', href: '/color-generator-p'},
];

const ColorTools = () => {
	return (
		<Fragment>
			<PageHeader
				label="Color Tools"
				path={path}
				selectedPath={selectedPath}
				wide
			/>
			<Page wide>
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
