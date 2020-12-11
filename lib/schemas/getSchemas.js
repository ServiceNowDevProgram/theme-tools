import fs from 'fs';
import path from 'path';
import getDirFiles from '../../lib/node/getDirFiles';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'schema');

export default function getSchemas() {
	const files = getDirFiles(CONTENT_DIR);
	return files.map((x) => {
		const fileContent = fs.readFileSync(x.filePath, 'utf8');
		return {
			id: x.fileName,
			label: x.fileName,
			rawContent: fileContent,
		};
	});
}
