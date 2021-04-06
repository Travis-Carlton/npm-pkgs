interface LoggerParamsI {
	source: string;
	event: string;
}

type LoggerTypes =
	| "INFO"
	| "WARNING"
	| "SEVERE"
	| "CONFIG"
	| "FINE"
	| "FINER"
	| "FINEST"


export class Logger {
	constructor(private isTest: boolean) {
	}

	private log = console.log;

	private time_stamp = () => this.isTest ? new Date(2021, 1, 1).toISOString() : new Date().toISOString();

	private useLogType = (type: LoggerTypes, {source, event}: LoggerParamsI) => {
		const { log, time_stamp } = this;
		log(`[${time_stamp()}] [${type}] SOURCE: ${source} - EVENT: ${event}`);
	}

	/**
	 * @method INFO
	 * @param params
	 * @example
	 * params = {
	 * 	source: string;
	 * 	event: string;
	 * }
	 */
	public INFO = (params: LoggerParamsI) => { this.useLogType("INFO", params); }
	/**
	 * @method WARNING
	 * @param params
	 * @example
	 * params = {
	 * 	source: string;
	 * 	event: string;
	 * }
	 */
	public WARNING = (params: LoggerParamsI) => { this.useLogType("WARNING", params); }
	/**
	 * @method SEVERE
	 * @param params
	 * @example
	 * params = {
	 * 	source: string;
	 * 	event: string;
	 * }
	 */
	public SEVERE = (params: LoggerParamsI) => { this.useLogType("SEVERE", params); }
	/**
	 * @method CONFIG
	 * @param params
	 * @example
	 * params = {
	 * 	source: string;
	 * 	event: string;
	 * }
	 */
	public CONFIG = (params: LoggerParamsI) => { this.useLogType("CONFIG", params); }
	/**
	 * @method FINE
	 * @param params
	 * @example
	 * params = {
	 * 	source: string;
	 * 	event: string;
	 * }
	 */
	public FINE = (params: LoggerParamsI) => { this.useLogType("FINE", params); }
	/**
	 * @method FINER
	 * @param params
	 * @example
	 * params = {
	 * 	source: string;
	 * 	event: string;
	 * }
	 */
	public FINER = (params: LoggerParamsI) => { this.useLogType("FINER", params); }
	/**
	 * @method FINEST
	 * @param params
	 * @example
	 * params = {
	 * 	source: string;
	 * 	event: string;
	 * }
	 */
	public FINEST = (params: LoggerParamsI) => { this.useLogType("FINEST", params); }


}
