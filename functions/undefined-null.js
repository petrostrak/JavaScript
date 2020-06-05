let name = 'Petros!'

if (name === undefined) {
  console.log('Please provide a name.');
}else {
  console.log(name); // prints undefined, meaning there is an absense of a value
}

function square(number) {
  console.log(number);
}

let result = square();

console.log(result);

// null as assigned value

let age = 34;

age = null;

console.log(age);
