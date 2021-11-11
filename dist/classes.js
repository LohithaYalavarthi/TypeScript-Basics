"use strict";
class Department {
    //protected is not accesbile from outside but availble for classes who inherit this class
    // constructor is reserved word
    constructor(name) {
        this.name = name;
        // set as private so that we can add employee using addEmployee instead of modifying it
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log("Length", this.employees.length);
        console.log("Employees", this.employees);
    }
    static createEmployee(name) {
        return { name };
    }
}
Department.fiscalYear = 2002;
//You can inherit only one class you cant inherit multiple classes
class ITDepartment extends Department {
    constructor(name, admins, reports) {
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
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid value");
        }
        this.addReport(value);
    }
    //override Methods if wanted
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        //this.employess we cant access through here because its private property for department
        this.employees.push(name);
    }
    addReport(text) {
        this.lastReport = text;
    }
}
class AccountDepartment extends Department {
    constructor(name, reports) {
        super(name);
        this.lastReport = reports[0];
    }
    addReport(text) {
        this.lastReport = text;
    }
    describe() {
        console.log("Department :", this.name);
    }
    static getInstance() {
        if (AccountDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountDepartment('d2', []);
        return this.instance;
    }
}
//calling static methid
const accounting = AccountDepartment.getInstance();
const accounting2 = AccountDepartment.getInstance();
console.log(accounting, accounting2);
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
//# sourceMappingURL=classes.js.map