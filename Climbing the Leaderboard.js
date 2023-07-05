function climbingLeaderboard(ranked, player) {
  // Write your code here
  let res = [];
  let format = [...new Set(ranked)];
  format.sort((a,b)=>b-a)
  for (let i = 0; i < player.length; i++) {
    for (let j = format.length - 1; j >= 0; j--) {
      let condition = false;
      if (player[i] < format[j]) {
        res.push(j + 2);
        break;
      } else if (player[i] > format[j]) {
        let k = j - 1;
        while (k >= 0) {
          if (player[i] < format[k]) {
            condition = true;
            res.push(k + 2);
            break;
          }
          k--;
        }
        if (!condition) {
          res.push(1);
          condition = false;
        }
        break;
      } else if (player[i] === format[j]) {
        if(j === 0) res.push(1)
        continue;
      }
    }
  }
  return res;
}

// 100 50 40 20 10

// 1 

console.log(climbingLeaderboard([1], [1,1]));
