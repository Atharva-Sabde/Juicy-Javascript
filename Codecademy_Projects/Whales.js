var input = 'a whale of a deal!'
const vowel = ['a','e','i' ,'o', 'u']

 resultArray = [];

for(let i = 0 ; i<input.length; i++){
  for(let j=0 ; j<vowel.length ; j++){
    let temp = input.charAt(i);
    if(temp === vowel[j]){
      resultArray.push(temp);
      if(temp == 'e' ||  temp == 'u'){
        resultArray.push(temp)
      }
    }
  }
}
// resultArray.toUpperCase()
console.log(resultArray.join('').toUpperCase())