import dynamic from 'next/dynamic'; // don't delete this, its needed for no ssr
import React, {Fragment, useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import get from 'lodash/get';
import isString from 'lodash/isString';
import isUndefined from 'lodash/isUndefined';
import kebabCase from 'lodash/kebabCase';

import {isValidHexString, isValidRgbString} from '../../lib/color';
import shallowEqual from '../../lib/common/shallowEqual';
import {copyObject} from '../../lib/common/copy';

import PageHeader from '../../components/PageHeader';
import Page from '../../components/Page';
import {HookLink} from '../../components/Links';
import SimpleTable from '../../components/SimpleTable';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

import exportData from '../../data/hooks.json';
import {isFunction} from 'lodash';

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
	if (isFunction(accessor)) {
		return accessor(row);
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

function copyFilteredData(data) {
	let out = {};
	data.forEach((hook) => {
		const {customProperty, defaultValue} = hook;
		if (customProperty && defaultValue) {
			out[customProperty] = defaultValue;
		}
	});
	copyObject(out);
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
	usage: {
		filter: ({columns, row, filterValue}) => {
			const value = getValue(getColumn(columns, 'usage'), row);
			return value === filterValue;
		},
	},
	cssProperty: {
		filter: ({columns, row, filterValue}) => {
			const value = getValue(getColumn(columns, 'cssProperty'), row);
			return value === filterValue;
		},
	},
	schema: {
		filter: ({columns, row, filterValue}) => {
			const value = getValue(getColumn(columns, 'schema'), row);
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
		if (!shallowEqual(router.query, filters)) {
			setFilters(router.query);
			if (!setQueryExtracted) {
				setQueryExtracted(true);
			}
		}
	}, [router.query]);

	useEffect(() => {
		if (!shallowEqual(router.query, filters)) {
			router.push({
				pathname: router.pathname,
				query: defined(filters),
			});
		}
	}, [
		filters.namespace,
		filters.usage,
		filters.cssProperty,
		filters.schema,
		debouncedSearchTerm,
	]);

	const data = React.useMemo(
		() => getHooksByRelease(rawData, selectedRelease),
		[rawData, selectedRelease]
	);

	const columns = React.useMemo(
		() => [
			{
				id: 'scssVariable',
				label: 'SCSS Variable',
				accessor: 'scssVariable',
				key: 'scssVariable',
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
				label: 'Namespace',
				accessor: 'namespace',
				key: 'namespace',
			},
			{
				id: 'usage',
				label: 'Usage',
				accessor: 'usage',
				key: 'usage',
			},
			{
				id: 'fallbacks',
				label: 'Fallbacks',
				accessor: (row) => row.fallbacks.join(', '),
				renderer: (row) => row.fallbacks.join(', '),
			},
			{
				id: 'defaultValue',
				label: 'Default Value',
				accessor: 'defaultValue',
				key: 'defaultValue',
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
			{
				id: 'cssProperty',
				label: 'CSS Property',
				accessor: (row) => row.cssProperty.join(', '),
				renderer: (row) => row.cssProperty.join(', '),
			},
			{
				id: 'schema',
				label: 'Schema',
				accessor: 'schema',
				key: 'schema',
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

	const usageOptions = React.useMemo(
		() => getOptions(getColumn(columns, 'usage'), data),
		[columns, data]
	);

	const cssPropertyOptions = React.useMemo(
		() => getOptions(getColumn(columns, 'cssProperty'), data),
		[columns, data]
	);

	const schemaOptions = React.useMemo(
		() => getOptions(getColumn(columns, 'schema'), data),
		[columns, data]
	);

	const filteredData = React.useMemo(
		() => filterData(FILTER_DEFS, filters, data, columns, selectedRelease),
		[
			data,
			columns,
			selectedRelease,
			filters.namespace,
			filters.usage,
			filters.cssProperty,
			filters.schema,
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
					<div className="mb-4 flex justify-between">
						<TextFilter
							label="Search"
							value={filters.search}
							setValue={(value) => setFilters({...filters, search: value})}
						/>
					</div>
					<div className="mb-4 flex justify-between">
						<div className="mr-3 flex-1">
							<SelectFilter
								className="mb-6"
								label="Release"
								value={selectedRelease}
								setValue={(value) => setSelectedRelease(value)}
								options={releaseOptions}
								hideAll
							/>
						</div>
						<div className="mr-3 flex-1">
							<SelectFilter
								label="Namespace"
								value={filters.namespace}
								setValue={(value) => setFilters({...filters, namespace: value})}
								options={namespaceOptions}
							/>
						</div>
						<div className="mr-3 flex-1">
							<SelectFilter
								label="Usage"
								value={filters.usage}
								setValue={(value) => setFilters({...filters, usage: value})}
								options={usageOptions}
							/>
						</div>
						<div className="mr-3 flex-1">
							<SelectFilter
								label="CSS Property"
								value={filters.cssProperty}
								setValue={(value) =>
									setFilters({...filters, cssProperty: value})
								}
								options={cssPropertyOptions}
							/>
						</div>
						<div className="mr-3 flex-1">
							<SelectFilter
								label="Schema"
								value={filters.schema}
								setValue={(value) => setFilters({...filters, schema: value})}
								options={schemaOptions}
							/>
						</div>

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
					<div className="mb-4 flex justify-between items-center">
						<span className="label">
							Matches:{' '}
							<span className="text-teal-800 font-bold">
								{filteredData.length}
							</span>
						</span>
						<Button onClick={() => copyFilteredData(filteredData)}>
							Copy visible hooks as JSON
						</Button>
					</div>
					<SimpleTable columns={columns} data={filteredData} textSize="sm" />
					{filteredData.length === 0 ? (
						<div className="block text-center py-20 mt-5 bg-gray-300">
							No results found
						</div>
					) : undefined}
				</Page>
			</Fragment>
		</NoSsr>
	);
}
