/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = strs[0]
    for(let i= 0;i < strs.length;i++){
      result =  check(strs[i],result)
    }
    return result
};

function check(string, res){
    let result = ""
    for (let i = 0 ;i < Math.min(string.length,res.length);i++){
        if(string[i] === res[i]){
            result += string[i]
        }else {
            break
        }
    }
    return result
}

console.log(longestCommonPrefix(["dog","racecar","car"]))