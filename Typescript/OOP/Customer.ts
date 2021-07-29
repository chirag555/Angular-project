
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

class Customer{

    //constructore after defining variables
    // private _firstName:string;
    // private _lastName: string;  
    // constructor(theFirst:string, theLast:string){
    //     this._firstName=theFirst;
    //     this._lastName=theLast;
    // }


    //short cut constructor and directly declare variable
    constructor(private _firstName:string,
                private _lastName:string){}

    set firstName(value:string){
        this._firstName=value;
        
    }
    get firstName():string{
        return this._firstName;
    }
     
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
}

    let myCustomer=new Customer("Deepak","Chaurasiya");
    
    //set new name using the setter method
    myCustomer.firstName="chirag";
    console.log(myCustomer.firstName);

    //using the last name set by the costructor
    console.log(myCustomer.lastName);
