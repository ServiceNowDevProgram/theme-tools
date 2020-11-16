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
			<Component {...pageProps} />
			<ToastContainer />
		</Fragment>
	);
}

export default MyApp;
