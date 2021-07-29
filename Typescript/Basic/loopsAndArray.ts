console.log("Loops and Arrays");
let review:number[]=[5,6,7,2,4,5,7];
let sports:string[]=["cricket","hockey","Table Tennis"];
let sum:number=0;
for(let i=0;i<review.length;i++)
{
    console.log(review[i]);
    sum+=review[i];
    
}
console.log("Sum : "+sum);

for(let tempSports of sports){
    console.log(tempSports);
    if(tempSports=="cricket"){
        console.log("Player = 11");
    }
}



console.log("\nNew Array");
sports.push("VolleyBall");
sports.push("FootBall");
sports.pop();

for(let tempSports of sports){
    console.log(tempSports);
    if(tempSports=="cricket"){
        console.log("Player = 11");
    }
}