class LightState {
  change(trafficLight) {}
}

class RedState extends LightState {
  change(trafficLight) {
    console.log("Traffic light is now Green.");
    trafficLight.setState(new GreenState());
  }
}

class GreenState extends LightState {
  change(trafficLight) {
    console.log("Traffic light is now Yellow.");
    trafficLight.setState(new YellowState());
  }
}

class YellowState extends LightState {
  change(trafficLight) {
    console.log("Traffic light is now Red.");
    trafficLight.setState(new RedState());
  }
}

class TrafficLight {
  constructor() {
    this.state = new RedState();
    console.log("Traffic light is Red.");
  }

  setState(state) {
    this.state = state;
  }

  change() {
    console.log("Changing state...");
    this.state.change(this);
  }
}

const trafficLight = new TrafficLight();

trafficLight.change();
trafficLight.change();
trafficLight.change();
