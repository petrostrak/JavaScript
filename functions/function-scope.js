// Lexical Scope (Static Scope)
// Global Scope - Defined outside  of all code blocks
// Local Scope - Defined inside  a code block

//In a scope, you can access variables defined in that scope, or in any parent,
//ancestor scope.

//----------> Global Scope ( convertFahrenheitToCelsius, tempOne, tempTwo )
//   |------> Local Scope ( fahrenheitTemp, celcius )
//       |--> Local Scope ( isFreezing )

function convertFahrenheitToCelsius(fahrenheitTemp){
  let celcius = (fahrenheitTemp - 32) * 5/9;

  if (celcius <= 0) {
    let isFreezing = true;
  }
  return celcius;
}

//In Global Scope we cannot access variables that are created in Local Scope such as fahrenheitTemp and conversion

let tempOne = convertFahrenheitToCelsius(100);
let tempTwo = convertFahrenheitToCelsius(145);
console.log(tempOne);
console.log(tempTwo);
