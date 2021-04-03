export class WS {
	constructor(private ws: WebSocket) {}

	public static newWebsocket = (
		url: string,
		ops?: string | string[] | undefined
	): WS => new WS(new WebSocket(url, ops));

	public connect = (log?: boolean, cb?: Function): void => {
		if (this.ws) {
			this.ws.onopen = (e: Event) => {
				if (log) console.log('WebSocket is open now.\nEvent:\t', e);
				if (cb) cb(e);
			};
		}
	};
	public disconnect = (log?: boolean, cb?: Function): void => {
		if (this.ws) {
			this.ws.onclose = (e: Event) => {
				if (log) console.log('WebSocket is closed now.\nEvent:\t', e);
				if (cb) cb(e);
			};
		}
	};
	public message = (log?: boolean, cb?: Function): void => {
		if (this.ws) {
			this.ws.onmessage = (e: Event) => {
				if (log) console.log('WebSocket message received:\t', e);
				if (cb) cb(e);
			};
		}
	};
	public send = (v: string | object): void => {
		if (this.ws) {
			this.ws.send(typeof v === 'string' ? v : JSON.stringify(v));
		}
	};
}
