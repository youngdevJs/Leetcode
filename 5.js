var longestPalindrome = function(s) {
     let res = ''
     let maxLength  = 0
     for(let i = 0;i <s.length; i++){
        for(let j = 0 ; j <= 1 ; j++){
            let left = i
            let right = i + j
            while(left >= 0 && right < s.length && s[left]===s[right]){
                let len = right - left + 1
                if(len > maxLength){
                    maxLength = len
                    res = s.substring(left, right + 1)
                }
                left--
                right++
            }
        }
     }
     return res
};



console.log(longestPalindrome("babad"))