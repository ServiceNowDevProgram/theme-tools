import React, {Fragment, useState} from 'react';
import PageHeader from '../../components/PageHeader';
import Page from '../../components/Page';
import Button from '../../components/Button';

/*
 *     decodep("--mv9-kWzzvm--AJvmAJ--kvZptZ-ZrpAW1")
 *     //=> "--now-button--iconic--border-radius"
 */

function decodep(string) {
	const BASE_KEY =
		'K73dDGhN4YbH5yec6RxQanowLIFMql0BE2igrkJptPf8AVUjTmvXSZ1zWs9uOC';
	const TARGET_KEY =
		'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

	let result = '';
	for (const x of string.split('')) {
		const baseKeyIndex = BASE_KEY.indexOf(x);
		if (baseKeyIndex !== -1) {
			result += TARGET_KEY[baseKeyIndex];
		} else {
			result += x;
		}
	}
	return result;
}

export default function Decode() {
	const path = [{id: 'decoder', href: '/decoder', label: 'Decoder'}];
	const selectedPath = path[0].id;

	const [value, setValue] = useState('');

	function decodeValue() {
		const newValue = value.replace(/--mv9-[a-zA-Z-_0-9]+/g, (match) => {
			let result = decodep(match);
			// fixing some but not all of the consequences of lowercasing border variables
			// automatically sometimes
			result = result.replace(/lolot/g, 'color');
			result = result.replace(/botdet/g, 'border');
			result = result.replace(/ItKeatM/g, 'primary');
			result = result.replace(/selondatM/g, 'secondary');
			result = result.replace(/tettKatM/g, 'tertiary');
			return result;
		});
		setValue(newValue);
	}

	return (
		<Fragment>
			<PageHeader label="Decoder" path={path} selectedPath={selectedPath} />
			<Page>
				<p>
					Decodes CSS Custom Properties to make them easier to understand. Paste
					a single property or a block of CSS or JavaScript and click decode to
					see the style hooks in human-readable format.
				</p>
				<div className="mt-4 mb-4 flex justify-end">
					<Button onClick={() => decodeValue()} size="md">
						Decode
					</Button>
				</div>
				<textarea
					className="w-full text-gray-700 bg-gray-200 border-2 border-gray-200 rounded py-1 px-2"
					style={{height: '22rem'}}
					value={value}
					onChange={(e) => setValue(e.target.value)}></textarea>
			</Page>
		</Fragment>
	);
}
