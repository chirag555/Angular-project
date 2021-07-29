"use strict";
// public by default and used constructor
// class Customer{
//     firstName:string;
//     lastName:string;
//     constructor(theFirst:string, theLast:string){
//         this.firstName=theFirst;
//         this.lastName=theLast;
//     }
// }
//     let myCustomer=new Customer("Deepak","Chaurasiya");
//     console.log(myCustomer.firstName);
//     console.log(myCustomer.lastName);
// Using getter and setter 
var Customer = /** @class */ (function () {
    //constructore after defining variables
    // private _firstName:string;
    // private _lastName: string;  
    // constructor(theFirst:string, theLast:string){
    //     this._firstName=theFirst;
    //     this._lastName=theLast;
    // }
    //short cut constructor and directly declare variable
    function Customer(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    return Customer;
}());
var myCustomer = new Customer("Deepak", "Chaurasiya");
//set new name using the setter method
myCustomer.firstName = "chirag";
console.log(myCustomer.firstName);
//using the last name set by the costructor
console.log(myCustomer.lastName);
