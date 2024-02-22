function reverseString(str) {
  if (typeof str === "string") {
    let rev_str = []

    for (let i=0; i < str.length; i++) {
      rev_str.unshift(str[i])
    };
  
    return rev_str.join("")
  } else {
    return 'only strings allowed'
  };
};

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  console.log("");

  // not string type
  console.log("Expecting: 'only strings allowed'");
  console.log("=>", reverseString(123));

  console.log("");

  // special characters
  console.log("Expecting: '%$tset'");
  console.log("=>", reverseString("test$%"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
/* 
Pseudocode:
check that type is string
  if it is:
    method 1 - initiate a new array and as you loop through the string, add each to index 0 or unshift?
    method 2 - split string?
*/
