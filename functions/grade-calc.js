// student score - total possible score
// 15/20 -> You got a C  (75%)
// A 90->100, B 80->89, C 70->79, D 60->69, F 0->59



function testResult(studentScore, totalPossibleScore = 20) {
  const percentage = (studentScore / totalPossibleScore) * 100;
  let letterGrade = '';
  if (percentage >= 90) {
    letterGrade = 'A';
  }else if (percentage >=89) {
    letterGrade = 'B';
  }else if (percentage >= 79) {
    letterGrade = 'C';
  }else if (percentage >= 69) {
    letterGrade = 'D';
  }else
    letterGrade = 'F';

  return `You got an ${letterGrade} (${percentage}%)`
}

const result = testResult(14);
console.log(result);
