function diagonalDifference(arr) {
    // Write your code here
    //caculate
    let i = 0
    let j = arr[0].length-1
    let cheo1 = 0
    let cheo2 = 0
    while(i<arr[0].length){
        cheo1+=Math.floor(arr[i][i])
        i++
    }
    let k = 0
    while(j>=0){
        cheo2+=Math.floor(arr[k][j])
        j--
        k++
    }
    return Math.abs(cheo1-cheo2)
}

console.log(diagonalDifference([
    [11,2,4],
    [4,5,6],
    [10,8,-12]
]));