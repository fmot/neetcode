// Stackを使って解く。時間計算量はO(n)になる。

class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    const stack = [];
    const closeToOpen = {
      ")": "(",
      "]": "[",
      "}": "{",
    };

    for (let c of s) {
      if (c in closeToOpen) {
        // 閉じ括弧の場合
        if (stack.length && stack[stack.length - 1] === closeToOpen[c]) {
          stack.pop();
        } else {
          return false;
        }
      } else {
        // 開き括弧の場合
        stack.push(c);
      }
    }

    return stack.length === 0;
  }
}
