"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayList = void 0;
var ArrayList = /** @class */ (function () {
    function ArrayList() {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.get = function (i) { return (i ? _this.value[i] : _this.value); };
        this.set = function (v, i) {
            _this.value[i] = v;
        };
        this.size = function () { return _this.value.length; };
        this.add = function (item) {
            if (item)
                _this.value.push(item);
        };
        this.remove = function (item) {
            var isObject = null !== item && typeof item === 'object' && !Array.isArray(item);
            if (isObject) {
                var _a = Object.entries(item)[0], k_1 = _a[0], v_1 = _a[1];
                _this.value = _this.value.filter(function (val) { return val[k_1] !== v_1; });
            }
            else {
                _this.value = _this.value.filter(function (val) { return val !== item; });
            }
        };
        this.value = args;
    }
    ArrayList.newList = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new (ArrayList.bind.apply(ArrayList, __spreadArrays([void 0], args)))();
    };
    return ArrayList;
}());
exports.ArrayList = ArrayList;
//# sourceMappingURL=index.js.map