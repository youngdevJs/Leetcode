var search = function (nums, target) {
  let mid = Math.floor(nums.length / 2);
  let index = recursion(nums, 0, nums.length - 1, target);
  return index;
};

function recursion(nums, start, end, target) {
  let mid = Math.floor((start + end) / 2);
  if (nums[mid] === target) return mid;
  if (start === end) return -1;
 let firstBinary = recursion(nums, start, mid, target);
  if (firstBinary >= 0) {
    return firstBinary;
  }
  let secondBinary = recursion(nums, mid + 1, end, target);
  if (secondBinary >= 0) {
    return secondBinary;
  }
  return -1;
}

console.log(search([1,3,5], 1));
