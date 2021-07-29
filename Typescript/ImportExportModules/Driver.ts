import {Customer} from './Customer';
let myCustomer=new Customer("Deepak","Chaurasiya");
    
//set new name using the setter method
myCustomer.firstName="chirag";
console.log(myCustomer.firstName);

//using the last name set by the costructor
console.log(myCustomer.lastName);
