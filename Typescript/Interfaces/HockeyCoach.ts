import{Coach} from './Coach';
export class HockeyCoach implements Coach{
    getDailyWorkout(): string {
        return " Run 10 KM ";
    }
   
}