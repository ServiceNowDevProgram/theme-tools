import React from 'react';

export default function SimpleTable({columns, data}) {
	const rows = data.map((x) => {
		const cells = columns.map((c) => {
			if (c.renderer) {
				return c.renderer(x);
			}
			if (c.key) {
				return x[c.key];
			}
		});
		return {cells};
	});

	return (
		<table className="text-left table-fixed w-full border border-collapse">
			<thead>
				<tr>
					{columns.map((column) => (
						<th className="align-bottom py-4 px-6 bg-grey-lightest font-bold uppercase text-xs text-grey-dark border-b border-grey-light">
							{column.label}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{rows.map((row) => (
					<tr>
						{row.cells.map((cell) => (
							<td className="py-4 px-6 border-b border-grey-light">{cell}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}
