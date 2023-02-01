import axios from 'axios';
import POLARIS from '../../data/polaris.json';
import POLARISDARK from '../../data/polaris-dark.json';
import INITIAL from '../../data/initial.json';

const root = 'https://ndsthemedemo.service-now.com';

function getHeaders(username, password) {
	return {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		Authorization: 'Basic ' + btoa(`${username}:${password}`),
	};
}

// export async function getThemes(params) {
// 	const headers = getHeaders('demo-safe', 'demo-safe');

// 	try {
// 		const themes = await axios.get(
// 			`${root}/api/now/table/x_snc_nds_themes_theme`,
// 			{params, headers}
// 		);
// 		if (themes.data) {
// 			return themes.data.result;
// 		}
// 	} catch (err) {
// 		throw new Error(err);
// 	}
// }

export async function getThemes(params) {
	console.log(POLARIS);
	return [
		{
			name: 'Initial',
			sys_id: 'initial',
			themeJSON: INITIAL,
		},
		{
			name: 'Polaris',
			sys_id: 'polaris',
			themeJSON: POLARIS,
		},
		{
			name: 'Polaris Dark',
			sys_id: 'polaris-dark',
			themeJSON: POLARISDARK,
		},
	];
}

export async function createTheme(data) {
	const headers = getHeaders('demo', 'Now2021@Q1');

	try {
		const themes = await axios.post(
			`${root}/api/now/table/x_snc_nds_themes_theme`,
			data,
			{headers}
		);
		if (themes.data) {
			return themes.data.result;
		}
	} catch (err) {
		throw new Error(err);
	}
}

export async function updateTheme(id, data, user) {
	const headers = getHeaders(user.username, user.password);

	try {
		const themes = await axios.put(
			`${root}/api/now/table/x_snc_nds_themes_theme/${id}`,
			data,
			{headers}
		);
		if (themes.data) {
			return themes.data.result;
		}
	} catch (err) {
		throw new Error(err);
	}
}

export async function deleteTheme(id, user) {
	const headers = getHeaders(user.username, user.password);

	const data = {deleted: true};

	try {
		const themes = await axios.put(
			`${root}/api/now/table/x_snc_nds_themes_theme/${id}`,
			data,
			{headers}
		);
		if (themes.data) {
			return themes.data.result;
		}
	} catch (err) {
		throw new Error(err);
	}
}
