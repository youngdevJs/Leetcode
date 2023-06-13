/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const len = s.length;
   let result = "";
   let sign = 1;
   for(let i=0; i<len; i++){
    //    step 1:
        s = s.trim()
    //    step 2:
       if(s[i] === '+' || s[i]==='-'){
           sign = s[i] === '-' ? -1 : 1;
           if(!/[0-9]/.test(s[i+1])) return 0;
       }
    //    step 3:
        if(/[0-9]/.test(s[i])){
            result += (+s[i]);
            if(!/[0-9]/.test(s[i+1])) break;
        }
    // break point:
        if(/[a-zA-Z.]/.test(s[i])){
            return 0;
        }
   }   
   return sign === -1 ? Math.max(-(2 ** 31), -result) : Math.min(2 ** 31 - 1, result);
};

console.log(myAtoi("-00000001"))

//  s = "4193 with words"