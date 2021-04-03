# GET

To install;

```
npm i @travic/get
// or
yarn add @travic/get
```

To use, `import` or `require` package;

```
import { get } from '@travic/get'
// or
const { get } = require('@travic/get');

// ...

// example use

const obj = {
	a: 'string',
	b: true,
	c: {
		aa: 'another string'
	},
	d: [1,2,3],
};

console.log(get(obj, 'a')); // -> 'string'

console.log(get(obj, 'b')); // -> true

console.log(get(obj, 'c')); // -> { aa: 'aa' }

console.log(get(obj, 'c.aa')); // -> 'another string'

console.log(get(obj, 'c.aa.aaa')); // -> null

console.log(get(obj, 'c.aa.aaa', "It's not here!")); // -> "It's not here!"

console.log(get(obj, 'd.1')); // -> 2

console.log(get(1, "d.1")); // -> null
```
