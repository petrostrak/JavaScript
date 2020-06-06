const toDo = ['wake up', 'brush teeth', 'make coffe', 'study Js', 'sleep'];

console.log(`You have ${toDo.length} things to do!`);
//console.log(`The first thing is to ${toDo[0]} and the last to ${toDo[toDo.length -1]}`);

toDo.forEach(function(i, index){
  console.log(`${index + 1}. ${i}`);
})


// for(let i = 0; i < toDo.length; i++){
//   console.log(toDo[i]);
// }

// delete 3rd input
// add new item at the end
// delete the 1st item from the list
// console.log('***removing 3rd item from the list***');
// toDo.splice(2, 1);
// for(let i = 0; i < toDo.length; i++){
//   console.log(toDo[i]);
// }
// console.log('adding new item at the end');
// toDo.push('repeat')
// for(let i = 0; i < toDo.length; i++){
//   console.log(toDo[i]);
// }
// console.log('deleting the 1st item of the list');
// toDo.shift();
// for(let i = 0; i < toDo.length; i++){
//   console.log(toDo[i]);
// }

//toDo.push('repeat');
// function array(){
//   for(let i = 0; i < toDo.length; i++){
//     console.log(toDo[i]);
//   }
// }
//
// console.log(array());
// toDo.pop();
// console.log(array());
