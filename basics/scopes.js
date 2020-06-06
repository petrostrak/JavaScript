// Lexical Scope (Static Scope)
// Global Scope - Defined outside  of all code blocks
// Local Scope - Defined inside  a code block

//In a scope, you can access variables defined in that scope, or in any parent,
//ancestor scope.

//----------> Global Scope varOne
//      |---> Local Scope varFour
//   |------> Local Scope varTwo
//  |-------> Local Scope var Three

let varOne = 'varOne'; //Global variable

if(true){
  let varTwo = 'varTwo'; //Local variable

  if(true){
    let varFour = 'varFour';
    console.log(varFour + ' in nested loop');
    console.log(varTwo  + ' in nested loop');
    console.log(varOne  + ' in nested loop');
    console.log(varThee + ' in nested loop'); // Cannot be seen!!
  }
}

if(true){
  let varThee = 'varThree';
}
