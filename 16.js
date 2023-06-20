var threeSumClosest = function(nums, target) {
   nums = nums.sort((a,b)=>a-b)
   let closetSum = nums [0] + nums [1] + nums [2]
   for(let i = 0;i< nums.length;i++){
    let left = i + 1
    let right = nums.length - 1
    while (left < right){
        let sum = nums[i] + nums[left] + nums[right]
        if(Math.abs(sum - target) < Math.abs(closetSum - target)){
            closetSum = sum
        }
        if(sum < target){
            left ++
        } else {
            right --
        }
    }
   }
   return closetSum
};

console.log(threeSumClosest([-1,2,1,-4],1));