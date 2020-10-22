import React, {Fragment} from 'react';
import PageHeader from '../components/PageHeader';
import Page from '../components/Page';

export default function Home() {
	const path = [];
	const selectedPath = 'home';

	return (
		<Fragment>
			<PageHeader label="Theme Tools" path={path} selectedPath={selectedPath} />
			<Page>
				<p>Click one of the links in the header above to use the tools.</p>
			</Page>
		</Fragment>
	);
}
