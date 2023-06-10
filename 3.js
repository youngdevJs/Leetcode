var lengthOfLongestSubstring = function (s) {
    let set = new Set()
    let j = 0
    let max = 0
    if(s.length === 0) return 0
    if(s.length === 1) return 1
    for(let i = 0;i < s.length;i++){
        while(set.has(s[i])){
            set.delete(s[j])
            j++ 
        }
        set.add(s[i])
        let sizeSet = set.size
        if(sizeSet > max){
            max = sizeSet
        }
    }
    return max
  }

  console.log(lengthOfLongestSubstring("abcabcbb"));