export interface parsedQPO {
    [propName: string]: any;
}
/**
 * Get parsed query string params and return in object;
 * @function parseQP
 * @param {object} url string
 * @param {boolean} log error supression --> default is false and true will show error log
 * @return {parsedQPO} returns parsedQPO
 */
export declare const parseQP: (url: string, log?: boolean | undefined) => any | null;
//# sourceMappingURL=index.d.ts.map