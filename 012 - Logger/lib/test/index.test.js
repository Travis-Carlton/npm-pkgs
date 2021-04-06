"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../src");
var consoleLogSpy = jest.spyOn(global.console, 'log');
var logger = new src_1.Logger(true);
test('Should be able to Log an Info event', function () {
    var HelloWorld = function () {
        var name = HelloWorld.name;
        logger.INFO({ source: name, event: name });
    };
    HelloWorld();
    expect(consoleLogSpy).toHaveBeenCalled();
    expect(consoleLogSpy)
        .toHaveBeenCalledWith('[2021-02-01T07:00:00.000Z] [INFO] SOURCE: HelloWorld - EVENT: HelloWorld');
});
test('Should be able to log an Warning event', function () {
    var HelloWorld = function () {
        var name = HelloWorld.name;
        logger.WARNING({ source: name, event: name });
    };
    HelloWorld();
    expect(consoleLogSpy).toHaveBeenCalled();
    expect(consoleLogSpy)
        .toHaveBeenCalledWith('[2021-02-01T07:00:00.000Z] [WARNING] SOURCE: HelloWorld - EVENT: HelloWorld');
});
test('Should be able to log an Severe event', function () {
    var HelloWorld = function () {
        var name = HelloWorld.name;
        logger.SEVERE({ source: name, event: name });
    };
    HelloWorld();
    expect(consoleLogSpy).toHaveBeenCalled();
    expect(consoleLogSpy)
        .toHaveBeenCalledWith('[2021-02-01T07:00:00.000Z] [SEVERE] SOURCE: HelloWorld - EVENT: HelloWorld');
});
test('Should be able to log an Config event', function () {
    var HelloWorld = function () {
        var name = HelloWorld.name;
        logger.CONFIG({ source: name, event: name });
    };
    HelloWorld();
    expect(consoleLogSpy).toHaveBeenCalled();
    expect(consoleLogSpy)
        .toHaveBeenCalledWith('[2021-02-01T07:00:00.000Z] [CONFIG] SOURCE: HelloWorld - EVENT: HelloWorld');
});
test('Should be able to log an Fine event', function () {
    var HelloWorld = function () {
        var name = HelloWorld.name;
        logger.FINE({ source: name, event: name });
    };
    HelloWorld();
    expect(consoleLogSpy).toHaveBeenCalled();
    expect(consoleLogSpy)
        .toHaveBeenCalledWith('[2021-02-01T07:00:00.000Z] [FINE] SOURCE: HelloWorld - EVENT: HelloWorld');
});
test('Should be able to log an Finer event', function () {
    var HelloWorld = function () {
        var name = HelloWorld.name;
        logger.FINER({ source: name, event: name });
    };
    HelloWorld();
    expect(consoleLogSpy).toHaveBeenCalled();
    expect(consoleLogSpy)
        .toHaveBeenCalledWith('[2021-02-01T07:00:00.000Z] [FINER] SOURCE: HelloWorld - EVENT: HelloWorld');
});
test('Should be able to log an Finest event', function () {
    var HelloWorld = function () {
        var name = HelloWorld.name;
        logger.FINEST({ source: name, event: name });
    };
    HelloWorld();
    expect(consoleLogSpy).toHaveBeenCalled();
    expect(consoleLogSpy)
        .toHaveBeenCalledWith('[2021-02-01T07:00:00.000Z] [FINEST] SOURCE: HelloWorld - EVENT: HelloWorld');
});
//# sourceMappingURL=index.test.js.map