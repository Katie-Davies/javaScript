
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    
    if ( userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
      } else {
      console.log("Error please put in a valid ");
      }
    };
    
    const getComputerChoice = () => {
      const randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    }
    };
    
    const determineWinner = (userChoice, computerChoice) => {
      if (userChoice === 'bomb') {
        return 'You Win!'
      }
      if (userChoice === computerChoice) {
      return 'Game is a tie';
      }
      if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
          return 'Computer has won';
        } else {
      return 'Congrats, you have won!';
        }
      }
    
      if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
          return 'Computer has won';
        } else {
          return 'Congrats, you have won!';
        }
      }
    
      if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
          return 'Computer has won!';
        } else { 
          return 'Congrats, you have won!';
        }
      }
    }; 
    
    const playGame = () => {
      let userChoice = getUserChoice('scissors');
      let computerChoice = getComputerChoice();
      console.log(userChoice);
      console.log(computerChoice);
      console.log (determineWinner(userChoice, computerChoice));
    };
    
    playGame();
    