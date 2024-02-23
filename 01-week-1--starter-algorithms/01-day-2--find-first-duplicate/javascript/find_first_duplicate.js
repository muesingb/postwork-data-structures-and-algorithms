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
