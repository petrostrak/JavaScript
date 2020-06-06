let isGuestOneVegan = false;
let isGuestTwoVegan = false;

//are both vegan?
//at least one is vegan
//else, offer anything on the menu

if (isGuestOneVegan && isGuestTwoVegan === true) {
  console.log('both vegan');
} else if (isGuestOneVegan || isGuestTwoVegan == true) {
  console.log('at least on is');
} else {
  console.log('whatever');
}
