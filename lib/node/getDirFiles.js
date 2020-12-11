import fs from 'fs';
import path from 'path';

export default function getDirFiles(dir) {
	const isFile = (source) => fs.lstatSync(source).isFile();
	return fs
		.readdirSync(dir)
		.map((fileName) => path.join(dir, fileName))
		.filter(isFile)
		.map((filePath) => {
			const {dir, base, name, ext} = path.parse(filePath);
			return {
				// 'z-index'
				fileName: name,
				// 'z-index.md'
				fileBase: base,
				// '.md'
				fileExtension: ext,
				// '/Users/david.leonard/code/repos/next-theme-tools/content/schema/z-index.md'
				filePath,
				// '/Users/david.leonard/code/repos/next-theme-tools/content/schema'
				fileDir: dir,
			};
		});
}
