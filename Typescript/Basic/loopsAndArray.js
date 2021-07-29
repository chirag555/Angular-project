"use strict";
console.log("Loops and Arrays");
var review = [5, 6, 7, 2, 4, 5, 7];
var sports = ["cricket", "hockey", "Table Tennis"];
var sum = 0;
for (var i = 0; i < review.length; i++) {
    console.log(review[i]);
    sum += review[i];
}
console.log("Sum : " + sum);
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var tempSports = sports_1[_i];
    console.log(tempSports);
    if (tempSports == "cricket") {
        console.log("Player = 11");
    }
}
console.log("\nNew Array");
sports.push("VolleyBall");
sports.push("FootBall");
sports.pop();
for (var _a = 0, sports_2 = sports; _a < sports_2.length; _a++) {
    var tempSports = sports_2[_a];
    console.log(tempSports);
    if (tempSports == "cricket") {
        console.log("Player = 11");
    }
}
