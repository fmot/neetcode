// O(n^2)になってるからパフォーマンス悪い

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = 0; j < nums.length; j++) {
        if (i !== j) {
          if (nums[i] + nums[j] === target) return [i, j];
        }
      }
    }
  }
}
