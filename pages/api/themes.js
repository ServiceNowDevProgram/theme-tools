import axios from 'axios';

const root = 'https://dev59115.service-now.com';

export async function getThemes() {
	const headers = {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		Authorization: 'Basic ' + btoa('admin' + ':' + 'SnowQ4@2020'),
		'X-UserToken':
			'f45789422f506010850a1e282799b6b17e8e4027072a7c4f4174f88352e30af542f71fc3',
	};

	const params = {deleted: 'false', sysparm_limit: 100};

	try {
		const themes = await axios.get(
			`${root}/api/now/table/x_549258_nds_theme_theme`,
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
	const headers = {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		Authorization: 'Basic ' + btoa('admin' + ':' + 'SnowQ4@2020'),
		'X-UserToken':
			'f45789422f506010850a1e282799b6b17e8e4027072a7c4f4174f88352e30af542f71fc3',
	};

	try {
		const themes = await axios.post(
			`${root}/api/now/table/x_549258_nds_theme_theme`,
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
	const headers = {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		Authorization: 'Basic ' + btoa('admin' + ':' + 'SnowQ4@2020'),
		'X-UserToken':
			'f45789422f506010850a1e282799b6b17e8e4027072a7c4f4174f88352e30af542f71fc3',
	};

	try {
		const themes = await axios.put(
			`${root}/api/now/table/x_549258_nds_theme_theme/${id}`,
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
	const headers = {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		Authorization: 'Basic ' + btoa('admin' + ':' + 'SnowQ4@2020'),
		'X-UserToken':
			'f45789422f506010850a1e282799b6b17e8e4027072a7c4f4174f88352e30af542f71fc3',
	};

	const data = {deleted: true};

	try {
		const themes = await axios.put(
			`${root}/api/now/table/x_549258_nds_theme_theme/${id}`,
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
