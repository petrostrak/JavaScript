// default arguments
function  getScoreTest(name = 'Makaros', score = 100) {
  return `Name : ${name} - Score: ${score}`;
}

// A 25% tip of 40$ would be 10$

function getTip(total, tipPercent) {
  let percent = tipPercent * 100;
  let result = total * tipPercent;
  return `A ${tipPercent}% tip of ${total} would be ${result}`;
}

console.log(getTip(60, 25));
