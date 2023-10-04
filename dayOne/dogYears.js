//variable for my age
let humanYears = 33;
//var to work out my age in dog years
let dogYears = ((humanYears-2)*4)+ (10.5*2);


console.log(`My age is ${humanYears} so in dog years I am ${dogYears} old.`)

//Another way to code 

const myAge = 45;
//first two years of dogs life
let earlyYears = 2;
// to calculate the first two years 
earlyYears*= 10.5;

let laterYears = myAge -2;
// multiply by 4 
laterYears *= 4;
//calculating dog years all together
 let myAgeinDogYears = earlyYears + laterYears;
//writes my name all in lowercase
let myName = "Katie".toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeinDogYears} years old in dog years.`);