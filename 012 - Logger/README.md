# logger

-   To install;

```ruby
npm i @travic/logger
# or
yarn add @travic/logger
```

-   To use, `import` or `require` package;

```typescript
import { Logger } from '@travic/logger';
// or
const { Logger } = require('@travic/logger');

// example use

const logger = new Logger(); // using `new Date(2021, 1, 1).toISOString()` for below examples

type LoggerTypes =
	| 'INFO'
	| 'WARNING'
	| 'SEVERE'
	| 'CONFIG'
	| 'FINE'
	| 'FINER'
	| 'FINEST';
```

```typescript
const HelloWorld = () => {
	const { name } = HelloWorld;
	logger.INFO({ source: name, event: name }); // '[2021-02-01T07:00:00.000Z] [INFO] SOURCE: HelloWorld - EVENT: HelloWorld'
};
HelloWorld();
```

```typescript
const HelloWorld = () => {
	const { name } = HelloWorld;
	logger.WARNING({ source: name, event: name }); // '[2021-02-01T07:00:00.000Z] [WARNING] SOURCE: HelloWorld - EVENT: HelloWorld'
};
HelloWorld();
```

```typescript
const HelloWorld = () => {
	const { name } = HelloWorld;
	logger.SEVERE({ source: name, event: name }); // '[2021-02-01T07:00:00.000Z] [SEVERE] SOURCE: HelloWorld - EVENT: HelloWorld'
};
HelloWorld();
```
