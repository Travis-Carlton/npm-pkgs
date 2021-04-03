export declare class Response {
    private isBase64Encoded;
    private statusCode;
    private body;
    private headers;
    private cookies;
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
        withCookies(...cookies: string[]): any;
        build(): Response;
    };
}
export declare const DEFAULT_HEADERS: {
    'Access-Control-Allow-Headers': string | undefined;
    'Access-Control-Allow-Origin': string | undefined;
    'Access-Control-Allow-Methods': string | undefined;
};
//# sourceMappingURL=index.d.ts.map