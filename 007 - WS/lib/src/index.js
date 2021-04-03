"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WS = void 0;
var WS = /** @class */ (function () {
    function WS(ws) {
        var _this = this;
        this.ws = ws;
        this.connect = function (log, cb) {
            if (_this.ws) {
                _this.ws.onopen = function (e) {
                    if (log)
                        console.log('WebSocket is open now.\nEvent:\t', e);
                    if (cb)
                        cb(e);
                };
            }
        };
        this.disconnect = function (log, cb) {
            if (_this.ws) {
                _this.ws.onclose = function (e) {
                    if (log)
                        console.log('WebSocket is closed now.\nEvent:\t', e);
                    if (cb)
                        cb(e);
                };
            }
        };
        this.message = function (log, cb) {
            if (_this.ws) {
                _this.ws.onmessage = function (e) {
                    if (log)
                        console.log('WebSocket message received:\t', e);
                    if (cb)
                        cb(e);
                };
            }
        };
        this.send = function (v) {
            if (_this.ws) {
                _this.ws.send(typeof v === 'string' ? v : JSON.stringify(v));
            }
        };
    }
    WS.newWebsocket = function (url, ops) { return new WS(new WebSocket(url, ops)); };
    return WS;
}());
exports.WS = WS;
//# sourceMappingURL=index.js.map