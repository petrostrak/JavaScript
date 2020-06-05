// function - input, code, output

let greetUser = function(){
  console.log('Welcome User');
}

greetUser();

let square = function(number){
  let result = number * number;
  return result;
}

let value = square(3);
console.log(value);

let otherValue = square(10);
console.log(otherValue);

// Challenge convertFahrenheitToCelsius

function convertFahrenheitToCelsius(fahrenheitTemp){
  let conversion = (fahrenheitTemp - 32) * 5/9;
  return conversion;
}

let celcius = convertFahrenheitToCelsius(100);
console.log(celcius);
