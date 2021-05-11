var userInput = 'bomb'
const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
if(userInput === 'rock' || userInput === 'scissors' || userInput==='paper' || userInput === 'bomb'){
  return userInput;
}else{
  console.log("enter valid input")
}
};
-

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
    return 'tie , Try again!'
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
    if(userChoice == 'bomb'){
      return 'User WON!'
    }
  }
  }   // method close

function playGame(){
  userChoice = getUserChoice('bomb');
  computerChoice = getComputerChoice();
  
  console.log('USER :     ' + userChoice)
  console.log('COMPUTER : '+ computerChoice)
  console.log();
 console.log(determineWinner(userChoice , computerChoice))
}

// -----------driver-------------

playGame()


