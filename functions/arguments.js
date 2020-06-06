// Multiple arguments
function add(a, b) {
  return a + b;
}

let result = add(4, 9);
console.log(result);
console.log(add(4, 9));

// default arguments
function  getScoreTest(name, score) {
  console.log(name);
  console.log(score);
}

console.log(getScoreTest('Petros', 64));

function getTip(total, tipPercent = .25) {
  return total * tipPercent;
}

let results = getTip(100);
console.log(results);
