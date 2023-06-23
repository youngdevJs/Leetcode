/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let res = []
    // -2 -1 0 0 1 2 => -3
    nums = nums.sort((a, b) => a - b)
    // i , j , k , l 
    // loop
    for (let i = 0; i < nums.length; i++) {
        if(nums[i-1] === nums[i]) continue
        for(let j = i + 1; j < nums.length ; j ++){
            let left = j + 1
            let right = nums.length - 1
            if(nums[j-1] === nums[j] && i !== j-1){
                continue
            }
            while(left<right){
                let sum = nums[i] + nums[j] + nums[left] + nums[right]
                if(sum === target){
                    res.push([nums[i],nums[j],nums[left],nums[right]])
                    while(nums[left+1] === nums[left]) left++
                    while(nums[right-1] === nums[right]) right--
                    left++
                    right--
                } else if(sum > target){
                    right--
                } else if(sum < target){
                    left++
                }
            }
        }
    }
    return res
};

console.log(fourSum([-2,-1,-1,1,1,2,2],0));