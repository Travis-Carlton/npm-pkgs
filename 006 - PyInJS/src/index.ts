export interface Dict {
	[propName: string]: any;
}
const DATA_TYPES = {
	OBJECT: 'object',
	ARRAY: 'array',
	NUMBER: 'number',
	STRING: 'string',
	BOOLEAN: 'boolean',
	NULL: 'null',
	UNDEFINED: 'undefined',
	FUNCTION: 'function',
};
export const isObject = (o: any): boolean =>
	typeof o === DATA_TYPES.OBJECT && null !== o && !Array.isArray(o);
export const isArray = (o: any): boolean =>
	typeof o === DATA_TYPES.OBJECT && null !== o && Array.isArray(o);
export const isNumber = (o: any): boolean => typeof o === DATA_TYPES.NUMBER;
export const isString = (o: any): boolean => typeof o === DATA_TYPES.STRING;
export const isUndefined = (o: any): boolean =>
	typeof o === DATA_TYPES.UNDEFINED;
// General
export const print = console.log;
export const callable = (v: any): boolean => typeof v === DATA_TYPES.FUNCTION;
export const type = (v: any): string => typeof v;
export const filter = (
	cb: (v: any, i: number, a: any[]) => unknown,
	o: object | any[]
) => {
	let res: any[] = [];
	if (isObject(o)) {
		if (Array.isArray(o)) res = o;
		else res = Object.entries(o);
	}
	return res.filter(cb);
};
export const map = (
	cb: (v: any, i: number, a: any[]) => unknown,
	o: object | any[]
) => {
	let res: any[] = [];
	if (isObject(o)) {
		if (Array.isArray(o)) res = o;
		else res = Object.entries(o);
	}
	return res.map(cb);
};
export const sum = (l: number[], s?: number): number =>
	l.reduce((a: number, c: number) => a + c, s || 0);
export const reversed = (o: Dict | any[]) => {
	let arrCopy: any[] = [];
	if (isObject(o)) {
		arrCopy = [...Object.entries(o)];
		return { ...Object.fromEntries(arrCopy.reverse()) };
	} else if (isArray(o)) {
		arrCopy = [...(o as any[])];
		return arrCopy.reverse();
	}
};
export const set = (l: any[]) => [...new Set(l)];
//
// Strings
export const str = (v: any): string => `${v}`;
//
// Dictionaries / Maps / Objects
export const dict = (...args: any): Dict => {
	const result: Dict = {};
	let i = 0;
	while (i < args.length) {
		result[args[i]] = args[i + 1];
		i += 2;
	}
	return result;
};
export const fromkeys = (kL: any[], v: any = null) => {
	const result: Dict = {};
	for (let k of kL) {
		result[k] = v;
	}
	return result;
};
export const get = (o: Dict, k: any) => o[k];
export const items = (o: Dict) => Object.entries(o);
export const keys = (o: Dict) => Object.keys(o);
export const popitem = (o: Dict) =>
	Object.keys(o).length && delete o[`${Object.keys(o).pop()}`];
export const setdefault = (o: Dict, k: string, v: any = null) => {
	if (!o[k]) o[k] = v;
	return o[k];
};
export const update = (o: Dict, o2: Dict) =>
	Object.entries(o2).forEach(([k, v]) => (o[k] = v));
export const values = (o: Dict) => Object.values(o);
//
// Lists / Arrays
export const list = (...args: any): any[] => args;
export const len = (o: any): number => {
	let type: string = typeof o;
	if (DATA_TYPES.OBJECT === type) {
		if (isArray(o)) type = DATA_TYPES.ARRAY;
		if (null === o) type = DATA_TYPES.NULL;
	}
	switch (type) {
		case 'object':
			return Object.keys(o).length;
		case 'array':
		case 'string':
			return o.length;
		default:
			return -1;
	}
};
export const append = (l: any[], ...v: any): number => l.push(...v);
export const clear = (o: any[] | Dict): void => {
	if (isObject(o)) {
		if (Array.isArray(o)) o.length = 0;
		else Object.keys(o).forEach((k: string) => delete o[k]);
	}
};
export const copy = (o: any[] | object): object | any[] | null => {
	if (isObject(o)) {
		if (Array.isArray(o)) return o.slice();
		else return { ...o };
	}
	return null;
};
export const count = (l: any[], m: any): number => {
	let matches = 0;
	for (let v of l) {
		if (m === v) matches++;
	}
	return matches;
};
export const extend = (l: any[], e: any[]): number => l.push(...e);
export const index = (l: any[], i: any) => l.indexOf(i);
export const insert = (l: any[], v: any, i: number) => l.splice(i, 0, v);
export const pop = (o: any[] | Dict, i?: number | string): any => {
	if (isObject(o)) {
		if (isArray(o) && isNumber(i)) o.splice(i || -1, 1)[0];
		else {
			const dict: Dict = o;
			const k: string = `${i}`;
			delete dict[k];
		}
	}
};
export const remove = (l: any[], v: any): any => {
	const i = l.indexOf(v);
	return l.splice(i, 1);
};
export const reverse = (l: any[]) => l.reverse();
export const sort = (
	l: any[],
	r: boolean = false,
	cb?: ((a: any, b: any) => any) | undefined
) => {
	if (!cb) {
		if (isNumber(l[0])) l.sort((a: any, b: any) => a - b);
		else l.sort();
	} else if (cb) l.sort(cb);
	if (r) l.reverse();
};
export const sorted = (
	l: any[],
	r: boolean,
	cb?: ((a: any, b: any) => any) | undefined
) => sort(l, r, cb);
//
// Numbers
export const int = (v: any): number => parseInt(v);
export const float = (v: any): number => parseFloat(v);
export const abs = (n: number): number => Math.abs(n);
export const pow = (b: number, e: number, m?: number): number =>
	m ? Math.pow(b, e) % m : Math.pow(b, e);
export const round = (n: number): number => Math.round(n);
//
// Booleans
export const bool = (v: any): boolean => Boolean(v);
//
