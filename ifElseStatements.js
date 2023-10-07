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



let earlyRunner = true;
let runnersAge = 14;

if (earlyRunner && runnersAge > 18) {
  raceNumber += 1000;
}

if (earlyRunner && runnersAge > 18) {
  console.log(`You are running at 9.30am. Your race number is ${raceNumber}.`);
} else if (runnersAge >18 && !earlyRunner) {
  console.log(`You will race at 11am and your race number is ${raceNumber}`);
} else  if (earlyRunner && runnersAge < 18){ 
  console.log(`Youth registrants run at 12.30pm (regardless of registration). Your race number is ${raceNumber}`);
} else {
  console.log("See registraton desk");
}





