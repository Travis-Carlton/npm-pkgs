"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../src");
test('parses url query params', function () {
    var url = 'http://example.com/?p=page&myquery=string&something=new&hello=world';
    var result = {
        p: 'page',
        myquery: 'string',
        something: 'new',
        hello: 'world',
    };
    expect(src_1.parseQP(url)).toStrictEqual(result);
});
//# sourceMappingURL=index.test.js.map