// Returning objects from functions

let myBook = {
  title : 'The Lord Of The Rings - The Fellowship Of The Ring',
  author : 'Tolkien',
  pages : 326
}

let otherBook = {
  title : 'A Peoples History',
  author : 'Howard Zinn',
  pages : 723
}

function book(obj){
  return{
    summery : `${obj.title} by ${obj.author}`,
    pageCountSummery : `${obj.title} is ${obj.pages} pages logn!`
  }
}

let bookSummery = book(myBook);
let otherBookSummery = book(otherBook);

console.log(bookSummery.summery);
console.log(otherBookSummery.pageCountSummery);

// Create function that takes fahrenheit and returns object with three temperatures
// let celcius = (fahrenheit - 32) * 5/9;
// let kelvin = (fahrenheit + 456,67) * 5/9;

function tempInput(temp){
  let fahrenheit = temp;
  let celcius = (temp - 32) * 5/9;
  let kelvin = (temp + 456,67) * 5/9;
  return{
    celcius : `The temperature in celcius is ${celcius}`,
    kelvin : `The temperature in kelvin is ${kelvin}`,
    fahrenheit : `The temperature in fahrenheit is ${temp}`
  }
}

let result = tempInput(28);
console.log(result.celcius);
