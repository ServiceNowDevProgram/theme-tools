import axios from 'axios';

const root = 'https://ndsthemedemo.service-now.com';

function getHeaders(username, password) {
	return {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		Authorization: 'Basic ' + btoa(`${username}:${password}`),
	};
}

export async function getThemes(params) {
	const headers = getHeaders('demo-safe', 'demo-safe');

	try {
		const themes = await axios.get(
			`${root}/api/now/table/x_snc_nds_themes_theme`,
			{params, headers}
		);
		if (themes.data) {
			return themes.data.result;
		}
	} catch (err) {
		throw new Error(err);
	}
}

export async function createTheme(data) {
	const headers = getHeaders('demo', 'SnowQ4@2020');

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
	console.log(user);
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
