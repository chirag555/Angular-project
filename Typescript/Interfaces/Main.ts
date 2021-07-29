import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { HockeyCoach } from "./HockeyCoach";

let myCricketCoach =new CricketCoach;
let myHockeyCoach=new HockeyCoach;
let theCoaches: Coach[]=[];

theCoaches.push(myCricketCoach);
theCoaches.push(myHockeyCoach);

for(let tempCoach of theCoaches){
    console.log(tempCoach.getDailyWorkout());
}