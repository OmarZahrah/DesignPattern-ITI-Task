class ControlMethod {
  drive() {}
}

class ManualControl extends ControlMethod {
  drive() {
    return "manual control";
  }
}

class AutomaticControl extends ControlMethod {
  drive() {
    return "automatic control";
  }
}

class Vehicle {
  constructor(controlMethod) {
    this.controlMethod = controlMethod;
  }

  drive() {}
}

class Car extends Vehicle {
  drive() {
    console.log(`Car is driving with ${this.controlMethod.drive()}.`);
  }
}

class Bike extends Vehicle {
  drive() {
    console.log(`Bike is driving with ${this.controlMethod.drive()}.`);
  }
}

const car = new Car(new ManualControl());
const bike = new Bike(new AutomaticControl());

car.drive();
bike.drive();
