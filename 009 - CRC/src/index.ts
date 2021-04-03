#!/usr/bin/env node

import fs from 'fs';
import readline from 'readline';

const cli = (args: string[]) => {
	const realArgs = args.slice(2);
	const ts = realArgs.includes('-ts');
	const sass = realArgs.includes('-sass');

	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	rl.question('Component Name: ', fn => {
		rl.question(
			'Specify relative path for newly created component (default: ./src/components): ',
			path => {
				if (!path) path = './src/components';
				const jsExtension = ts ? '.ts' : '.js';
				const jsxExtension = ts ? '.tsx' : '.jsx';
				const styleExtension = sass ? '.scss' : '.css';

				const updatedPathDir = path + '/' + fn;
				const componentPath = updatedPathDir + '/' + fn + jsxExtension;
				const componentStylePath =
					updatedPathDir + '/' + fn + styleExtension;
				const indexPath = updatedPathDir + '/index' + jsExtension;

				if (!fs.existsSync(updatedPathDir)) {
					try {
						fs.mkdirSync(updatedPathDir);
						const className = fn.toLowerCase();
						const tsInterface = `interface ${fn}Props {}`;
						const reactImport = 'import React from "react";\n\n';
						const jsxReturn = `() => <div className="${className}"></div>`;
						const tsxData = `${reactImport}${tsInterface}\n\nexport const ${fn}: React.FC<${fn}Props> = ${jsxReturn}`;
						const jsxData = `${reactImport}export const ${fn} = ${jsxReturn}`;
						const styleData = `.${className} {\n\tbox-sizing: border-box\n}`;
						const iData = `import { ${fn} } from "./${fn}";\nimport "./${fn}${styleExtension}";\n\nexport default ${fn}`;
						fs.writeFileSync(componentPath, ts ? tsxData : jsxData);
						fs.writeFileSync(componentStylePath, styleData);
						fs.writeFileSync(indexPath, iData);
					} catch (e) {
						console.log('Failed to create Component');
						console.error(e);
					}
					rl.close();
				}
			}
		);
	});

	rl.on('close', () => {
		console.log('\n----------------');
		process.exit(0);
	});
};

cli(process.argv);
