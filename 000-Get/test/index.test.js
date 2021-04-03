// TODO -> add actual tests

const { get } = require("../lib/index");

const nestedObj = {
	aa: "another string"
};

const obj = {
	a: "string",
	b: true,
	c: nestedObj,
	d: [1, 2, 3]
};

console.log(get(obj, "a") === "string"); // -> 'string'

console.log(get(obj, "b") === true); // -> true

console.log(get(obj, "c") === nestedObj); // -> { aa: 'aa' }

console.log(get(obj, "c.aa") === "another string"); // -> 'another string'

console.log(get(obj, "c.aa.aaa") === null); // -> null

console.log(get(obj, "c.aa.aaa", "It's not here!", true) === "It's not here!"); // -> "It's not here!"

console.log(get(obj, "d.1") === 2); // -> 2

console.log(get(1, "d.1") === null); // -> null
