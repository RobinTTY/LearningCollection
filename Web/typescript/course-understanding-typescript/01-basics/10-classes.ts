// A basic class
class Department {
  private name: string;
  protected employees: string[] = [];

  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  // A static method
  static createEmployee(name: string) {
    return { name: name };
  }

  constructor(private readonly id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

// Inheritance
class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  // Overriding methods
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
}

// Using department class
const accounting = new Department("d1", "Accounting");
console.log(accounting);
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.describe();
accounting.printEmployeeInformation();
let employee = Department.createEmployee("Max");
console.log(employee);

// Using accounting class
const accounting2 = new AccountingDepartment("d2", []);
accounting2.addReport("Something went wrong...");
// Using a getter
console.log(accounting2.mostRecentReport);
// Using a setter
accounting2.mostRecentReport = "Year end report";

// Using IT class
const it = new ITDepartment("d3", ["Max"]);
it.addEmployee("Max");
it.addEmployee("Manu");
console.log(it);
