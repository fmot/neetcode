// Hash Mapで解いたパターン(O(n))
class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const prevMap = {};
    for (let i = 0; i < nums.length; i++) {
      let diff = target - nums[i];
      if (diff in prevMap) {
        return [prevMap[diff], i];
      }

      prevMap[nums[i]] = i;
    }
    return [];
  }
}
