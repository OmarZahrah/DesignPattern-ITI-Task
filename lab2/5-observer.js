class Device {
  constructor(name) {
    this.name = name;
  }

  update(temperature, humidity) {
    console.log(
      `${this.name}: Temperature is ${temperature}°C, Humidity is ${humidity}%`,
    );
  }
}

class WeatherStation {
  constructor() {
    this.devices = [];
  }

  subscribe(device) {
    this.devices.push(device);
  }

  unsubscribe(device) {
    this.devices = this.devices.filter(
      (currentDevice) => currentDevice !== device,
    );
  }

  notify(temperature, humidity) {
    for (const device of this.devices) {
      device.update(temperature, humidity);
    }
  }

  setWeatherData(temperature, humidity) {
    console.log("Weather Station: New weather data received!");
    this.notify(temperature, humidity);
  }
}

const weatherStation = new WeatherStation();

const phone = new Device("Phone");
const tablet = new Device("Tablet");
const smartHome = new Device("SmartHome");

weatherStation.subscribe(phone);
weatherStation.subscribe(tablet);
weatherStation.subscribe(smartHome);

weatherStation.setWeatherData(30, 60);
