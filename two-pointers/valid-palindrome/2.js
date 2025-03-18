// Two Pointersを使用した場合。時間複雑度O(n)、空間複雑度O(1)なのでメモリをほとんど消費せず、空間効率に優れている

class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    let l = 0,
      r = s.length - 1;

    while (l < r) {
      while (l < r && !this.alphaNum(s[l])) {
        l++;
      }

      while (r > l && !this.alphaNum(s[r])) {
        r--;
      }

      if (s[l].toLowerCase() !== s[r].toLowerCase()) {
        return false;
      }
      l++;
      r--;
    }
    return true;
  }

  alphaNum(c) {
    return (
      (c >= "A" && c <= "Z") || (c >= "a" && c <= "z") || (c >= "0" && c <= "9")
    );
  }
}
