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

function reverseString(str) {
    let reversed = "";
  
    for (let i = str.length - 1; i > -1; --i) {
      reversed = reversed + str[i];
    }
  
    return reversed;
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
    method 2 - iterate over string backwards (--i), starting at last index and going down to 0
*/

// TEST FILE
const reverseString = require('../reverse_string');

test("can handle an empty string", () => {
  expect(reverseString("")).toBe("");
});

test("can handle a single character", () => {
  expect(reverseString("a")).toBe("a");
}); 

test("can handle two characters", () => {
  expect(reverseString("ab")).toBe("ba");
});

test("can handle three characters", () => {
  expect(reverseString("cat")).toBe("tac");
});

test("can handle many characters", () => {
  expect(reverseString("sham-meow")).toBe("sham-meow".split("").reverse().join(""));
});

// SOLUTIONS FILE
function reverseString(str) {
    let reversed = "";

    for (let i = str.length - 1; i > -1; --i) {
        reversed = reversed + str[i];
    }

    return reversed;
    }

    // Please add your pseudocode to this file
    /**************************************************
     * initialize a variable called reversed with an empty string
     * 
     * iterate backwards through the input string:
     *    set reversed to reversed + current character
     * 
     * return reversed
     * ************************************************/


    // And a written explanation of your solution
    /**************************************************
     * If I iterate over the input string backwards, I should be able
     * to add whichever character I'm currently iterating over onto
     * my result string (""). For example, if the string is "ab", I'll iterate
     * over "b" first, add that to my result ("b"), and then iterate over
     * "a", and add that to my result next ("ba").
     * ************************************************/
