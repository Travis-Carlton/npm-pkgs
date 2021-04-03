"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../src");
test('Try should be success', function () {
    var res = src_1.Try.of(function () { return true; }), res2 = src_1.Try.of(function () { return false; }), res3 = src_1.Try.of(function () { });
    expect(res.isSuccess).toEqual(true);
    expect(res.get()).toEqual(true);
    expect(res2.isSuccess).toEqual(true);
    expect(res2.get()).toEqual(false);
    expect(res3.isSuccess).toEqual(true);
    expect(res3.get()).toEqual(undefined);
});
test('Try should be have getOrElse result', function () {
    var res = src_1.Try.of(function () {
        throw new Error();
    }).getOrElse('Hello Else');
    expect(res).toEqual('Hello Else');
});
test('Try should perform onFailure method', function () {
    var res = src_1.Try.of(function () {
        throw new Error();
    })
        .onFailure(function () { return 'On Fail'; })
        .get();
    expect(res).toEqual('On Fail');
});
test('Try should give unhandled error in get', function () {
    var res = src_1.Try.of(function () {
        throw new Error();
    }).get();
    expect(res).toHaveProperty('unhandled', true);
});
//# sourceMappingURL=index.test.js.map