"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Try = void 0;
var Try = /** @class */ (function () {
    function Try(fn) {
        this.val = null;
        this.err = null;
        this.errFn = null;
        try {
            this.val = fn();
        }
        catch (err) {
            this.err = err;
        }
    }
    Try.of = function (fn) {
        return new this(fn);
    };
    Try.prototype.get = function () {
        if (this.errFn) {
            this.val = this.errFn();
        }
        else if (this.err && !this.errFn) {
            this.val = {
                error: this.err,
                unhandled: true,
            };
        }
        return this.val;
    };
    Try.prototype.getOrElse = function (elseVal) {
        var _this = this;
        this.ifError(function () { return (_this.val = elseVal); });
        return this.val;
    };
    Try.prototype.onFailure = function (fn) {
        var _this = this;
        this.ifError(function () { return (_this.errFn = function () { return fn(_this.err); }); });
        return this;
    };
    Object.defineProperty(Try.prototype, "isSuccess", {
        get: function () {
            return !this.err;
        },
        enumerable: false,
        configurable: true
    });
    Try.prototype.ifError = function (fn) {
        if (this.err)
            fn();
    };
    return Try;
}());
exports.Try = Try;
//# sourceMappingURL=index.js.map