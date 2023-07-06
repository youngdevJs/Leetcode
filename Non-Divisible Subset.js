function nonDivisibleSubset(k, s) {
   
        //step 1 : fill arr
        let arr = new Array(k).fill(0)
        //step 2 : collect số dư
        s.forEach((item)=>{
            return arr[item%k]++
        })
        let res = 0
    // check chia hết cho k lấy 1 số
        if(arr[0] !== 0){
            res++
        }
        //check k là số chẵn và arr[k/2]!==0 lấy 1 số
        if(k%2===0 && arr[k/2]!==0){
            res++
        }
        for(let i = 1; i < k/2 ; i++){
            res+=Math.max(arr[i],arr[k-i])
        }
        return res
    
}

console.log(nonDivisibleSubset(3, [1, 7, 13, 4, 6, 5, 10]));
