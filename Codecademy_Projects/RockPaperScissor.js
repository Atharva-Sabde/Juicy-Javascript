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
  console.log(x)
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

