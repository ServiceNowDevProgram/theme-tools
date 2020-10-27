import React from 'react';

export default function Select({label, items, selected, onSelect = () => {}}) {
	return (
		<div className="flex items-center">
			<label className="block text-secondary text-xs mr-2" htmlFor="format">
				{label}
			</label>
			<div className="relative">
				<select
					className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-1 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					id="format"
					value={selected}
					onChange={(e) => {
						onSelect(e.target.value);
					}}>
					{items.map((x) => (
						<option key={x.id} value={x.id}>
							{x.label}
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
		</div>
	);
}
