// Directions
// Return a string with the order of characters reversed
// --- Examples
//   reverse('abcd') === 'dcba'
//   reverse('Hello!') === '!olleH'

function reverse(str) {
  /* 
   let r = "";
    for (let i = 0; i < str.length; i++) {
      r = str[i] + r;
    }
    return r;
    */
  return str.split("").reverse().join("");
  /* 
    let r = [];
    for (const t of str) {
      r.unshift(t);
    }
    return r.join("");
    */
}

mocha.setup("bdd");
const { assert } = chai;

describe("String Reversal", () => {
  it("reverse() correctly reverses string", () => {
    assert.equal(reverse("ffaa"), "aaff");
    assert.equal(reverse("  aaff"), "ffaa  ");
  });
});

mocha.run();
