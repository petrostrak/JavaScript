const gameList = [{
  title : 'Death Stranding',
  gender: 'Action / Adventure',
  isGood: false
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
}];

// if a comes first we return -1
// if b comes first we return 1
// if no change we return 0

function gameRating(listOfGames){
  listOfGames.sort(function(a, b){
    if(!a.isGood && b.isGood){
      return -1;
    }else if(!b.isGood && a.isGood){
      return 1;
    }else{
      return 0;
    }
  })
}

gameRating(gameList);
console.log(gameRating);

function gameSorting(listOfGames){
  listOfGames.sort(function(a, b){
    if(a.gender.toLowerCase() < b.gender.toLowerCase() ){
      return -1;
    }else if (b.gender.toLowerCase() < a.gender.toLowerCase()) {
      return 1;
    }else{
      return 0;
    }
  })
}

gameSorting(gameList);
console.log(gameList);
