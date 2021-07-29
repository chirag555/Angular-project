"use strict";
// Normal inheritance Program
// import {Shape} from './Shape';
// import {Circle} from './Circle';
// import { Rectangle } from './Rectangle';
Object.defineProperty(exports, "__esModule", { value: true });
// let myShape=new Shape(10,12);
// console.log(myShape.getInfo());
// let myCircle=new Circle(5,10,15);
// console.log(myCircle.getInfo());
// let myRectangle=new Rectangle(6,9,10,20);
// console.log(myRectangle.getInfo());
//Adding classes to array
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myShape = new Shape_1.Shape(10, 12);
var myCircle = new Circle_1.Circle(5, 10, 15);
var myRectangle = new Rectangle_1.Rectangle(6, 9, 10, 20);
var theShapes = [];
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (var _i = 0, theShapes_1 = theShapes; _i < theShapes_1.length; _i++) {
    var tempShapes = theShapes_1[_i];
    console.log(tempShapes.getInfo());
}
