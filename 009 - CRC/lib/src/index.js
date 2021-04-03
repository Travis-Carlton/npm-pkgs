#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var readline_1 = __importDefault(require("readline"));
var cli = function (args) {
    var realArgs = args.slice(2);
    var ts = realArgs.includes('-ts');
    var sass = realArgs.includes('-sass');
    var rl = readline_1.default.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question('Component Name: ', function (fn) {
        rl.question('Specify relative path for newly created component (default: ./src/components): ', function (path) {
            if (!path)
                path = './src/components';
            var jsExtension = ts ? '.ts' : '.js';
            var jsxExtension = ts ? '.tsx' : '.jsx';
            var styleExtension = sass ? '.scss' : '.css';
            var updatedPathDir = path + '/' + fn;
            var componentPath = updatedPathDir + '/' + fn + jsxExtension;
            var componentStylePath = updatedPathDir + '/' + fn + styleExtension;
            var indexPath = updatedPathDir + '/index' + jsExtension;
            if (!fs_1.default.existsSync(updatedPathDir)) {
                try {
                    fs_1.default.mkdirSync(updatedPathDir);
                    var className = fn.toLowerCase();
                    var tsInterface = "interface " + fn + "Props {}";
                    var reactImport = 'import React from "react";\n\n';
                    var jsxReturn = "() => <div className=\"" + className + "\"></div>";
                    var tsxData = "" + reactImport + tsInterface + "\n\nexport const " + fn + ": React.FC<" + fn + "Props> = " + jsxReturn;
                    var jsxData = reactImport + "export const " + fn + " = " + jsxReturn;
                    var styleData = "." + className + " {\n\tbox-sizing: border-box\n}";
                    var iData = "import { " + fn + " } from \"./" + fn + "\";\nimport \"./" + fn + styleExtension + "\";\n\nexport default " + fn;
                    fs_1.default.writeFileSync(componentPath, ts ? tsxData : jsxData);
                    fs_1.default.writeFileSync(componentStylePath, styleData);
                    fs_1.default.writeFileSync(indexPath, iData);
                }
                catch (e) {
                    console.log('Failed to create Component');
                    console.error(e);
                }
                rl.close();
            }
        });
    });
    rl.on('close', function () {
        console.log('\n----------------');
        process.exit(0);
    });
};
cli(process.argv);
//# sourceMappingURL=index.js.map