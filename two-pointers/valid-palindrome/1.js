//Reverse String。時間複雑度O(n)、空間複雑度O(n)

class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    let newString = "";
    for (let i = 0; i < s.length; i++) {
      if ((s[i] >= "a" && s[i] <= "z") || (s[i] >= "A" && s[i] <= "Z")) {
        newString += s[i].toLowerCase();
      } else if (s[i] >= "0" && s[i] <= "9") {
        newString += s[i];
      }
    }

    return newString === newString.split("").reverse().join("");
  }
}
