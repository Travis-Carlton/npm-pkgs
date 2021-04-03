"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_HEADERS = exports.Response = void 0;
var Response = /** @class */ (function () {
    function Response() {
    }
    Response.builder = function () {
        return new (/** @class */ (function () {
            function class_1() {
                this.response = new Response();
            }
            // Base 64 Encode
            class_1.prototype.withBase64Encoding = function () {
                this.response.isBase64Encoded = true;
                return this;
            };
            //
            // Status Code
            class_1.prototype.withStatusCode = function (sc) {
                this.response.statusCode = sc;
                return this;
            };
            class_1.prototype.ok = function () {
                return this.withStatusCode(200);
            };
            class_1.prototype.badRequest = function () {
                return this.withStatusCode(400);
            };
            class_1.prototype.serverError = function () {
                return this.withStatusCode(500);
            };
            //
            // Body
            class_1.prototype.withBody = function (b) {
                this.response.body =
                    typeof b === 'string' ? b : JSON.stringify(b);
                return this;
            };
            //
            // Headers
            class_1.prototype.withHeaders = function (h) {
                this.response.headers = h;
                return this;
            };
            //
            class_1.prototype.build = function () {
                return this.response;
            };
            return class_1;
        }()))();
    };
    return Response;
}());
exports.Response = Response;
/**
 * @var DEFAULT_HEADERS
 * @example
 * {
 * 'Access-Control-Allow-Headers': process.env.CORS_ALLOW_HEADERS,
 * 'Access-Control-Allow-Origin': process.env.ALLOW_ORIGIN,
 * 'Access-Control-Allow-Methods': process.env.CORS_ALLOW_METHODS
 * }
 */
exports.DEFAULT_HEADERS = {
    'Access-Control-Allow-Headers': process.env.CORS_ALLOW_HEADERS,
    'Access-Control-Allow-Origin': process.env.ALLOW_ORIGIN,
    'Access-Control-Allow-Methods': process.env.CORS_ALLOW_METHODS,
};
//# sourceMappingURL=index.js.map