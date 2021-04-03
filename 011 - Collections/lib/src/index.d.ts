export declare class ArrayList<T> {
    private value;
    constructor(...args: T[]);
    static newList: <T_1>(...args: T_1[]) => ArrayList<T_1>;
    get: (i?: number | undefined) => T | T[];
    set: (v: T, i: number) => void;
    size: () => number;
    add: (item: T) => void;
    remove: (item: Partial<T>) => void;
}
//# sourceMappingURL=index.d.ts.map