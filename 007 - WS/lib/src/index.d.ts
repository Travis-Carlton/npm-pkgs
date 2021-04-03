export declare class WS {
    private ws;
    constructor(ws: WebSocket);
    static newWebsocket: (url: string, ops?: string | string[] | undefined) => WS;
    connect: (log?: boolean | undefined, cb?: Function | undefined) => void;
    disconnect: (log?: boolean | undefined, cb?: Function | undefined) => void;
    message: (log?: boolean | undefined, cb?: Function | undefined) => void;
    send: (v: string | object) => void;
}
//# sourceMappingURL=index.d.ts.map