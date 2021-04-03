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
export const parseQP = (url: string, log?: boolean): parsedQPO => {
	let result: parsedQPO = {};
	try {
		const queryStart = url.indexOf('?');
		const keyValPairs = url
			.slice(queryStart)
			.split(/\?|&/g)
			.slice(1);
		result = keyValPairs.reduce((a: parsedQPO, c: string) => {
			if (typeof c === 'string') {
				const [k, v] = c.split('=');
				a[k] = v;
			}
			return a;
		}, {});
	} catch (er) {
		log && console.error(er);
	} finally {
		return result;
	}
};
