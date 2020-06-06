// Objects

let myBook = {
  title : 'The Lord Of The Rings - The Fellowship Of The Ring',
  author : 'Tolkien',
  pages : 326
}

console.log(`${myBook.title} is written by ${myBook.author} and has ${myBook.pages} pages in total.`);

let person = {
  name : 'Petros',
  age : 34,
  location : 'Athens',
  isMarried : false
}

console.log(`My name is ${person.name}, I m ${person.age} years old, I leave in ${person.location}.`);

person.age = person.age + 1;

console.log(`My name is ${person.name}, I m ${person.age} years old, I leave in ${person.location}.`);
