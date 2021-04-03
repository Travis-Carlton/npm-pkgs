"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../src");
test('Should be able to build Response with Status Code', function () {
    var r = src_1.Response.builder()
        .withStatusCode(200)
        .build();
    var r2 = src_1.Response.builder()
        .ok()
        .build();
    var r3 = src_1.Response.builder()
        .badRequest()
        .build();
    var r4 = src_1.Response.builder()
        .serverError()
        .build();
    expect(r).toEqual({ statusCode: 200 });
    expect(r2).toEqual({ statusCode: 200 });
    expect(r3).toEqual({ statusCode: 400 });
    expect(r4).toEqual({ statusCode: 500 });
});
test('Should be able to build Response with Body', function () {
    var r = src_1.Response.builder()
        .withBody('Hello World')
        .build();
    var r2 = src_1.Response.builder()
        .withBody({ key: 'value', key2: 'value2' })
        .build();
    expect(r).toEqual({ body: 'Hello World' });
    expect(r2).toEqual({ body: '{"key":"value","key2":"value2"}' });
});
test('Should be able to build Response with Headers and default Headers', function () {
    var r = src_1.Response.builder()
        .withHeaders({ 'Content-Type': 'application/json' })
        .build();
    var r2 = src_1.Response.builder()
        .withHeaders(src_1.DEFAULT_HEADERS)
        .build();
    expect(r).toEqual({ headers: { 'Content-Type': 'application/json' } });
    expect(r2).toEqual({
        headers: {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
        },
    });
});
test('Should be able to build Response with Base 64 Encoding', function () {
    var r = src_1.Response.builder()
        .withBase64Encoding()
        .build();
    expect(r).toEqual({ isBase64Encoded: true });
});
test('Should be able to build Response with all Fields', function () {
    var r = src_1.Response.builder()
        .withStatusCode(200)
        .withBody('Hello World')
        .withHeaders({ 'Content-Type': 'application/json' })
        .withBase64Encoding()
        .build();
    expect(r).toEqual({
        statusCode: 200,
        body: 'Hello World',
        headers: { 'Content-Type': 'application/json' },
        isBase64Encoded: true,
    });
});
//# sourceMappingURL=index.test.js.map