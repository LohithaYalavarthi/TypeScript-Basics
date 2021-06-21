var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    //protected is not accesbile from outside but availble for classes who inherit this class
    // constructor is reserved word
    function Department(name) {
        this.name = name;
        // set as private so that we can add employee using addEmployee instead of modifying it
        this.employees = [];
    }
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log("Length", this.employees.length);
        console.log("Employees", this.employees);
    };
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.fiscalYear = 2002;
    return Department;
}());
//You can inherit only one class you cant inherit multiple classes
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(name, admins, reports) {
        var _this = _super.call(this, name) || this;
        _this.admins = admins;
        _this.lastReport = reports[0];
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log("Department :", this.name);
    };
    Object.defineProperty(ITDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error("No report found");
        },
        set: function (value) {
            if (!value) {
                throw new Error("Please pass in a valid value");
            }
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    //override Methods if wanted
    ITDepartment.prototype.addEmployee = function (name) {
        if (name === "Max") {
            return;
        }
        //this.employess we cant access through here because its private property for department
        this.employees.push(name);
    };
    ITDepartment.prototype.addReport = function (text) {
        this.lastReport = text;
    };
    return ITDepartment;
}(Department));
var AccountDepartment = /** @class */ (function (_super) {
    __extends(AccountDepartment, _super);
    function AccountDepartment(name, reports) {
        var _this = _super.call(this, name) || this;
        _this.lastReport = reports[0];
        return _this;
    }
    AccountDepartment.prototype.addReport = function (text) {
        this.lastReport = text;
    };
    AccountDepartment.prototype.describe = function () {
        console.log("Department :", this.name);
    };
    AccountDepartment.getInstance = function () {
        if (AccountDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountDepartment('d2', []);
        return this.instance;
    };
    return AccountDepartment;
}(Department));
//calling static methid
var accounting = AccountDepartment.getInstance();
var accounting2 = AccountDepartment.getInstance();
console.log(accounting, accounting2);
var employeeadd = Department.createEmployee("Max");
var IT = new ITDepartment("d1", ["Max"], []);
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
