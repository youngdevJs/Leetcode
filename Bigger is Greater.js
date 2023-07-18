function biggerIsGreater(w) {
  // Write your code here
  let number = [];
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "x",
    "y",
    "z",
  ];
  for (let i = 0; i < w.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (w[i] === alphabet[j]) {
        number.push(j);
      }
    }
  } //dkhc  3972
  console.log(number);

  if ([...new Set(number)].length === 1) {
    return "no answer";
  }

  let isValid = checkInvalid(number)
  if(isValid) return "no answer";
  //  number = number.join("").replace(",","")
  for (let i = number.length - 1; i >= 0; i--) {
    let j = i - 1;
    if (number[i] > number[j] && j !== 0) {
        let insertFirt = number.splice(0,j)
        number = sortSwap(number, insertFirt);
      break;
    }
    if (j === 0) {
      number = sortSwap(number);
      break;
    }
  }
  let res = convertNumberToAlphabet(number, alphabet);
  return res;
}

function convertNumberToAlphabet(number, alphabet) {
  let res = [];
  for (let i = 0; i < number.length; i++) {
    res.push(alphabet[number[i]]);
  }
  return res.join("").replace(",", "");
}

function sortSwap(number, insertFirt = []) {
  let res = [];
  let firstVal = number[0];
  number.sort((a, b) => a - b);
  for (let i = 0; i < number.length; i++) {
    if (number[i] === firstVal) {
      res.push(number[i + 1]);
      number.splice(i + 1, 1);
      break;
    }
  }
  let total = [...res, ...number];
  total.unshift(...insertFirt)
  return total;
}


function checkInvalid(number){
    let check = [...number]
    check.sort((a,b)=>b-a)
    if(check.join("").replace(",","") === number.join("").replace(",","") ){
        return true
    }
    return false
}

console.log(biggerIsGreater("ocsmerkgidvddsazqxjbqlrrxcotrnfvtnlutlfcafdlwiismslaytqdbvlmcpapfbmzxmftrkkqvkpflxpezzapllerxyzlcf"));
