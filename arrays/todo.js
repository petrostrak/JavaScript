const toDo = ['wake up', 'brush teeth', 'make coffe', 'study Js', 'sleep'];

console.log(`You have ${toDo.length} things to do!`);
console.log(`The first thing is to ${toDo[0]} and the last to ${toDo[toDo.length -1]}`);

for(let i = 0; i < toDo.length; i++){
  console.log(toDo[i]);
}
