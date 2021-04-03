export class Response {
	private isBase64Encoded: boolean | undefined;
	private statusCode: number | undefined;
	private body: string | undefined;
	private headers: Object | undefined;

	constructor() {}

	static builder = () =>
		new (class {
			response: Response;
			constructor() {
				this.response = new Response();
			}
			// Base 64 Encode
			withBase64Encoding() {
				this.response.isBase64Encoded = true;
				return this;
			}
			//
			// Status Code
			withStatusCode(sc: number) {
				this.response.statusCode = sc;
				return this;
			}
			ok() {
				return this.withStatusCode(200);
			}
			badRequest() {
				return this.withStatusCode(400);
			}
			serverError() {
				return this.withStatusCode(500);
			}
			//
			// Body
			withBody(b: string | Object) {
				this.response.body =
					typeof b === 'string' ? b : JSON.stringify(b);
				return this;
			}
			//
			// Headers
			withHeaders(h: Object) {
				this.response.headers = h;
				return this;
			}
			//
			build() {
				return this.response;
			}
		})();
}

/**
 * @var DEFAULT_HEADERS
 * @example
 * {
 * 'Access-Control-Allow-Headers': process.env.CORS_ALLOW_HEADERS,
 * 'Access-Control-Allow-Origin': process.env.ALLOW_ORIGIN,
 * 'Access-Control-Allow-Methods': process.env.CORS_ALLOW_METHODS
 * }
 */
export const DEFAULT_HEADERS = {
	'Access-Control-Allow-Headers': process.env.CORS_ALLOW_HEADERS,
	'Access-Control-Allow-Origin': process.env.ALLOW_ORIGIN,
	'Access-Control-Allow-Methods': process.env.CORS_ALLOW_METHODS,
};
