import {toast} from 'react-toastify';

export function copyObject(obj = {}) {
	const aux = document.createElement('input');
	aux.setAttribute('value', JSON.stringify(obj, null, 4));
	document.body.appendChild(aux);
	aux.select();
	document.execCommand('copy');
	document.body.removeChild(aux);
	console.log('copied', JSON.stringify(obj, null, 4));
	toast.success('JSON copied to clipboard');
}
