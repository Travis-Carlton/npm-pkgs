export interface Dict {
    [propName: string]: any;
}
export declare const isObject: (o: any) => boolean;
export declare const isArray: (o: any) => boolean;
export declare const isNumber: (o: any) => boolean;
export declare const isString: (o: any) => boolean;
export declare const isUndefined: (o: any) => boolean;
export declare const print: (message?: any, ...optionalParams: any[]) => void;
export declare const callable: (v: any) => boolean;
export declare const type: (v: any) => string;
export declare const filter: (cb: (v: any, i: number, a: any[]) => unknown, o: object | any[]) => any[];
export declare const map: (cb: (v: any, i: number, a: any[]) => unknown, o: object | any[]) => unknown[];
export declare const sum: (l: number[], s?: number | undefined) => number;
export declare const reversed: (o: Dict | any[]) => any[] | {
    [x: string]: any;
} | undefined;
export declare const set: (l: any[]) => any[];
export declare const str: (v: any) => string;
export declare const dict: (...args: any) => Dict;
export declare const fromkeys: (kL: any[], v?: any) => Dict;
export declare const get: (o: Dict, k: any) => any;
export declare const items: (o: Dict) => [string, any][];
export declare const keys: (o: Dict) => string[];
export declare const popitem: (o: Dict) => boolean | 0;
export declare const setdefault: (o: Dict, k: string, v?: any) => any;
export declare const update: (o: Dict, o2: Dict) => void;
export declare const values: (o: Dict) => any[];
export declare const list: (...args: any) => any[];
export declare const len: (o: any) => number;
export declare const append: (l: any[], ...v: any) => number;
export declare const clear: (o: any[] | Dict) => void;
export declare const copy: (o: any[] | object) => object | any[] | null;
export declare const count: (l: any[], m: any) => number;
export declare const extend: (l: any[], e: any[]) => number;
export declare const index: (l: any[], i: any) => number;
export declare const insert: (l: any[], v: any, i: number) => any[];
export declare const pop: (o: any[] | Dict, i?: string | number | undefined) => any;
export declare const remove: (l: any[], v: any) => any;
export declare const reverse: (l: any[]) => any[];
export declare const sort: (l: any[], r?: boolean, cb?: ((a: any, b: any) => any) | undefined) => void;
export declare const sorted: (l: any[], r: boolean, cb?: ((a: any, b: any) => any) | undefined) => void;
export declare const int: (v: any) => number;
export declare const float: (v: any) => number;
export declare const abs: (n: number) => number;
export declare const pow: (b: number, e: number, m?: number | undefined) => number;
export declare const round: (n: number) => number;
export declare const bool: (v: any) => boolean;
//# sourceMappingURL=index.d.ts.map