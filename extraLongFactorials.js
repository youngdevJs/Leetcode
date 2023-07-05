function extraLongFactorials(n) {
    // Write your code here
    let long = BigInt(n)
    let x = BigInt(1)
    for(let i = long ; i >= 1 ; i --){
        x*=i
    }
    console.log(String(x))
}