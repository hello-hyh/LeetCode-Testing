/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let arr = []
  let len = digits.length - 1
  for (let i = len; i >= 0; i--) {
    if (digits[i] >= 9) {
      if (i > 0) {
        digits[i] = 0
      } else if (i === 0) {
        digits[i] = 0
        digits.unshift(1)
        break
      }
    } else {
      digits[i]++
      break
    }
  }
  return digits
};
