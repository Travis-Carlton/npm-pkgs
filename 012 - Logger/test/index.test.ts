import { Logger } from '../src';

let consoleLogSpy = jest.spyOn(global.console, 'log');
const logger = new Logger(true);

test('Should be able to Log an Info event', () => {
	const HelloWorld = () => {
		const {name} = HelloWorld;
		logger.INFO({source: name, event: name});
	}
	HelloWorld();

	expect(consoleLogSpy).toHaveBeenCalled();
	expect(consoleLogSpy)
		.toHaveBeenCalledWith('[2021-02-01T07:00:00.000Z] [INFO] SOURCE: HelloWorld - EVENT: HelloWorld');
});

test('Should be able to log an Warning event', () => {
	const HelloWorld = () => {
		const {name} = HelloWorld;
		logger.WARNING({source: name, event: name});
	}
	HelloWorld();

	expect(consoleLogSpy).toHaveBeenCalled();
	expect(consoleLogSpy)
		.toHaveBeenCalledWith('[2021-02-01T07:00:00.000Z] [WARNING] SOURCE: HelloWorld - EVENT: HelloWorld');
});

test('Should be able to log an Severe event', () => {
	const HelloWorld = () => {
		const {name} = HelloWorld;
		logger.SEVERE({source: name, event: name});
	}
	HelloWorld();

	expect(consoleLogSpy).toHaveBeenCalled();
	expect(consoleLogSpy)
		.toHaveBeenCalledWith('[2021-02-01T07:00:00.000Z] [SEVERE] SOURCE: HelloWorld - EVENT: HelloWorld');
});

test('Should be able to log an Config event', () => {
	const HelloWorld = () => {
		const {name} = HelloWorld;
		logger.CONFIG({source: name, event: name});
	}
	HelloWorld();

	expect(consoleLogSpy).toHaveBeenCalled();
	expect(consoleLogSpy)
		.toHaveBeenCalledWith('[2021-02-01T07:00:00.000Z] [CONFIG] SOURCE: HelloWorld - EVENT: HelloWorld');
});

test('Should be able to log an Fine event', () => {
	const HelloWorld = () => {
		const {name} = HelloWorld;
		logger.FINE({source: name, event: name});
	}
	HelloWorld();

	expect(consoleLogSpy).toHaveBeenCalled();
	expect(consoleLogSpy)
		.toHaveBeenCalledWith('[2021-02-01T07:00:00.000Z] [FINE] SOURCE: HelloWorld - EVENT: HelloWorld');
});

test('Should be able to log an Finer event', () => {
	const HelloWorld = () => {
		const {name} = HelloWorld;
		logger.FINER({source: name, event: name});
	}
	HelloWorld();

	expect(consoleLogSpy).toHaveBeenCalled();
	expect(consoleLogSpy)
		.toHaveBeenCalledWith('[2021-02-01T07:00:00.000Z] [FINER] SOURCE: HelloWorld - EVENT: HelloWorld');
});

test('Should be able to log an Finest event', () => {
	const HelloWorld = () => {
		const {name} = HelloWorld;
		logger.FINEST({source: name, event: name});
	}
	HelloWorld();

	expect(consoleLogSpy).toHaveBeenCalled();
	expect(consoleLogSpy)
		.toHaveBeenCalledWith('[2021-02-01T07:00:00.000Z] [FINEST] SOURCE: HelloWorld - EVENT: HelloWorld');
});
