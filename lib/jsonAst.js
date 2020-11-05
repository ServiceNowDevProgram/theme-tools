const jsonToAst = require('json-to-ast');
const jsonLint = require('./jsonLint');
const isObject = require('lodash/isObject');

const types = {
	String: 'String',
	Number: 'Number',
	Boolean: 'Boolean',
	Null: 'Null',
	Array: 'Array',
	Object: 'Object',
	Property: 'Property',
	Identifier: 'Identifier',
	Literal: 'Literal',
};

const check = {};
for (const [k, v] of Object.entries(types)) {
	check[k] = (node) => isObject(node) && node.type === v;
}

function invalid(source) {
	try {
		jsonLint.parse(source);
	} catch (error) {
		const message = error.toString();
		const data = error.__hash || {};
		return {message, ...data};
	}
	const ast = parse(source);
	if (ast.children.length !== Object.keys(JSON.parse(source)).length) {
		const dupeKeys = [];
		for (const node of ast.children) {
			if (ast.children.find((x) => x.key.value === node.key.value)) {
				dupeKeys.push(node);
			}
		}
		let message = `Invalid JSON, the following keys are duplicated. Each key must appear only once to prevent data loss by parser. Remove duplicates and click verify again.`;
		dupeKeys.forEach((node) => {
			const line = `\n${node.loc.start.line}: ${node.key.raw}:${' '}${
				node.value.raw
			}`;
			message += line;
		});
		return {message};
	}
	return null;
}

function parse(source) {
	const result = jsonToAst(source);
	if (result && Array.isArray(result.children)) {
		result.children.forEach(({value}) => {
			if (check.Literal(value)) {
				if (value.raw === 'true' || value.raw === 'false') {
					value.type = types.Boolean;
				}
				if (value.raw === 'null') {
					value.type = types.Null;
				}
				if (/^[0-9]/.test(value.raw)) {
					value.type = types.Number;
				}
				if (/^"/.test(value.raw)) {
					value.type = types.String;
				}
			}
		});
	}
	return result;
}

export default {
	types,
	invalid,
	parse,
	check,
};
