//const toDo = ['wake up', 'brush teeth', 'make coffee', 'study Js', 'sleep'];
//
// const toDO = [{
//   title : 'My next trip',
//   body : 'I would like to travel to Japan'
// }, {
//   title : 'Habbits on work',
//   body : 'Exercise and eat better'
// }, {
//   title : 'Office modifications',
//   body : 'Get a new seat'
// }];
//
// //console.log(`You have ${toDo.length} things to do!`);
// // for(let i = toDo.length -1; i >= 0; i--){
// //   const counter = i + 1;
// //   console.log(`${counter}. ${toDo[i]}`);
// // }
// //console.log(toDo.indexOf({})); // if the result is -1, it means that there was no match.
// //console.log(toDO);
//
// const index = toDO.findIndex(function(i, index){
//   console.log(i);
//   return i.title === 'My next trip';
// })
//
// console.log(index);

const gameList = [{
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


function removeByTextValue(list, title){
  const index = list.findIndex(function(list){
    return list.title.toLowerCase() === title.toLowerCase()
  })
  if(index > -1){
    list.splice(index, 1);
  }
}

console.log(gameList);
removeByTextValue(gameList, 'seKiro');
console.log(gameList);


// function games(game, gameTitle) {
//   game.findIndex(function(videoGame, index){
//     return videoGame.title.toLowerCase() === gameTitle.toLowerCase();
//   })
//   return game[index];
// }

// function games(listOfGames, gameTitle) {
//   return listOfGames.find(function(videoGames, index){
//     return videoGames.title.toLowerCase() === gameTitle.toLowerCase();
//   })
// }
//
// const example = games(gameList, 'death StraNding');
// console.log(example);

// const search = list.findIndex(function(game, index){
//   return game.title === 'Sekiro'
// })
//
// console.log(search);
