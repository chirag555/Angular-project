"use strict";
// Normal inheritance Program
// import {Shape} from './Shape';
// import {Circle} from './Circle';
// import { Rectangle } from './Rectangle';
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myCircle = new Circle_1.Circle(5, 10, 15);
var myRectangle = new Rectangle_1.Rectangle(6, 9, 10, 20);
var theShapes = [];
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (var _i = 0, theShapes_1 = theShapes; _i < theShapes_1.length; _i++) {
    var tempShapes = theShapes_1[_i];
    console.log(tempShapes.getInfo());
    console.log("Area : " + tempShapes.calculateArea());
}
