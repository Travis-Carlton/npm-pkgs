# collections

-   To install;

```
npm i @travic/collections
// or
yarn add @travic/collections
```

-   To use, `import` or `require` package;

```
import { ArrayList } from '@travic/collections';
// or
const { ArrayList } = require('@travic/collections');

// example use

test('Should be able to Create an ArrayList and get the size', () => {
	const al = new ArrayList(1, 2, 3);
	const al2 = ArrayList.newList('a', 'b', 'c', 'd');
	const al3 = ArrayList.newList();

	expect(al.get()).toEqual([1, 2, 3]);
	expect(al.size()).toEqual(3);

	expect(al2.get()).toEqual(['a', 'b', 'c', 'd']);
	expect(al2.size()).toEqual(4);

	expect(al3.get()).toEqual([]);
	expect(al3.size()).toEqual(0);
});

test('Should be able to set a value in an ArrayList', () => {
	const al = new ArrayList(1, 2, 3);
	al.set(1337, 0);

	expect(al.get()).toEqual([1337, 2, 3]);
});

test('Should be able to add and remove from an ArrayList with objects', () => {
	const al = new ArrayList(
		{ id: 123456, field: 'value' },
		{ id: 789012, field: 'value' }
	);
	al.add({ id: 345678, field: 'value' });
	expect(al.get()).toEqual([
		{ id: 123456, field: 'value' },
		{ id: 789012, field: 'value' },
		{ id: 345678, field: 'value' },
	]);

	al.remove({ id: 789012 });
	expect(al.get()).toEqual([
		{ id: 123456, field: 'value' },
		{ id: 345678, field: 'value' },
	]);
});

test('Should be able to add and remove from an ArrayList', () => {
	const al = new ArrayList(1, 2, 3);
	al.add(4);
	expect(al.get()).toEqual([1, 2, 3, 4]);

	al.remove(1);
	expect(al.get()).toEqual([2, 3, 4]);
});

```
