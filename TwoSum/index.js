// https://leetcode-cn.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let len = nums.length
  let secondNumTmp = 0
  let result = []
  if (len <= 2 && nums[0] + nums[1] === target) return [0, 1]
  for (let i = 0; i < len; i++) {
    secondNumTmp = target - nums[i]
    if (result[secondNumTmp] !== undefined) return [result[secondNumTmp], i]
    result[nums[i]] = i
  }
};