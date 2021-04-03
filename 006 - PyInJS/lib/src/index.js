"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bool = exports.round = exports.pow = exports.abs = exports.float = exports.int = exports.sorted = exports.sort = exports.reverse = exports.remove = exports.pop = exports.insert = exports.index = exports.extend = exports.count = exports.copy = exports.clear = exports.append = exports.len = exports.list = exports.values = exports.update = exports.setdefault = exports.popitem = exports.keys = exports.items = exports.get = exports.fromkeys = exports.dict = exports.str = exports.set = exports.reversed = exports.sum = exports.map = exports.filter = exports.type = exports.callable = exports.print = exports.isUndefined = exports.isString = exports.isNumber = exports.isArray = exports.isObject = void 0;
var DATA_TYPES = {
    OBJECT: 'object',
    ARRAY: 'array',
    NUMBER: 'number',
    STRING: 'string',
    BOOLEAN: 'boolean',
    NULL: 'null',
    UNDEFINED: 'undefined',
    FUNCTION: 'function',
};
exports.isObject = function (o) {
    return typeof o === DATA_TYPES.OBJECT && null !== o && !Array.isArray(o);
};
exports.isArray = function (o) {
    return typeof o === DATA_TYPES.OBJECT && null !== o && Array.isArray(o);
};
exports.isNumber = function (o) { return typeof o === DATA_TYPES.NUMBER; };
exports.isString = function (o) { return typeof o === DATA_TYPES.STRING; };
exports.isUndefined = function (o) {
    return typeof o === DATA_TYPES.UNDEFINED;
};
// General
exports.print = console.log;
exports.callable = function (v) { return typeof v === DATA_TYPES.FUNCTION; };
exports.type = function (v) { return typeof v; };
exports.filter = function (cb, o) {
    var res = [];
    if (exports.isObject(o)) {
        if (Array.isArray(o))
            res = o;
        else
            res = Object.entries(o);
    }
    return res.filter(cb);
};
exports.map = function (cb, o) {
    var res = [];
    if (exports.isObject(o)) {
        if (Array.isArray(o))
            res = o;
        else
            res = Object.entries(o);
    }
    return res.map(cb);
};
exports.sum = function (l, s) {
    return l.reduce(function (a, c) { return a + c; }, s || 0);
};
exports.reversed = function (o) {
    var arrCopy = [];
    if (exports.isObject(o)) {
        arrCopy = __spread(Object.entries(o));
        return __assign({}, Object.fromEntries(arrCopy.reverse()));
    }
    else if (exports.isArray(o)) {
        arrCopy = __spread(o);
        return arrCopy.reverse();
    }
};
exports.set = function (l) { return __spread(new Set(l)); };
//
// Strings
exports.str = function (v) { return "" + v; };
//
// Dictionaries / Maps / Objects
exports.dict = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var result = {};
    var i = 0;
    while (i < args.length) {
        result[args[i]] = args[i + 1];
        i += 2;
    }
    return result;
};
exports.fromkeys = function (kL, v) {
    var e_1, _a;
    if (v === void 0) { v = null; }
    var result = {};
    try {
        for (var kL_1 = __values(kL), kL_1_1 = kL_1.next(); !kL_1_1.done; kL_1_1 = kL_1.next()) {
            var k = kL_1_1.value;
            result[k] = v;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (kL_1_1 && !kL_1_1.done && (_a = kL_1.return)) _a.call(kL_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return result;
};
exports.get = function (o, k) { return o[k]; };
exports.items = function (o) { return Object.entries(o); };
exports.keys = function (o) { return Object.keys(o); };
exports.popitem = function (o) {
    return Object.keys(o).length && delete o["" + Object.keys(o).pop()];
};
exports.setdefault = function (o, k, v) {
    if (v === void 0) { v = null; }
    if (!o[k])
        o[k] = v;
    return o[k];
};
exports.update = function (o, o2) {
    return Object.entries(o2).forEach(function (_a) {
        var _b = __read(_a, 2), k = _b[0], v = _b[1];
        return (o[k] = v);
    });
};
exports.values = function (o) { return Object.values(o); };
//
// Lists / Arrays
exports.list = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
};
exports.len = function (o) {
    var type = typeof o;
    if (DATA_TYPES.OBJECT === type) {
        if (exports.isArray(o))
            type = DATA_TYPES.ARRAY;
        if (null === o)
            type = DATA_TYPES.NULL;
    }
    switch (type) {
        case 'object':
            return Object.keys(o).length;
        case 'array':
        case 'string':
            return o.length;
        default:
            return -1;
    }
};
exports.append = function (l) {
    var v = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        v[_i - 1] = arguments[_i];
    }
    return l.push.apply(l, __spread(v));
};
exports.clear = function (o) {
    if (exports.isObject(o)) {
        if (Array.isArray(o))
            o.length = 0;
        else
            Object.keys(o).forEach(function (k) { return delete o[k]; });
    }
};
exports.copy = function (o) {
    if (exports.isObject(o)) {
        if (Array.isArray(o))
            return o.slice();
        else
            return __assign({}, o);
    }
    return null;
};
exports.count = function (l, m) {
    var e_2, _a;
    var matches = 0;
    try {
        for (var l_1 = __values(l), l_1_1 = l_1.next(); !l_1_1.done; l_1_1 = l_1.next()) {
            var v = l_1_1.value;
            if (m === v)
                matches++;
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (l_1_1 && !l_1_1.done && (_a = l_1.return)) _a.call(l_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return matches;
};
exports.extend = function (l, e) { return l.push.apply(l, __spread(e)); };
exports.index = function (l, i) { return l.indexOf(i); };
exports.insert = function (l, v, i) { return l.splice(i, 0, v); };
exports.pop = function (o, i) {
    if (exports.isObject(o)) {
        if (exports.isArray(o) && exports.isNumber(i))
            o.splice(i || -1, 1)[0];
        else {
            var dict_1 = o;
            var k = "" + i;
            delete dict_1[k];
        }
    }
};
exports.remove = function (l, v) {
    var i = l.indexOf(v);
    return l.splice(i, 1);
};
exports.reverse = function (l) { return l.reverse(); };
exports.sort = function (l, r, cb) {
    if (r === void 0) { r = false; }
    if (!cb) {
        if (exports.isNumber(l[0]))
            l.sort(function (a, b) { return a - b; });
        else
            l.sort();
    }
    else if (cb)
        l.sort(cb);
    if (r)
        l.reverse();
};
exports.sorted = function (l, r, cb) { return exports.sort(l, r, cb); };
//
// Numbers
exports.int = function (v) { return parseInt(v); };
exports.float = function (v) { return parseFloat(v); };
exports.abs = function (n) { return Math.abs(n); };
exports.pow = function (b, e, m) {
    return m ? Math.pow(b, e) % m : Math.pow(b, e);
};
exports.round = function (n) { return Math.round(n); };
//
// Booleans
exports.bool = function (v) { return Boolean(v); };
//
//# sourceMappingURL=index.js.map