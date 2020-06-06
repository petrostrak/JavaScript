let name = 'Petros Trakadas';
// length
console.log(`The length of the variable name is ${name.length}.`);
// to upper case method
console.log(`Let's convert the name to upper case : ${name.toUpperCase()}`);
// includes method
let password = '123pass098';
console.log(`Does the password contain the word "pass"? ${password.includes('pass')}`);
// trim method to clear white space between the string
console.log(name.trim());

// challenge isValidPassword (.lenth >= 8 chars && !.includes('password'))

function isValidPassword(pass){
  return pass.length >= 8 && !pass.includes('password');
}

let validation = isValidPassword('password123');
console.log(`The validation is ${validation}, either the password lenth is less than 8 characters, or it contains the word "password".`);
