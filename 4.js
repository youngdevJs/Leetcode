var findMedianSortedArrays = function(nums1, nums2) {
    let sorted = [...nums1,...nums2].sort((a,b)=>a-b)
    console.log(sorted);
    let total = sorted.length
    let medianNums
    if(total % 2 === 0){
         medianNums = (sorted[Math.floor(sorted.length/2)]+sorted[Math.floor(sorted.length/2-1)])/2
    } else {
         medianNums = sorted[Math.floor(sorted.length/2)]
    }
    return medianNums
};


console.log(findMedianSortedArrays([1,2],[3,4]));