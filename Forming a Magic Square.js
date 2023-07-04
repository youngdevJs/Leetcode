function formingMagicSquare(s) {
  // Write your code here
  let listCost = [];
  for (let i = 1; i <= 9; i++) {
    if(i === 4) {
        console.log("debug");
    }
    let aSquare = [
        [0, 0, 0],
        [0, 5, 0],
        [0, 0, 0],
      ];
    if (i === 5) continue;
    aSquare[0][0] = i;
    aSquare[2][2] = 10 - i;
    for (let j = 1; j <= 9; j++) {
      if (j === 5 || j === i) continue;
      aSquare[0][1] = j;
      aSquare[0][2] = 15 - aSquare[0][0] - aSquare[0][1];
      aSquare[1][2] = 15 - aSquare[0][2] - aSquare[2][2];
      aSquare[1][0] = 15 - aSquare[1][2] - aSquare[1][1];
      aSquare[2][0] = 15 - aSquare[0][0] - aSquare[1][0];
      aSquare[2][1] = 15 - aSquare[2][2] - aSquare[2][0];
      let isMagicCondition = isMagic(aSquare);
      if (isMagicCondition) {
        let cost = 0;
        for (let k = 0; k < 3 ; k++) {
          for (let l = 0; l < 3; l++) {
            cost += Math.abs(aSquare[k][l] - s[k][l]);
          }
        }
        listCost.push(cost);
        console.log(114114,listCost);
      }
    }
  }
  return Math.min(...listCost);
}

function isMagic(square) {
  let kiemTraKhongTrung = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (kiemTraKhongTrung.includes(square[i][j])) {
            return false;
          }
      kiemTraKhongTrung.push(square[i][j]);
      if (square[i][j] <= 0 || square[i][j] >= 10) {
        return false;
      }
      if (square[0][0] + square[0][1] + square[0][2] !== 15) {
        return false;
      }
      if (square[1][0] + square[1][1] + square[1][2] !== 15) {
        return false;
      }
      if (square[2][0] + square[2][1] + square[2][2] !== 15) {
        return false;
      }
      if (square[0][0] + square[1][0] + square[2][0] !== 15) {
        return false;
      }
      if (square[0][1] + square[1][1] + square[2][1] !== 15) {
        return false;
      }
      if (square[0][2] + square[1][2] + square[2][2] !== 15) {
        return false;
      }
      if (square[0][0] + square[1][1] + square[2][2] !== 15) {
        return false;
      }
      if (square[0][2] + square[1][1] + square[2][0] !== 15) {
        return false;
      }
    }
  }
  return true;
}

console.log(
  formingMagicSquare([
    [5, 3, 4],
    [1, 5, 8],
    [6, 4, 2],
  ])
);
