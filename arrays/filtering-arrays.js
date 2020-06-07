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
}];
function findGame(game, query){
  return gameList.filter(function(game, index){
    const isTitleMatch = game.title.toLowerCase().includes(query.toLowerCase());
    const isGenderMatch = game.gender.toLowerCase().includes(query.toLowerCase());
    return isTitleMatch || isGenderMatch;
  })
}

const search = findGame(gameList, 'HORror')
console.log(search);
