type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

// typeof type guard
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

// in type guard
function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo..." + amount);
  }
}

class Car {
  drive() {
    console.log("Driving a car...");
  }

  useHorn() {
    console.log("Honk!");
  }
}

type Vehicle = Truck | Car;

const v1 = new Truck();
const v2 = new Car();

// instanceof type guard
function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // instanceof type guard
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
  if (vehicle instanceof Car) {
    vehicle.useHorn();
  }
}
