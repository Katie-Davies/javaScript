let mood = 'sleepy';
let tirednessLevel = 6;

if (mood==='sleepy' && tirednessLevel=== 6) {
  console.log("Time to go to sleep");
} else {
  console.log("not bed time yet");
}


let userName = "Katie"

if (userName) {
  console.log(`Hello ${userName}!`);
} else {
  console.log("Hello!");
}

const userQuestion = "Will I adopt a new puppy soon?"

console.log(`${userName} has asked ${userQuestion}`);

let randomNumber = Math.floor(Math.random()*8)
console.log(randomNumber);

let eightBall = ""

switch (randomNumber) {
  case 0 :
  eightBall = 'It is certain';
  break
  case 1 :
  eightBall ='It is decidedly so';
  break 
  case 2 : 
  eightBall = 'Reply hazy try again';
  break
  case 3 : 
  eightBall ='Cannot predict now';
  break 
  case 4 :
  eightBall ='Do not count on it';
  break
  case 5 : 
  eightBall ='My sources say no';
  break
  case 6 : 
  eightBall ='Outlook not so good';
  break
  case 7 : 
  eightBall ='Signs point to yes';
  break
  default : 
  eightBall ="Better luck next time";
}

console.log(`The magic eight ball says ${eightBall}`);