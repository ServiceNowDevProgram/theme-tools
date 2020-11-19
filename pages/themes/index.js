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

import {getThemes, newTheme, updateTheme, deleteTheme} from '../api/themes';

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
		isModalOpen: false,
		newThemeName: '',
		selectedTheme: {},
		themeJson: {},
		editor: null,
		isDeleteModalOpen: false,
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
		} catch {}
	};

	createNewTheme = async () => {
		const data = {name: this.state.newThemeName, theme: {}};
		try {
			const theme = await newTheme(data);
			this.setState(
				{
					isModalOpen: false,
					newThemeName: '',
					selectedTheme: theme,
				},
				this.getThemes
			);
		} catch {}
	};

	updateTheme = debounce(async () => {
		const {selectedTheme} = this.state;
		try {
			const theme = await updateTheme(selectedTheme.sys_id, {
				name: selectedTheme.name,
				theme: JSON.stringify(JSON.parse(selectedTheme.theme), null, '  '),
				sys_updated_on: new Date(),
			});

			if (theme) {
				toast.success('Theme updated');
				this.setState(
					{
						selectedTheme: theme,
					},
					this.getThemes
				);
			}
		} catch {}
	}, 1000);

	deleteTheme = async () => {
		const {selectedTheme} = this.state;
		try {
			const theme = await deleteTheme(selectedTheme.sys_id);
			if (theme) {
				this.setState(
					{
						selectedTheme: {},
						isDeleteModalOpen: false,
					},
					this.getThemes
				);
			}
		} catch {}
	};

	getTime = (date) => {
		const utc = moment.utc(date).toDate();
		return moment(utc).local().format('MM/DD/YY hh:mm:ss A');
	};

	render() {
		const {themes, selectedTheme} = this.state;

		return (
			<Fragment>
				<PageHeader label="Themes" path={path} selectedPath={selectedPath} />
				<Page>
					<div className="flex justify-between mb-8">
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
							onClick={() => this.setState({isModalOpen: true})}>
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
							) : null}
						</div>
					</div>
					{themes.length ? (
						<Fragment>
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

				<Modal open={this.state.isModalOpen}>
					<form>
						<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
							<div className="sm:flex sm:items-start">
								<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left flex-1">
									<h3
										className="text-lg leading-6 font-medium text-gray-900"
										id="modal-headline">
										Create new theme
									</h3>
									<div className="mt-2">
										<Input
											type="text"
											name="name"
											value={this.state.newThemeName}
											onChange={(value) => this.setState({newThemeName: value})}
											placeholder="name"
										/>
									</div>
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
							<span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
								<button
									type="submit"
									onClick={() => this.setState({isModalOpen: false})}
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
