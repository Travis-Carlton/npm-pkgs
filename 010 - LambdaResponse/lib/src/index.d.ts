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
//# sourceMappingURL=index.d.ts.map