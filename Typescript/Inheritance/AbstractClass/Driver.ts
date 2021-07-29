// Normal inheritance Program
// import {Shape} from './Shape';
// import {Circle} from './Circle';
// import { Rectangle } from './Rectangle';

// let myShape=new Shape(10,12);
// console.log(myShape.getInfo());

// let myCircle=new Circle(5,10,15);
// console.log(myCircle.getInfo());

// let myRectangle=new Rectangle(6,9,10,20);
// console.log(myRectangle.getInfo());



//Adding classes to array
import {Shape} from './Shape';
import {Circle} from './Circle';
import { Rectangle } from './Rectangle';

let myCircle=new Circle(5,10,15);
let myRectangle=new Rectangle(6,9,10,20);

let theShapes:Shape[]=[];
theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let tempShapes of theShapes){
    console.log(tempShapes.getInfo());
    console.log("Area : "+tempShapes.calculateArea())
}


