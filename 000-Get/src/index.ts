/**
 * Get value from object[key] or return default || null;
 * @function get
 * @param {object} o object
 * @param {string} k key
 * @param {} d default --> default is null
 * @param {boolean} e error supression --> default is true and false will show error log
 * @return {} returns any | null
 */
export const get = (
	o: object | any[],
	k: string,
	d: any = null,
	e: boolean = true
): any | null => {
	let result: any = d;
	try {
		let value: any = o;
		k.split('.').forEach(key =>
			key in value ? (value = value[key]) : (value = d)
		);
		result = value;
	} catch (er) {
		!e && console.error(er);
	} finally {
		return result;
	}
};
