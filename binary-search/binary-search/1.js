// 答えは合っているが、includes() メソッドは内部的にO(n)の時間複雑度で
// for文もO(n)の時間複雑度なので、O(log n)の時間複雑度という制約を満たしていない。

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
    if (!nums.includes(target)) {
      return -1;
    }
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) {
        return i;
      }
    }
  }
}
