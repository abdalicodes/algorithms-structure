// Write a function that returns the provided string with
// the first letter of each word capitalized. Make sure the
// rest of the word is in lower case.
// --- Examples
//   capitalize("I'm a little tea pot") --> 'I'm A Little Tea Pot'
//   capitalize('sHoRt AnD sToUt') --> 'Short And Stout'

function capitalize(str) {
  /*   str = str.split(" "); // str = ['one', 'two', 'three']
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].slice(1).toLowerCase();
  }
  str = str.join(" "); 
  return str;
  */
  return str
    .split(" ")
    .map((string) => string[0].toUpperCase() + string.slice(1).toLowerCase())
    .join(" ");
}

mocha.setup("bdd");
const { assert } = chai;

describe("Capitalization", () => {
  it("capitalizes the first letter of each word", () => {
    assert.equal(capitalize("I'm a little tea pot"), "I'm A Little Tea Pot");
  });
  it("lowercases the rest of the word", () => {
    assert.equal(capitalize("sHoRt AnD sToUt"), "Short And Stout");
  });
});

mocha.run();
