"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer_1 = require("./Customer");
var myCustomer = new Customer_1.Customer("Deepak", "Chaurasiya");
//set new name using the setter method
myCustomer.firstName = "chirag";
console.log(myCustomer.firstName);
//using the last name set by the costructor
console.log(myCustomer.lastName);
