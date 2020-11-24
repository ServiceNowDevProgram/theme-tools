import React, {Component, Fragment} from 'react';
import PageHeader from '../../components/PageHeader';
import Page from '../../components/Page';
import Select from '../../components/Select';
import Input from '../../components/Input';
import Modal from '../../components/Modal';
import dynamic from 'next/dynamic';
import moment from 'moment';
import debounce from 'lodash/debounce';
import {toast} from 'react-toastify';

import {getThemes, createTheme, updateTheme, deleteTheme} from '../api/themes';

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
		selectedThemeId: '',
		isCreateModalOpen: false,
		newThemeName: '',
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

	getThemes = async () => {
		const params = {
			deleted: 'false',
			sysparm_query: 'ORDERBYDESCsys_updated_on',
		};

		try {
			const themes = await getThemes(params);
			if (!this.state.selectedTheme.sys_id) {
				this.setState({
					themes,
					selectedTheme: themes.length ? themes[0] : {},
				});
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

	createNewTheme = async () => {
		const {newTheme} = this.state;

		if (!this.validateFields(newTheme.name, newTheme.themeJson)) return;

		const data = {
			name: newTheme.name,
			theme: JSON.stringify(JSON.parse(newTheme.themeJson), null, '  '),
		};
		toast.warn('Saving your theme.', {autoClose: 2000});
		try {
			const theme = await createTheme(data);
			this.setState(
				{
					isCreateModalOpen: false,
					newThemeName: '',
					selectedTheme: theme,
				},
				this.getThemes
			);
			toast.success('Theme saved');
		} catch (error) {
			toast.error(
				'There was an error creating your theme. Please contact #theming.'
			);
		}
	};

	updateTheme = debounce(async () => {
		const {selectedTheme, username, password} = this.state;
		if (!this.validateFields(selectedTheme.name, selectedTheme.theme)) return;

		toast.warn('Updating your theme.', {autoClose: 2000});
		try {
			const theme = await updateTheme(
				selectedTheme.sys_id,
				{
					name: selectedTheme.name,
					theme: JSON.stringify(JSON.parse(selectedTheme.theme), null, '  '),
					sys_updated_on: new Date(),
				},
				{
					username,
					password,
				}
			);

			if (theme) {
				toast.success('Theme updated');
				this.setState(
					{
						selectedTheme: theme,
					},
					this.getThemes
				);
			}
		} catch (err) {
			toast.error(
				'There was an error updating your theme. Please contact #theming.'
			);
		}
	}, 1000);

	deleteTheme = async () => {
		const {selectedTheme, username, password} = this.state;
		toast.warn('Deleting your theme.', {autoClose: 2000});
		try {
			const theme = await deleteTheme(selectedTheme.sys_id, {
				username,
				password,
			});
			if (theme) {
				this.setState(
					{
						selectedTheme: {},
						isDeleteModalOpen: false,
					},
					this.getThemes
				);
				toast.success('Your theme is deleted');
			}
		} catch (err) {
			toast.error(
				'There was an error deleting your theme. Please contact #theming.'
			);
		}
	};

	getTime = (date) => {
		const utc = moment.utc(date).toDate();
		return moment(utc).local().format('MM/DD/YY hh:mm:ss A');
	};

	renderActionButtons = () => {
		const {username, password} = this.state;
		if (!username || !password) {
			return (
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-4"
					onClick={() => this.setState({isLoginModalOpen: true})}>
					Edit
				</button>
			);
		} else {
			return (
				<Fragment>
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-4"
						onClick={() => this.updateTheme()}>
						Update
					</button>
					<button
						className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none ml-1"
						onClick={() => this.setState({isDeleteModalOpen: true})}>
						Delete
					</button>
				</Fragment>
			);
		}
	};

	render() {
		const {
			themes,
			selectedTheme,
			username,
			password,
			isLoginModalOpen,
			newTheme,
		} = this.state;

		return (
			<Fragment>
				<PageHeader label="Themes" path={path} selectedPath={selectedPath} />
				<Page>
					<div className="flex justify-between mb-8">
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
							onClick={() => this.setState({isCreateModalOpen: true})}>
							Create New
						</button>
						<div className="flex">
							{themes.length ? (
								<Fragment>
									<Select
										layout="horizontal"
										label="Themes"
										items={themes.map((x) => ({id: x.sys_id, label: x.name}))}
										selected={selectedTheme.sys_id}
										onSelect={(id) =>
											this.setState({
												selectedTheme: this.state.themes.filter(
													(theme) => theme.sys_id === id
												)[0],
											})
										}
									/>
									{this.renderActionButtons()}
								</Fragment>
							) : null}
						</div>
					</div>
					{themes.length ? (
						<Fragment>
							{username && password ? (
								<div className="flex justify-end">
									<small>
										<a
											href="#"
											onClick={() => this.setState({isLoginModalOpen: true})}>
											Change Credentials
										</a>
									</small>
								</div>
							) : null}
							<div className="flex justify-end mb-8">
								<small>
									Last saved:
									{this.getTime(selectedTheme.sys_updated_on)}
								</small>
							</div>

							<Input
								key={selectedTheme.sys_id}
								type="text"
								name="name"
								label="Theme name"
								value={selectedTheme.name}
								onChange={(value) =>
									this.setState({
										selectedTheme: {...selectedTheme, name: value},
									})
								}
								placeholder="name"
							/>
							{CodeMirror && selectedTheme && (
								<CodeMirror
									className="mt-8"
									value={selectedTheme.theme}
									options={{
										mode: 'application/json',
										theme: 'material',
										lineNumbers: true,
										readOnly: Boolean(!username || !password),
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

				<Modal open={isLoginModalOpen}>
					<form>
						<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
							<div className="sm:flex sm:items-start">
								<div className="mt-3 text-center sm:mt-0 sm:text-left flex-1">
									<h3
										className="text-lg leading-6 font-medium text-gray-900"
										id="modal-headline">
										Enter Credentials
									</h3>
									<div className="mt-2">
										<Input
											type="text"
											label="username"
											name="username"
											value={this.state.username}
											onChange={(value) => this.setState({username: value})}
											placeholder="username"
										/>
									</div>
									<div className="mt-2">
										<Input
											type="password"
											label="password"
											name="password"
											value={this.state.password}
											onChange={(value) => this.setState({password: value})}
											placeholder="password"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
							<span className="flex w-full rounded-md shadow-sm sm:w-auto">
								<button
									onClick={() => this.setState({isLoginModalOpen: false})}
									type="button"
									className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
									Submit
								</button>
							</span>
							<span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto mr-3">
								<button
									type="submit"
									onClick={() =>
										this.setState({
											username: '',
											password: '',
											isLoginModalOpen: false,
										})
									}
									type="button"
									className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
									Cancel
								</button>
							</span>
						</div>
					</form>
				</Modal>

				<Modal open={this.state.isCreateModalOpen}>
					<form>
						<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
							<div className="sm:flex sm:items-start">
								<div className="mt-3 text-center sm:mt-0 sm:text-left flex-1">
									<h3
										className="text-lg leading-6 font-medium text-gray-900"
										id="modal-headline">
										Create new theme
									</h3>
									<div className="mt-4">
										<Input
											type="text"
											label="Name"
											name="name"
											value={newTheme.name}
											onChange={(value) =>
												this.setState({newTheme: {...newTheme, name: value}})
											}
											placeholder="name"
										/>
									</div>
									<CodeMirror
										className="mt-3"
										value={newTheme.themeJson}
										options={{
											mode: 'application/json',
											theme: 'material',
											lineNumbers: true,
											gutters: ['CodeMirror-linenumbers', 'codelinemarkers'],
										}}
										smartIndent
										onBeforeChange={(editor, data, value) => {
											this.setState({
												newTheme: {...newTheme, themeJson: value},
											});
										}}
									/>
								</div>
							</div>
						</div>
						<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
							<span className="flex w-full rounded-md shadow-sm sm:w-auto">
								<button
									onClick={this.createNewTheme}
									type="button"
									className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
									Create
								</button>
							</span>
							<span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto mr-3">
								<button
									type="submit"
									onClick={() => this.setState({isCreateModalOpen: false})}
									type="button"
									className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
									Cancel
								</button>
							</span>
						</div>
					</form>
				</Modal>

				<Modal open={this.state.isDeleteModalOpen}>
					<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
						<div className="sm:flex sm:items-start">
							<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
								<h3
									className="text-lg leading-6 font-medium text-gray-900"
									id="modal-headline">
									Are you sure you want to delete this theme?
								</h3>
							</div>
						</div>
					</div>
					<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
						<span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
							<button
								onClick={this.deleteTheme}
								type="button"
								className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5">
								Delete
							</button>
						</span>
						<span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
							<button
								onClick={() => this.setState({isDeleteModalOpen: false})}
								type="button"
								className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
								Cancel
							</button>
						</span>
					</div>
				</Modal>
			</Fragment>
		);
	}
}

export default Themes;
