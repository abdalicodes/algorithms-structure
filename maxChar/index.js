// Return the character most commonly used in the string.
// --- Examples
// maxChar("I loveeeeeee noodles") === "e"
// maxChar("1337") === "3"

function maxChar(str) {
  /* const chars = {};
  let maxCharIndex = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    chars[char] = (chars[char] || 0) + 1;
  }
  const charValues = Object.values(chars);
  for (let j = 0; j < charValues.length; j++) {
    maxCharIndex = charValues[j] > charValues[maxCharIndex] ? j : maxCharIndex;
  }
  return str[maxCharIndex]; */

  const chars = {};
  let maxIndex = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    chars[char] = chars[char] + 1 || 1;
    if (chars[char] > chars[str[maxIndex]]) maxIndex = i;
  }
  return str[maxIndex];
}

mocha.setup("bdd");
const { assert } = chai;

describe("Max Character", () => {
  it("maxChar() finds the most frequently used character", () => {
    assert.equal(maxChar("a"), "a");
    assert.equal(maxChar("test"), "t");
    assert.equal(maxChar("I loveeeeee noodles"), "e");
    assert.equal(maxChar("1337"), "3");
  });
});

mocha.run();
