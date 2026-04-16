class Vehicle {
  move() {
    return "Vehicle is moving";
  }
}

class EngineVehicle extends Vehicle {
  startEngine() {
    return "Engine started";
  }
}

class NonEngineVehicle extends Vehicle {
  move() {
    return "Non-engine vehicle is moving";
  }
}

class Car extends EngineVehicle {}

class Bicycle extends NonEngineVehicle {
  pedal() {
    return "Pedaling bicycle";
  }
}

const car = new Car();
const bicycle = new Bicycle();
console.log(car.startEngine());
console.log(car.move());
console.log(bicycle.pedal());
console.log(bicycle.move());
