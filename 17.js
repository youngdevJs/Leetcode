var letterCombinations = function (digits) {
    if(!digits) return 
    let res = []
    let str = []
    const kb = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    recursion()
    return res
  function recursion(index = 0){
    if(index === digits.length){
        res.push(str.join(""))
        return 
    }
    let charStr = kb[digits[index]]
    for(let i = 0; i<charStr.length;i++){
        str.push(charStr[i])
        recursion(index+1)
        str.pop()
    }
  }
};

console.log(letterCombinations(
    "23"
));
