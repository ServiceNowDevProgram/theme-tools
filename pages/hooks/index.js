import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {useTable, useFilters, useGlobalFilter} from 'react-table';
import {isValidHexColor} from '../../lib/color';
import get from 'lodash/get';
import isString from 'lodash/isString';
import isUndefined from 'lodash/isUndefined';
import dynamic from 'next/dynamic';

import rawColors from './data/colors.json';
import rawCategories from './data/categories.json';
import rawComponents from './data/components.json';

const colors = rawColors.map((x) => {
	if (x.fallbacks.length) {
		return {...x, subclass: 'system_color_derived'};
	} else {
		return {...x, subclass: 'system_color_generic'};
	}
});

const categories = rawCategories.map((x) => {
	const category = x.scssVariable.replace(/^\$now\-/, '').split('--')[0];
	return {...x, subclass: `category_${category}`};
});

const components = rawComponents.map((x) => {
	const component = x.scssVariable.replace(/^\$now\-/, '').split('--')[0];
	return {...x, subclass: `component_${component}`};
});

const data = [...colors, ...categories, ...components];

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
	return options;
}

function getColumn(columns, id) {
	return columns.find((x) => x.id === id);
}

function SelectFilter({label, value, setValue, options}) {
	return (
		<div className="relative flex items-center">
			<label className="mr-2">{label}</label>
			<select
				className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-1 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
				value={value}
				onChange={(e) => {
					setValue(e.target.value || undefined);
				}}>
				<option value="">All</option>
				{options.map((option, i) => (
					<option key={i} value={option}>
						{option}
					</option>
				))}
			</select>
			<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
				<svg
					className="fill-current h-4 w-4"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20">
					<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
				</svg>
			</div>
		</div>
	);
}

function TextFilter({label, value, setValue, placeholder}) {
	return (
		<div className="flex items-center">
			<label className="mr-2">{label}</label>
			<input
				className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
				type="text"
				value={value || ''}
				onChange={(e) => {
					setValue(e.target.value || undefined);
				}}
				placeholder={placeholder}
			/>
		</div>
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

function Table({columns, data, onFilterChange, filters: controlledFilters}) {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({
		columns,
		data,
	});

	return (
		<table
			className="text-left table-fixed w-full border border-collapse"
			{...getTableProps()}>
			<thead>
				{headerGroups.map((headerGroup) => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
							<th
								className="align-bottom py-4 px-6 bg-grey-lightest font-bold uppercase text-xs text-grey-dark border-b border-grey-light"
								{...column.getHeaderProps()}>
								{column.render('Header')}
							</th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row, i) => {
					prepareRow(row);
					return (
						<tr {...row.getRowProps()}>
							{row.cells.map((cell) => {
								return (
									<td
										className="text-xs py-4 px-6 border-b border-grey-light"
										{...cell.getCellProps()}>
										{cell.render('Cell')}
									</td>
								);
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

function filterData(filterDefs, filters, rows, columns) {
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
			const scssVariable = getValue(getColumn(columns, 'scssVariable'), row);
			const customProperty = getValue(
				getColumn(columns, 'customProperty'),
				row
			);
			return (
				scssVariable.indexOf(filterValue) !== -1 ||
				customProperty.indexOf(filterValue) !== -1
			);
		},
	},
	class: {
		filter: ({columns, row, filterValue}) => {
			const value = getValue(getColumn(columns, 'class'), row);
			return value === filterValue;
		},
	},
	subclass: {
		filter: ({columns, row, filterValue}) => {
			const value = getValue(getColumn(columns, 'subclass'), row);
			return value === filterValue;
		},
	},
};

export default function HooksPage() {
	const columns = React.useMemo(
		() => [
			{
				id: 'scssVariable',
				Header: 'SCSS Variable',
				accessor: 'scssVariable',
			},
			{
				id: 'customProperty',
				Header: 'CSS Custom Property',
				accessor: 'customProperty',
			},
			{
				// ("generic"|"category"|"specific")
				id: 'class',
				Header: 'Class',
				accessor: 'class',
			},
			{
				id: 'subclass',
				Header: 'Subclass',
				accessor: 'subclass',
			},
			{
				id: 'fallbacks',
				Header: 'Fallbacks',
				accessor: (row) => row.fallbacks.join(', '),
				// Filter: ExistsColumnFilter,
				// filter: 'exists',
			},
			{
				id: 'defaultValue',
				Header: 'Default Value',
				accessor: 'defaultValue',
				Cell: ({value}) => {
					if (!isValidHexColor(value)) {
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
			},
		],
		[]
	);

	const router = useRouter();
	const [filters, setFilters] = useState({});

	useEffect(() => {
		if (!isShallowEqual(router.query, filters)) {
			setFilters(router.query);
		}
	}, [router.query]);

	useEffect(() => {
		if (!isShallowEqual(router.query, filters)) {
			router.push({
				pathname: router.pathname,
				query: defined(filters),
			});
		}
	}, [filters]);

	const classOptions = React.useMemo(
		() => getOptions(getColumn(columns, 'class'), data),
		[columns, data]
	);

	const subclassOptions = React.useMemo(
		() => getOptions(getColumn(columns, 'subclass'), data),
		[columns, data]
	);

	const filteredData = React.useMemo(
		() => filterData(FILTER_DEFS, filters, data, columns),
		[filters, data, columns]
	);

	console.log(filters);
	console.log(filteredData);

	return (
		<NoSsr>
			<div>
				<Head>
					<title>Variables | Theme Tools</title>
				</Head>
				<h1 className="text-3xl mb-6">Theme Variables Search</h1>
				<div className="mb-6 flex space-x-4">
					<TextFilter
						label="Name"
						value={filters.search}
						setValue={(value) => setFilters({...filters, search: value})}
					/>
					<SelectFilter
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
					/>
				</div>
				<Table columns={columns} data={filteredData} />
			</div>
		</NoSsr>
	);
}
