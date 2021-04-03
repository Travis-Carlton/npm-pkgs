export declare class Response {
    private isBase64Encoded;
    private statusCode;
    private body;
    private headers;
    constructor();
    static builder: () => {
        response: Response;
        withBase64Encoding(): any;
        withStatusCode(sc: number): any;
        ok(): any;
        badRequest(): any;
        serverError(): any;
        withBody(b: string | Object): any;
        withHeaders(h: Object): any;
        build(): Response;
    };
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
export declare const DEFAULT_HEADERS: {
    'Access-Control-Allow-Headers': string | undefined;
    'Access-Control-Allow-Origin': string | undefined;
    'Access-Control-Allow-Methods': string | undefined;
};
//# sourceMappingURL=index.d.ts.map