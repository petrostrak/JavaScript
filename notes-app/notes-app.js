console.log('this is from a a different path');

// query and remove
// const p = document.querySelector('p')
// console.log(p);
// p.remove();

// query all and remove
const ps = document.querySelectorAll('p')
ps.forEach(function(p){
  p.textContent = 'Practice makes perfect'
  //console.log(p.textContent);
  //p.remove();
})
