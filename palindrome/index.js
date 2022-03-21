// Given a string, return true or false depending if the string
// is a palindrome.  Palindromes are words that read the same backwards
// and forwards. Make sure it is case insensitive!
// --- Examples:
//   palindrome("Madam") === true
//   palindrome("love") === false

function palindrome(str) {
  function lowerCase(string) {
    let lowerString = "";
    for (let i = 0; i < string.length; i++) {
      const charCode = string.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        lowerString = lowerString + String.fromCharCode(charCode + 32);
      } else {
        lowerString = lowerString + string[i];
      }
    }
    return lowerString;
  }
  function reverse(string) {
    let reversed = "";
    for (let i = 0; i < string.length; i++) {
      reversed = string[i] + reversed;
    }
    return reversed;
  }
  const lowerStr = lowerCase(str);
  return reverse(lowerStr) === lowerStr;

  /*  
 const lowerStr = str.toLowerCase();
 const reverseLowerStr = lowerStr.split("").reverse().join("");
  return reverseLowerStr === lowerStr;
   */
}

mocha.setup("bdd");
const { assert } = chai;

describe("Palindrome", () => {
  it('"bcb" is a palindrome', () => {
    assert.equal(palindrome("bcb"), true);
  });
  it('"   bcb" is not a palindrome', () => {
    assert.equal(palindrome(" bcb"), false);
  });
  it('"bcb   " is not a palindrome', () => {
    assert.equal(palindrome("bcb "), false);
  });
  it('"love" is not a palindrome', () => {
    assert.equal(palindrome("love"), false);
  });
  it('"699996" a palindrome', () => {
    assert.equal(palindrome("699996"), true);
  });
  it('"racecar" a palindrome', () => {
    assert.equal(palindrome("bcb"), true);
  });
  it("is case insensitive.", () => {
    assert.equal(palindrome("Trunk knurt"), true);
  });
});

mocha.run();
