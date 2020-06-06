// Variable shadowing

// Lexical Scope (Static Scope)
// Global Scope - Defined outside  of all code blocks
// Local Scope - Defined inside  a code block

//In a scope, you can access variables defined in that scope, or in any parent,
//ancestor scope.

//----------> Global Scope varOne
//      |---> Local Scope varFour
//   |------> Local Scope varTwo
//  |-------> Local Scope var Three

//let name = 'Petros'; //Global variable

if(true){
  //let name = 'Mixalaras'; //Local variable

  if(true){
    name = 'Asimarakos'; // Leaked global. When we declare a variable but never defined.
    console.log(name);

  }
}

if(true){
  console.log(name);
}
