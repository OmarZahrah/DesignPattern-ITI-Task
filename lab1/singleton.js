class Config {
  constructor(settings = {}) {
    if (Config.instance) {
      return Config.instance;
    }
    this.settings = settings;
    Config.instance = this;
  }

  static getInstance(settings = {}) {
    if (!Config.instance) {
      Config.instance = new Config(settings);
    }
    return Config.instance;
  }

  set(key, value) {
    this.settings[key] = value;
  }

  get(key) {
    return this.settings[key];
  }
}

const config1 = Config.getInstance({ appName: "Task1" });
const config2 = Config.getInstance();
config1.set("mode", "dev");
console.log(config1 === config2);
console.log(config2.get("mode"));
