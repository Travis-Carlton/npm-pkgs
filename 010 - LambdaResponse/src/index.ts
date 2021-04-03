export class Response {
	private isBase64Encoded: boolean | undefined;
	private statusCode: number | undefined;
	private body: string | undefined;
	private headers: Object | undefined;
	private cookies: string[] | undefined;

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
			// Cookies
			withCookies(...cookies: string[]) {
				this.response.cookies = cookies;
				return this;
			}
			//
			build() {
				return this.response;
			}
		})();
}