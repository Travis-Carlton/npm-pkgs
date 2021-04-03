# WS

To install;

```
npm i @travic/ws
// or
yarn add @travic/ws
```

To use, `import` or `require` package;

```
import { WS } from '@travic/ws';
// or
const { WS } = require('@travic/ws');

// example use

const url = 'ws://examplewebsocket.com';

// second arg is for websocket options.
const ws = WS.newWebsocket(url);

// first arg set to true will console.log the event.
ws.connect(true, event => {// do something with event});

ws.disconnect(true, event => {// do something with event});

// recieves data
ws.message(true, event => {// do something with event});

// Sends data.
 - Passing a string as arg will send that string.
 - Passing an object as arg will send that object as json.

ws.send({// data to send});
ws.send("// data to send");

```
