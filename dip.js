class Logger {
  log(message) {
    throw new Error("log() must be implemented");
  }
}

class FileLogger extends Logger {
  log(message) {
    return `Log to file: ${message}`;
  }
}

class ConsoleLogger extends Logger {
  log(message) {
    return `Console log: ${message}`;
  }
}

class App {
  constructor(logger) {
    this.logger = logger;
  }

  run() {
    return this.logger.log("Running...");
  }
}

const appWithFileLogger = new App(new FileLogger());
const appWithConsoleLogger = new App(new ConsoleLogger());
console.log(appWithFileLogger.run());
console.log(appWithConsoleLogger.run());
