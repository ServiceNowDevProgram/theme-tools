import axios from 'axios';

const root = 'https://ndsthemedemo.service-now.com';

function getHeaders() {
	return {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		Authorization: 'Basic ' + btoa('demo' + ':' + 'SnowQ4@2020'),
	};
}

export async function getThemes(params) {
	const headers = getHeaders();

	try {
		const themes = await axios.get(
			`${root}/api/now/table/x_snc_nds_themes_theme`,
			{params, headers}
		);
		if (themes.data) {
			return themes.data.result;
		}
	} catch (err) {
		return err;
	}
}

export async function newTheme(data) {
	const headers = getHeaders();

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
		return err;
	}
}

export async function updateTheme(id, data) {
	const headers = getHeaders();

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
		return err;
	}
}

export async function deleteTheme(id) {
	const headers = getHeaders();

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
		return err;
	}
}
