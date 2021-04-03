export interface GetError {
    error: Error;
    unhandled: boolean;
    [propName: string]: any;
}
export declare class Try {
    private val;
    private err;
    private errFn;
    constructor(fn: Function);
    static of(fn: Function): Try;
    get(): any;
    getOrElse(elseVal: any): any;
    onFailure(fn: Function): this;
    get isSuccess(): boolean;
    private ifError;
}
//# sourceMappingURL=index.d.ts.map