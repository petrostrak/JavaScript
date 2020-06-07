//const toDo = ['wake up', 'brush teeth', 'make coffee', 'study Js', 'sleep'];

const toDO = [{
  title : 'My next trip',
  body : 'I would like to travel to Japan'
}, {
  title : 'Habbits on work',
  body : 'Exercise and eat better'
}, {
  title : 'Office modifications',
  body : 'Get a new seat'
}];

//console.log(`You have ${toDo.length} things to do!`);
// for(let i = toDo.length -1; i >= 0; i--){
//   const counter = i + 1;
//   console.log(`${counter}. ${toDo[i]}`);
// }
//console.log(toDo.indexOf({})); // if the result is -1, it means that there was no match.
//console.log(toDO);

const index = toDO.findIndex(function(i, index){
  console.log(i);
  return i.title === 'My next trip';
})

console.log(index);

const list = [{
  title : 'Death Stranding',
  gender: 'Action / Adventure'
}, {
  title : 'Bloodbonre',
  gender : 'Horror'
}, {
  title : 'Sekiro',
  gender : 'Action'
}, {
  title : 'Samurai Shodawn',
  gender : 'fighting'
}]

const search = list.findIndex(function(game, index){
  return game.title === 'Sekiro'
})

console.log(search);
