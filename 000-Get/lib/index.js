"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
/**
 * Get value from object[key] or return default || null;
 * @function get
 * @param {object} o object
 * @param {string} k key
 * @param {} d default --> default is null
 * @param {boolean} e error supression --> default is true and false will show error log
 * @return {} returns any | null
 */
exports.get = function (o, k, d, e) {
    if (d === void 0) { d = null; }
    if (e === void 0) { e = true; }
    var result = d;
    try {
        var value_1 = o;
        k.split(".").forEach(function (key) {
            return key in value_1 ? (value_1 = value_1[key]) : (value_1 = d);
        });
        result = value_1;
    }
    catch (er) {
        !e && console.error(er);
    }
    finally {
        return result;
    }
};
//# sourceMappingURL=index.js.map