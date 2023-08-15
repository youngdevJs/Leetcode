var countAndSay = function (n) {
  if (n === 1) return 1;
  let total = [];
  let res = recurtion(1, [1], n, total);
  return res[total.length - 1].join("");
};

function recurtion(count, res, n, total) {
  if (count === 1) debugger;
  if (count === n) return;
  count++;
  let tmp = [];
  for (let i = 0; i < res.length; ) {
    let j = i + 1;
    if (res.length === 1) {
      tmp.push(1, 1);
      break;
    }
    let tmpCount = 1;
    while (j <= res.length) {
      if (res[i] === res[j]) {
        tmpCount++;
      } else {
        if (tmpCount !== 1) {
          tmp.push(tmpCount, res[i]);
          i = j ;
          break;
        } else {
          tmp.push(1, res[i]);
          i++;
          break;
        }
      }
      j++;
      if (j === res.length) {
        i++;
        break;
      }
    }
  }
  total.push(tmp);
  recurtion(count, tmp, n, total);
  return total;
}

console.log(countAndSay(6));
