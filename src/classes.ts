abstract class Department {
  // set as private so that we can add employee using addEmployee instead of modifying it
  protected employees: string[] = [];
  static fiscalYear = 2002;
  //protected is not accesbile from outside but availble for classes who inherit this class
  // constructor is reserved word
  constructor(protected readonly name: string) {}
  abstract describe(this: Department): void;
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log("Length", this.employees.length);
    console.log("Employees", this.employees);
  }
  static createEmployee(name: string) {
    return { name };
  }
}

//You can inherit only one class you cant inherit multiple classes
class ITDepartment extends Department {
  admins: string[];
  private lastReport: string;
  constructor(name: string, admins: string[], reports: string[]) {
    super(name);
    this.admins = admins;
    this.lastReport = reports[0];
  }
  describe() {
    console.log("Department :", this.name);
  }

  get mostRecentReport() {
    //since last Report is private property we need to get this outside by getter method.
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }

  //override Methods if wanted
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    //this.employess we cant access through here because its private property for department
    this.employees.push(name);
  }

  addReport(text: string) {
    this.lastReport = text;
  }
}

class AccountDepartment extends Department{
   lastReport : string;
   private static instance : AccountDepartment
   private constructor(name : string,reports: string[]){
    super(name);
    this.lastReport = reports[0]
  }
  addReport(text: string) {
    this.lastReport = text;
  }
  describe() {
    console.log("Department :", this.name);
  }
  static getInstance() {
    if(AccountDepartment.instance){
      return this.instance
    }
    this.instance = new AccountDepartment('d2',[])
    return this.instance

  }
}
//calling static methid
const accounting =AccountDepartment.getInstance()
const accounting2 =AccountDepartment.getInstance()

console.log(accounting, accounting2)

const employeeadd = Department.createEmployee("Max");
const IT = new ITDepartment("d1", ["Max"], []);
IT.addReport("Hello");
//setter method here we wont access as a method but like property
IT.mostRecentReport = "";
console.log(IT.mostRecentReport);
//If class is created as an abstract you can create an instance with new keyword
// const accounting = new Department("Accounting");
//accounting.describe()

IT.addEmployee("Max");
IT.addEmployee("Raj");
// accounting.employess[2] ="raj" // this cant be done if we set it as private

IT.printEmployeeInformation();
