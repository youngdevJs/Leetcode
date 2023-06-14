/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = []
    let len = nums.length
    nums = nums.sort((a,b)=>a-b)
    for(let i = 0;i< len;i++){
        let j = i + 1
        let k = len - 1
        if(i !== 0 && nums[i] === nums[i-1]) continue
        let sum = nums[i]+nums[j]+nums[k]
        while(j<k){
            if(sum === 0){
                res.push([nums[i],nums[j],nums[k]])
                while(nums[j] === nums[j+1]) j++
                while(nums[k]=== nums[k-1]) k--
                j++
                k--
            } else if(sum < 0){
                j++
            } else {
                k--
            }
        }
    }
    return res
};

console.log(threeSum([-1,0,1,2,-1,-4]));