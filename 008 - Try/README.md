# Try

To install;

```
npm i @travic/try
// or
yarn add @travic/try
```

To use, `import` or `require` package;

```
import { Try } from '@travic/try';
// or
const { Try } = require('@travic/try');

// example use

test('Try should be success', () => {
	const res = Try.of(() => true),
		res2 = Try.of(() => false),
		res3 = Try.of(() => {});

	expect(res.isSuccess).toEqual(true);
	expect(res.get()).toEqual(true);
	expect(res2.isSuccess).toEqual(true);
	expect(res2.get()).toEqual(false);
	expect(res3.isSuccess).toEqual(true);
	expect(res3.get()).toEqual(undefined);
});

test('Try should be have getOrElse result', () => {
	const res = Try.of(() => {
		throw new Error();
	}).getOrElse('Hello Else');

	expect(res).toEqual('Hello Else');
});

test('Try should perform onFailure method', () => {
	const res = Try.of(() => {
		throw new Error();
	})
		.onFailure(() => 'On Fail')
		.get();

	expect(res).toEqual('On Fail');
});

test('Try should give unhandled error in get', () => {
	const res = Try.of(() => {
		throw new Error();
	}).get();

	expect(res).toHaveProperty('unhandled', true);
});

```
