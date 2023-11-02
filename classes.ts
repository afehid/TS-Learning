class Vehicle {
  // color: string;
  constructor(public color: string) {
    // this.color = color;
  }

  // public drive(): void {
  //   console.log('Test');
  // }
  public honk(): void {
    console.log('BeeP');
  }
}

// we cannot make a override function to be private after inheritance
// if we make the method private or protected we cannot call it outside the class

// class Car extends Vehicle {
// private drive(): void {
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    //super make us use inheritance class
    super(color);
  }
  private drive(): void {
    console.log('beep');
  }
  startDrivingProcess(): void {
    this.drive();
  }
}

const vehicle = new Vehicle('orange');
const car = new Car(4, 'yellow');
console.log(vehicle.color);
car.startDrivingProcess();
// vehicle.drive();
