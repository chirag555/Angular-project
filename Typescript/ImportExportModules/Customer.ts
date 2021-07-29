
export class Customer{

  
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

