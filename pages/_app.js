import React, {Fragment} from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/index.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'tippy.js/dist/tippy.css';

function MyApp({Component, pageProps}) {
	return (
		<Fragment>
			<div
				style={{
					backgroundColor: '#82c9f8',
					color: '#181a1d',
					padding: '8px',
					textAlign: 'center',
				}}>
				<strong>Did you know?</strong> You can quickly create, edit, preview and
				apply themes to your experiences with Theme Builder, a new application
				available now in the ServiceNow Store.{' '}
				<a
					href="https://store.servicenow.com/sn_appstore_store.do#!/store/application/c8d18ffa2b695cec36b671673e27938d"
					target="_blank">
					Check it out
				</a>
			</div>
			<Component {...pageProps} />
			<ToastContainer />
		</Fragment>
	);
}

export default MyApp;
