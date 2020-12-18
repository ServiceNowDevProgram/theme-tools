import React, {Fragment, useState, useEffect} from 'react';
import Page from '../../components/Page';
import PageHeader from '../../components/PageHeader';
import Link from 'next/link';

const path = [{id: 'color-tools', href: '/color-tools', label: 'Color Tools'}];
const selectedPath = 'color-tools';

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
					<li>
						<Link href={`/color-range`}>
							<a>Color Range</a>
						</Link>
					</li>
					<li>
						<Link href={`/complimentary-colors`}>
							<a>Complimentary Colors</a>
						</Link>
					</li>
				</ul>
			</Page>
		</Fragment>
	);
};

export default ColorTools;
