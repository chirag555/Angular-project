"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CricketCoach_1 = require("./CricketCoach");
var HockeyCoach_1 = require("./HockeyCoach");
var myCricketCoach = new CricketCoach_1.CricketCoach;
var myHockeyCoach = new HockeyCoach_1.HockeyCoach;
var theCoaches = [];
theCoaches.push(myCricketCoach);
theCoaches.push(myHockeyCoach);
for (var _i = 0, theCoaches_1 = theCoaches; _i < theCoaches_1.length; _i++) {
    var tempCoach = theCoaches_1[_i];
    console.log(tempCoach.getDailyWorkout());
}
