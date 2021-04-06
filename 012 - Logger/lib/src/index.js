"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var Logger = /** @class */ (function () {
    function Logger(isTest) {
        var _this = this;
        this.isTest = isTest;
        this.log = console.log;
        this.time_stamp = function () { return _this.isTest ? new Date(2021, 1, 1).toISOString() : new Date().toISOString(); };
        this.useLogType = function (type, _a) {
            var source = _a.source, event = _a.event;
            var _b = _this, log = _b.log, time_stamp = _b.time_stamp;
            log("[" + time_stamp() + "] [" + type + "] SOURCE: " + source + " - EVENT: " + event);
        };
        /**
         * @method INFO
         * @param params
         * @example
         * params = {
         * 	source: string;
         * 	event: string;
         * }
         */
        this.INFO = function (params) { _this.useLogType("INFO", params); };
        /**
         * @method WARNING
         * @param params
         * @example
         * params = {
         * 	source: string;
         * 	event: string;
         * }
         */
        this.WARNING = function (params) { _this.useLogType("WARNING", params); };
        /**
         * @method SEVERE
         * @param params
         * @example
         * params = {
         * 	source: string;
         * 	event: string;
         * }
         */
        this.SEVERE = function (params) { _this.useLogType("SEVERE", params); };
        /**
         * @method CONFIG
         * @param params
         * @example
         * params = {
         * 	source: string;
         * 	event: string;
         * }
         */
        this.CONFIG = function (params) { _this.useLogType("CONFIG", params); };
        /**
         * @method FINE
         * @param params
         * @example
         * params = {
         * 	source: string;
         * 	event: string;
         * }
         */
        this.FINE = function (params) { _this.useLogType("FINE", params); };
        /**
         * @method FINER
         * @param params
         * @example
         * params = {
         * 	source: string;
         * 	event: string;
         * }
         */
        this.FINER = function (params) { _this.useLogType("FINER", params); };
        /**
         * @method FINEST
         * @param params
         * @example
         * params = {
         * 	source: string;
         * 	event: string;
         * }
         */
        this.FINEST = function (params) { _this.useLogType("FINEST", params); };
    }
    return Logger;
}());
exports.Logger = Logger;
//# sourceMappingURL=index.js.map