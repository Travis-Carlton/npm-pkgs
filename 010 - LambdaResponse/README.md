# lambda-response

-   To install;

```
npm i @travic/lambda-response
// or
yarn add @travic/lambda-response
```

-   To use, `import` or `require` package;

```
import { Response, DEFAULT_HEADERS } from '@travic/lambda-response';
// or
const { Response, DEFAULT_HEADERS } = require('@travic/lambda-response');

// example use

// This is how the DEFAULT_HEADERS is exported.
const DEFAULT_HEADERS = {
	'Access-Control-Allow-Headers': process.env.CORS_ALLOW_HEADERS,
	'Access-Control-Allow-Origin': process.env.ALLOW_ORIGIN,
	'Access-Control-Allow-Methods': process.env.CORS_ALLOW_METHODS,
};
//

test('Should be able to build Response with Status Code', () => {
	const r = Response.builder()
		.withStatusCode(200)
		.build();
	const r2 = Response.builder()
		.ok()
		.build();
	const r3 = Response.builder()
		.badRequest()
		.build();
	const r4 = Response.builder()
		.serverError()
		.build();

	expect(r).toEqual({ statusCode: 200 });
	expect(r2).toEqual({ statusCode: 200 });
	expect(r3).toEqual({ statusCode: 400 });
	expect(r4).toEqual({ statusCode: 500 });
});

test('Should be able to build Response with Body', () => {
	const r = Response.builder()
		.withBody('Hello World')
		.build();
	const r2 = Response.builder()
		.withBody({ key: 'value', key2: 'value2' })
		.build();

	expect(r).toEqual({ body: 'Hello World' });
	expect(r2).toEqual({ body: '{"key":"value","key2":"value2"}' });
});

test('Should be able to build Response with Headers and default Headers', () => {
	const r = Response.builder()
		.withHeaders({ 'Content-Type': 'application/json' })
		.build();
	const r2 = Response.builder()
		.withHeaders(DEFAULT_HEADERS)
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

test('Should be able to build Response with Base 64 Encoding', () => {
	const r = Response.builder()
		.withBase64Encoding()
		.build();

	expect(r).toEqual({ isBase64Encoded: true });
});

test('Should be able to build Response with all Fields', () => {
	const r = Response.builder()
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

```
