/**
 * @param {number[]} nums
 * @return {number[]} nums sorted in ascending order
 */

const bubbleSort = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j]
        nums[j] = nums[j + 1]
        nums[j + 1] = temp
      }
    }
  }
  return nums
}

console.log('The initial array is:', [1, 5, 3, 9, 2, 7, 8, 6, 4])
console.log('The sorted array is:', bubbleSort([1, 5, 3, 9, 2, 7, 8, 6, 4], 7))
