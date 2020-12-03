import {toast} from 'react-toastify';

export function copyText(data) {
	const listener = (e) => {
		e.clipboardData.setData('text/plain', data);
		e.preventDefault();
	};
	document.addEventListener('copy', listener);
	document.execCommand('copy');
	document.removeEventListener('copy', listener);
}

export function copyObject(obj = {}) {
	const string = JSON.stringify(obj, null, '  ');
	copyText(string);
	console.log('JSON copied to clipboard: ', string);
	toast.success('JSON copied to clipboard');
}
