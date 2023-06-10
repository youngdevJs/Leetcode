var convert = function(s, numRows) {
if(numRows === 1) return s
 let res = ""
    let leng = s.length
    let cycle = 2 * numRows - 2
    for(let i = 0; i< numRows ; i++){
        for(let j = 0 ; j + i < s.length ; j +=cycle){
            res += s.charAt(i+j)
            let isNotFirstRow = i !== 0
            let isNotLastRow = i !== numRows - 1   
            let betweenMainRow =  cycle - i  < leng
            if(isNotFirstRow && isNotLastRow && betweenMainRow){
                res += s.charAt(j + cycle - i)
            }
        }
    }
    return res
};

// A
// B  D
// C

console.log(convert("PAYPALISHIRING",4) === "PINALSIGYAHRPI")
