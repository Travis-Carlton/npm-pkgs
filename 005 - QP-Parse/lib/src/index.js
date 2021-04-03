"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseQP = void 0;
/**
 * Get parsed query string params and return in object;
 * @function parseQP
 * @param {object} url string
 * @param {boolean} log error supression --> default is false and true will show error log
 * @return {parsedQPO} returns parsedQPO
 */
exports.parseQP = function (url, log) {
    var result = {};
    try {
        var queryStart = url.indexOf('?');
        var keyValPairs = url
            .slice(queryStart)
            .split(/\?|&/g)
            .slice(1);
        result = keyValPairs.reduce(function (a, c) {
            if (typeof c === 'string') {
                var _a = c.split('='), k = _a[0], v = _a[1];
                a[k] = v;
            }
            return a;
        }, {});
    }
    catch (er) {
        log && console.error(er);
    }
    finally {
        return result;
    }
};
//# sourceMappingURL=index.js.map