// 反復的二分探索(Iterative Binary Search)で求めたパターン。時間複雑度はO(log n)になるので配列が大きくなっても探索範囲が常に半分になるため効率的。

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
    let l = 0,
      r = nums.length - 1;

    while (l <= r) {
      const mid = Math.floor((r + l) / 2);

      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] < target) {
        l = mid + 1;
      } else if (nums[mid] > target) {
        r = mid - 1;
      }
    }
    return -1;
  }
}
