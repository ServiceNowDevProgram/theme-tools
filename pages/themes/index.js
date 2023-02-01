import React, {Component, Fragment} from 'react';
import PageHeader from '../../components/PageHeader';
import Page from '../../components/Page';
import Select from '../../components/Select';
import dynamic from 'next/dynamic';
import {toast} from 'react-toastify';

import {getThemes} from '../api/themes';

const path = [{id: 'themes', href: '/themes', label: 'Themes'}];
const selectedPath = 'themes';

const CodeMirror = dynamic(
	async () => {
		const mod = await import('react-codemirror2');
		await import('codemirror/mode/javascript/javascript');
		return mod.Controlled;
	},
	{ssr: false}
);

class Themes extends Component {
	state = {
		themes: [],
		isCreateModalOpen: false,
		newTheme: {name: '', themeJson: ''},
		selectedTheme: {},
		themeJson: {},
		editor: null,
		isDeleteModalOpen: false,
		username: '',
		password: '',
		isLoginModalOpen: false,
	};

	async componentDidMount() {
		this.getThemes();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.selectedTheme !== this.state.selectedTheme) {
			const searchParams = new URLSearchParams();
			searchParams.set('id', this.state.selectedTheme.sys_id);

			let newurl =
				window.location.protocol +
				'//' +
				window.location.host +
				window.location.pathname +
				'?' +
				searchParams.toString();
			window.history.replaceState({path: newurl}, '', newurl);
		}
	}

	getThemes = async () => {
		const urlParams = new URLSearchParams(window.location.search);
		const themeId = urlParams.get('id');

		const params = {
			deleted: 'false',
			sysparm_query: 'ORDERBYname',
		};

		try {
			const themes = await getThemes(params);
			if (!this.state.selectedTheme.sys_id) {
				if (themeId && themes.length) {
					this.setState({
						themes,
						selectedTheme:
							themes.filter((theme) => theme.sys_id === themeId)[0] ||
							themes[0],
					});
				} else {
					this.setState({
						themes,
						selectedTheme: themes.length ? themes[0] : {},
					});
				}
			} else {
				this.setState({
					themes,
				});
			}
		} catch (err) {
			toast.error(
				'There was an error getting themes. Please contact #theming.'
			);
		}
	};

	isJsonString = (str) => {
		try {
			JSON.parse(str);
		} catch (e) {
			return false;
		}

		return true;
	};

	validateFields = (name, theme) => {
		if (!name || !theme) {
			toast.warn('Please insert a name or theme json');
			return false;
		} else if (!this.isJsonString(theme)) {
			toast.warn(
				'Please check your theme json. You can use the Validator to validate it.'
			);
			return false;
		} else {
			return true;
		}
	};

	onThemeSelect = (id) => {
		this.setState({
			selectedTheme: this.state.themes.filter(
				(theme) => theme.sys_id === id
			)[0],
		});
	};

	render() {
		const {themes, selectedTheme} = this.state;

		return (
			<Fragment>
				<PageHeader label="Themes" path={path} selectedPath={selectedPath} />
				<Page>
					<div className="flex justify-between mb-8">
						<div className="flex">
							{themes.length ? (
								<Fragment>
									<Select
										layout="horizontal"
										label="Themes"
										items={themes.map((x) => ({id: x.sys_id, label: x.name}))}
										selected={selectedTheme.sys_id}
										onSelect={this.onThemeSelect}
									/>
								</Fragment>
							) : null}
						</div>
					</div>
					{themes.length ? (
						<Fragment>
							{CodeMirror && selectedTheme && (
								<CodeMirror
									className="mt-8"
									value={JSON.stringify(selectedTheme.themeJSON, null, 4)}
									options={{
										mode: 'application/json',
										theme: 'material',
										lineNumbers: true,
										readOnly: false,
										gutters: ['CodeMirror-linenumbers', 'codelinemarkers'],
									}}
									smartIndent
									onBeforeChange={(editor, data, value) => {
										this.setState({
											selectedTheme: {...selectedTheme, theme: value},
										});
									}}
								/>
							)}
						</Fragment>
					) : null}
				</Page>
			</Fragment>
		);
	}
}

export default Themes;
