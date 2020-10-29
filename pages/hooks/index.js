import dynamic from 'next/dynamic'; // don't delete this, its needed for no ssr
import React, {Fragment, useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import get from 'lodash/get';
import isString from 'lodash/isString';
import isUndefined from 'lodash/isUndefined';
import kebabCase from 'lodash/kebabCase';

import {isValidHexString, isValidRgbString} from '../../lib/color';

import PageHeader from '../../components/PageHeader';
import Page from '../../components/Page';
import {HookLink} from '../../components/Links';
import SimpleTable from '../../components/SimpleTable';
import Input from '../../components/Input';
import Select from '../../components/Select';

import exportData from '../../data/hooks.json';

const rawData = {...exportData};

// import rawColors from './data/colors.json';
// import rawCategories from './data/categories.json';
// import rawComponents from './data/components.json';

// const colors = rawColors.map((x) => {
// 	if (x.fallbacks.length) {
// 		return {...x, subclass: 'system_color_derived'};
// 	} else {
// 		return {...x, subclass: 'system_color_generic'};
// 	}
// });
// const categories = rawCategories.map((x) => {
// 	const category = x.scssVariable.replace(/^\$now\-/, '').split('--')[0];
// 	return {...x, subclass: `category_${category}`};
// });
// const components = rawComponents.map((x) => {
// 	const component = x.scssVariable.replace(/^\$now\-/, '').split('--')[0];
// 	return {...x, subclass: `component_${component}`};
// });
// const data = [...colors, ...categories, ...components];

const NoSsr = (props) => <React.Fragment>{props.children}</React.Fragment>;

function isShallowEqual(a, b) {
	for (const k in a) {
		if (a[k] !== b[k]) return false;
	}
	for (const k in b) {
		if (a[k] !== b[k]) return false;
	}
	return true;
}

function defined(object) {
	const newObject = {};
	for (const k in object) {
		if (object.hasOwnProperty(k) && !isUndefined(object[k])) {
			newObject[k] = object[k];
		}
	}
	return newObject;
}

function getValue(column, row) {
	const {accessor} = column;
	if (isString(accessor)) {
		return get(row, accessor);
	}
}

function getOptions(column, data) {
	const options = [];
	for (const item of data) {
		const value = getValue(column, item);
		if (!options.includes(value)) options.push(value);
	}
	options.sort();
	return options;
}

function getColumn(columns, id) {
	return columns.find((x) => x.id === id);
}

function SelectFilter({label, value, setValue, options, hideAll = false}) {
	return (
		<Select
			layout="horizontal"
			label={label}
			items={options.map((x) => ({id: x, label: x}))}
			selected={value}
			onSelect={(id) => setValue(id || undefined)}
			unsetLabel={hideAll ? undefined : 'All'}
		/>
	);
}

function TextFilter({label, value, setValue, placeholder}) {
	return (
		<Input
			type="text"
			name={kebabCase('Filter' + label)}
			label={label}
			value={value}
			onChange={(value) => setValue(value)}
			placeholder={placeholder}
			layout="horizontal"
		/>
	);
}

// function ExistsColumnFilter({column: {filterValue = false, setFilter}}) {
// 	return (
// 		<label className="block text-gray-700  flex items-center h-6">
// 			<input
// 				className="mr-2 leading-tight"
// 				type="checkbox"
// 				checked={filterValue}
// 				onChange={(e) => {
// 					setFilter(!filterValue);
// 				}}
// 			/>
// 			<span className="text-xs font-normal">Exists</span>
// 		</label>
// 	);
// }

function getClass(def) {
	const {namespace: ns, subnamespace: subns, variant: variants} = def;
	if (ns === 'color') {
		if (subns[0] === 'presence') {
			return ['System', 'Color', 'Presence'];
		}

		if (subns[0] === 'alert') {
			return ['System', 'Color', 'Alert'];
		}

		if (subns[0] === 'grouped') {
			return ['System', 'Color', 'Grouped'];
		}

		const DERIVED = ['background', 'divider', 'text', 'border', 'focus-ring'];
		if (DERIVED.includes(subns[0])) {
			return ['System', 'Color', 'Derived'];
		}

		const FRAMEWORK = ['surface', 'chrome', 'brand'];
		if (
			FRAMEWORK.includes(subns[0]) ||
			(subns[0] === undefined &&
				isString(variants[0]) &&
				variants[0].startsWith('brand-'))
		) {
			return ['System', 'Color', 'Framework'];
		}

		const BASE = [
			'neutral',
			'primary',
			'secondary',
			'interactive',
			'link',
			'focus',
		];
		if (
			subns[0] === 'selection' ||
			(subns[0] === undefined &&
				isString(variants[0]) &&
				BASE.includes(variants[0].split('-')[0]))
		) {
			return ['System', 'Color', 'Base'];
		}
	}

	if (ns === 'color-datavis') {
		return ['System', 'Color', 'Datavis'];
	}

	return ['-'];
}

function getHooksByRelease(data, release) {
	const hooks = [];
	for (const [id, uid] of Object.entries(data.hooksByRelease[release])) {
		const def = data.hooks[uid].definitions[id];
		const cl = getClass(def);
		hooks.push({...def, id, uid, class: cl[0], subclass: cl.join('_')});
	}
	return hooks;
}

function filterData(filterDefs, filters, rows, columns, selectedRelease) {
	const filteredData = [];
	for (const row of rows) {
		let remove = false;
		for (const [filterId, filterDef] of Object.entries(filterDefs)) {
			const filterValue = get(filters, filterId);
			if (isUndefined(filterValue)) {
				continue;
			}
			if (!filterDef.filter({columns, row, filterValue})) {
				remove = true;
				break;
			}
		}
		if (!remove) filteredData.push(row);
	}
	return filteredData;
}

const FILTER_DEFS = {
	search: {
		filter: ({columns, row, filterValue}) => {
			const scssVariable =
				getValue(getColumn(columns, 'scssVariable'), row) || '';
			const customProperty =
				getValue(getColumn(columns, 'customProperty'), row) || '';
			return (
				scssVariable.indexOf(filterValue) !== -1 ||
				customProperty.indexOf(filterValue) !== -1
			);
		},
	},
	namespace: {
		filter: ({columns, row, filterValue}) => {
			const value = getValue(getColumn(columns, 'namespace'), row);
			return value === filterValue;
		},
	},
	// class: {
	// 	filter: ({columns, row, filterValue}) => {
	// 		const value = getValue(getColumn(columns, 'class'), row);
	// 		return value === filterValue;
	// 	},
	// },
	// subclass: {
	// 	filter: ({columns, row, filterValue}) => {
	// 		const value = getValue(getColumn(columns, 'subclass'), row);
	// 		return value === filterValue;
	// 	},
	// },
};

function useDebounce(value, delay) {
	// State and setters for debounced value
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(
		() => {
			// Update debounced value after delay
			const handler = setTimeout(() => {
				setDebouncedValue(value);
			}, delay);

			// Cancel the timeout if value changes (also on delay change or unmount)
			// This is how we prevent debounced value from updating if value is changed ...
			// .. within the delay period. Timeout gets cleared and restarted.
			return () => {
				clearTimeout(handler);
			};
		},
		[value, delay] // Only re-call effect if value or delay changes
	);

	return debouncedValue;
}

export default function HooksPage() {
	const router = useRouter();
	const [filters, setFilters] = useState({});
	const [selectedRelease, setSelectedRelease] = useState(
		exportData.releases.slice(-1)[0]
	);
	const debouncedSearchTerm = useDebounce(filters.search, 500);

	const [queryExtracted, setQueryExtracted] = useState(false);
	useEffect(() => {
		if (!isShallowEqual(router.query, filters)) {
			setFilters(router.query);
			if (!setQueryExtracted) {
				setQueryExtracted(true);
			}
		}
	}, [router.query]);

	useEffect(() => {
		if (!isShallowEqual(router.query, filters)) {
			router.push({
				pathname: router.pathname,
				query: defined(filters),
			});
		}
	}, [filters.namespace, debouncedSearchTerm]);

	const data = React.useMemo(
		() => getHooksByRelease(rawData, selectedRelease),
		[rawData, selectedRelease]
	);

	const columns = React.useMemo(
		() => [
			{
				id: 'scssVariable',
				Header: 'SCSS Variable',
				label: 'SCSS Variable',
				accessor: 'scssVariable',
				key: 'scssVariable',
				Cell: ({row}) => {
					return (
						<HookLink uid={row.original.uid} id={row.original.id}>
							{row.original.scssVariable}
						</HookLink>
					);
				},
				renderer: (row) => {
					if (!row.scssVariable) {
						return '-';
					}
					return (
						<HookLink uid={row.uid} id={row.id}>
							{row.scssVariable}
						</HookLink>
					);
				},
			},
			{
				id: 'customProperty',
				Header: 'CSS Custom Property',
				label: 'CSS Custom Property',
				accessor: 'customProperty',
				key: 'customProperty',
				Cell: ({row}) => {
					return (
						<HookLink uid={row.original.uid} id={row.original.id}>
							{row.original.customProperty}
						</HookLink>
					);
				},
				renderer: (row) => {
					if (!row.customProperty) {
						return '-';
					}
					return (
						<HookLink uid={row.uid} id={row.id}>
							{row.customProperty}
						</HookLink>
					);
				},
			},
			{
				id: 'namespace',
				Header: 'Namespace',
				label: 'Namespace',
				accessor: 'namespace',
				key: 'namespace',
			},
			// {
			// 	// ("generic"|"category"|"specific")
			// 	id: 'class',
			// 	Header: 'Class',
			// 	accessor: 'class',
			// },
			// {
			// 	id: 'subclass',
			// 	Header: 'Subclass',
			// 	accessor: 'subclass',
			// },
			{
				id: 'fallbacks',
				Header: 'Fallbacks',
				label: 'Fallbacks',
				accessor: (row) => row.fallbacks.join(', '),
				renderer: (row) => row.fallbacks.join(', '),
				// Filter: ExistsColumnFilter,
				// filter: 'exists',
			},
			{
				id: 'defaultValue',
				Header: 'Default Value',
				label: 'Default Value',
				accessor: 'defaultValue',
				key: 'defaultValue',
				Cell: ({value}) => {
					if (!isValidHexString(value)) {
						return String(value);
					}

					return (
						<div className="flex items-center">
							<div
								className="w-4 h-4 rounded-full inline-block border border-gray-600 mr-1"
								style={{backgroundColor: value}}></div>
							{value}
						</div>
					);
				},
				renderer: (row) => {
					const value = row.defaultValue;

					if (!isValidHexString(value) && !isValidRgbString(value)) {
						return String(value);
					}

					const backgroundColor = isValidHexString(value)
						? value
						: `rgb(${value})`;

					return (
						<div className="flex items-center">
							<div
								className="w-4 h-4 rounded-full inline-block border border-gray-600 mr-1"
								style={{backgroundColor}}></div>
							{value}
						</div>
					);
				},
			},
		],
		[]
	);

	// const classOptions = React.useMemo(
	// 	() => getOptions(getColumn(columns, 'class'), data),
	// 	[columns, data]
	// );

	// const subclassOptions = React.useMemo(
	// 	() => getOptions(getColumn(columns, 'subclass'), data),
	// 	[columns, data]
	// );

	const namespaceOptions = React.useMemo(
		() => getOptions(getColumn(columns, 'namespace'), data),
		[columns, data]
	);

	const filteredData = React.useMemo(
		() => filterData(FILTER_DEFS, filters, data, columns, selectedRelease),
		[
			data,
			columns,
			selectedRelease,
			filters.namespace,
			debouncedSearchTerm,
			queryExtracted,
		]
	);

	const releaseOptions = React.useMemo(() => [...exportData.releases], []);

	// console.log(filters);
	// console.log(filteredData);
	// console.log(selectedRelease);

	const path = [{id: 'hooks', href: '/hooks', label: 'Hooks'}];
	const selectedPath = 'hooks';

	return (
		<NoSsr>
			<Fragment>
				<PageHeader
					wide
					label="Hooks"
					path={path}
					selectedPath={selectedPath}
				/>

				<Page wide>
					<div className="mb-6 flex items-center space-x-4">
						<SelectFilter
							label="Release"
							value={selectedRelease}
							setValue={(value) => setSelectedRelease(value)}
							options={releaseOptions}
							hideAll
						/>
						<TextFilter
							label="Name"
							value={filters.search}
							setValue={(value) => setFilters({...filters, search: value})}
						/>
						<SelectFilter
							label="Namespace"
							value={filters.namespace}
							setValue={(value) => setFilters({...filters, namespace: value})}
							options={namespaceOptions}
						/>
						<span className="ml-auto">
							Matches:{' '}
							<span className="text-teal-800">{filteredData.length}</span>
						</span>
						{/* <SelectFilter
						label="Class"
						value={filters.class}
						setValue={(value) => setFilters({...filters, class: value})}
						options={classOptions}
					/>
					<SelectFilter
						label="Subclass"
						value={filters.subclass}
						setValue={(value) => setFilters({...filters, subclass: value})}
						options={subclassOptions}
					/> */}
					</div>
					<SimpleTable columns={columns} data={filteredData} textSize="sm" />
				</Page>
			</Fragment>
		</NoSsr>
	);
}
