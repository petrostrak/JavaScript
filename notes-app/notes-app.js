// console.log('this is from a a different path');

// // query and remove
// // const p = document.querySelector('p')
// // console.log(p);
// // p.remove();

// // query all and remove
// const ps = document.querySelectorAll('p')
// ps.forEach(function(p){
//   p.textContent = 'Practice makes perfect'
//   //console.log(p.textContent);
//   //p.remove();
// })

// Add new element in the HTML 
// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'This is a new element created with js!';
// document.querySelector('body').appendChild(newParagraph);

const gameList = [{
  title : 'Death Stranding',
  gender: 'Action / Adventure',
  isGood : false
}, {
  title : 'Bloodbonre',
  gender : 'Horror',
  isGood : true
}, {
  title : 'Sekiro',
  gender : 'Action',
  isGood : true
}, {
  title : 'Samurai Shodawn',
  gender : 'fighting',
  isGood : false
}]

const gameRate = gameList.filter(function(rating){
  return !rating.isGood;
})

const summery = document.createElement('p');
summery.textContent = `You have ${gameRate.length} games that are not so good.`
document.querySelector('body').appendChild(summery);

gameList.forEach(function(game){
  const addedGame = document.createElement('p');
  addedGame.textContent = game.title;
  document.querySelector('body').appendChild(addedGame);
})

document.querySelector('#click').addEventListener('click', function(event){
  event.target.textContent = 'Thanks!'
})

// document.querySelector('#delete').addEventListener('click', function(event){
//   event.target.textContent = 'Deleted!'
// })

document.querySelector('#update').addEventListener('click', function(event){
  event.target.textContent = 'Updated!'
})

document.querySelector('#delete').addEventListener('click', function(){
  document.querySelectorAll('.game').forEach(function(game){
    game.remove();
  })
})