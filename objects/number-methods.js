let number = Math.PI;

console.log(number.toFixed(10));
console.log(Math.round(number));

// roll

function guess(makeGuess){
  let min = 1;
  let max = 5;
  let random = Math.floor(Math.random() * (max - min +1)) + min ;
  return makeGuess === random;
}

console.log(`Your guess was ${guess(1)}.`);
