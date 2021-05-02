var userInput = 'rock'
const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
if(userInput === 'rock' || userInput === 'scissors' || userInput==='paper'){
  return userInput;
}else{
  console.log("enter valid input")
}
};

// console.log(getUserChoice(''));
const getComputerChoice = () => {
  var x = (Math.floor(Math.random() * 3))
  if(x == 1){
    return 'rock'
  }
  else if(x == 2){
    return 'paper'
  }else{
    return 'scissors'
  }
}

const determineWinner = (userChoice , computerChoice) => {
  if(userChoice == computerChoice){
    return 'tie , go fuck yourself bitch!'
  }
  else{
    if(userChoice == 'rock'){
      if(computerChoice== 'paper'){
        return 'Computer Won!'
      }else{
        return 'User Won!'
      } 
    }
    if(userChoice == 'paper'){
        if(computerChoice == 'scissors'){
        return 'Computer Won!'
        }else{
          return 'User Won!'
        }
    }
    if(userChoice == 'scissors'){
        if(computerChoice == 'rock'){
            return 'Computer Won!'
        }else{
            return 'User Won!'
        }
    }
  }
  }   // method close

//;

function playGame(){
  userChoice = getUserChoice('rock');
  computerChoice = getComputerChoice();

  console.log(userChoice)
  console.log(computerChoice)
 console.log(determineWinner(userChoice , computerChoice))
}


playGame()


