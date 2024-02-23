function findFirstDuplicate(arr) {
  
    for (i=0; i < arr.length - 1; i++) {
      if (arr[i] === arr[i+1]) {
        return arr[i]
      }
    }
  
    return -1
  };
  
  if (require.main === module) {
    // add your own tests in here
    console.log("Expecting: 3");
    console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));
  
    console.log("");
  
    console.log("Expecting: -1");
    console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
  
    console.log("");
  
    // If duplicate number is -1
    console.log("Expecting: -1");
    console.log("=>", findFirstDuplicate([1, -1, -1, 4]));
  
    console.log("");
    
    // If duplicate is at beginning
    console.log("Expecting: 1");
    console.log("=>", findFirstDuplicate([1, 1, 3, 4]));
  
    console.log("");
  
    // If duplicate is at the end
    console.log("Expecting: 4");
    console.log("=>", findFirstDuplicate([1, 2, 4, 4]));
  }
  
  module.exports = findFirstDuplicate;
  
// Please add your pseudocode to this file
/**
 * Only duplicates next to each other matter.
 * Initialize value to return at the end to be -1, so will just return or will change during process
 * loop over array
 *  see what next index is and see if it's equivalent to current index
 *    if it is return the index value, if not continue until the second to last index
 *    at the end of all that return the variable
 */

// TEST FILE
const findFirstDuplicate = require('../find_first_duplicate');

test('can handle an empty array', () => {
  expect(findFirstDuplicate([])).toBe(-1);
}); 

test('can handle an array containing one element', () => {
  expect(findFirstDuplicate([4])).toBe(-1);
});

test('finds the first duplicate when there is only one duplicate', () => {
  expect(findFirstDuplicate([2, 2])).toBe(2);
});

test('finds the first duplicate in an Array containing multiple duplicates', () => {
  expect(findFirstDuplicate([1, 2, 3, 3, 2, 1])).toBe(3);
});

// SOLUTIONS FILE
function findFirstDuplicate(arr) {
    const uniques = new Set();
  
    for (const value of arr) {
      if (uniques.has(value)) {
        return value;
      }
  
      uniques.add(value);
    }
  
    return -1;
  }
  
  // Please add your pseudocode to this file
  /******************************************************************
   * initialize an empty set called uniques
   * 
   * iterate through the input array:
   *    if the value is in uniques, return the value
   *    else add the value to the set
   * 
   * return -1 if no duplicate found during iteration
   * ***************************************************************/
  
  // And a written explanation of your solution
  /*******************************************************************
   * A Set is a data structure that contains only unique objects/values.
   * If I check if a value is in a Set before adding it, I'll know if there's
   * a duplicate. If there's a duplicate, I'll just return that value right 
   * away because that'll be the first duplicate in the input array. If we
   * exit iteration without returning anything, that means there's no duplicate, 
   * so we'll return -1
   * *******************************************************************/
  