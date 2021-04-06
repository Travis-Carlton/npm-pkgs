interface LoggerParamsI {
    source: string;
    event: string;
}
export declare class Logger {
    private isTest;
    constructor(isTest: boolean);
    private log;
    private time_stamp;
    private useLogType;
    /**
     * @method INFO
     * @param params
     * @example
     * params = {
     * 	source: string;
     * 	event: string;
     * }
     */
    INFO: (params: LoggerParamsI) => void;
    /**
     * @method WARNING
     * @param params
     * @example
     * params = {
     * 	source: string;
     * 	event: string;
     * }
     */
    WARNING: (params: LoggerParamsI) => void;
    /**
     * @method SEVERE
     * @param params
     * @example
     * params = {
     * 	source: string;
     * 	event: string;
     * }
     */
    SEVERE: (params: LoggerParamsI) => void;
    /**
     * @method CONFIG
     * @param params
     * @example
     * params = {
     * 	source: string;
     * 	event: string;
     * }
     */
    CONFIG: (params: LoggerParamsI) => void;
    /**
     * @method FINE
     * @param params
     * @example
     * params = {
     * 	source: string;
     * 	event: string;
     * }
     */
    FINE: (params: LoggerParamsI) => void;
    /**
     * @method FINER
     * @param params
     * @example
     * params = {
     * 	source: string;
     * 	event: string;
     * }
     */
    FINER: (params: LoggerParamsI) => void;
    /**
     * @method FINEST
     * @param params
     * @example
     * params = {
     * 	source: string;
     * 	event: string;
     * }
     */
    FINEST: (params: LoggerParamsI) => void;
}
export {};
//# sourceMappingURL=index.d.ts.map