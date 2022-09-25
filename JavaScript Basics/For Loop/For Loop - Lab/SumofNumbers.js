function sumOfNumber(input) {
  let n = input[0];
  let textNum = "" + n;
  let sum = 0;
  for (let i = 0; i < textNum.length; i++) {
    sum += Number(textNum[i]);
  }
  console.log(`The sum of the digits is:${sum}`);
}

sumOfNumber(["1232454524524525252541"]);
