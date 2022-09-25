function lily(input) {
  let age = Number(input[0]);
  let priceWashingMachine = Number(input[1]);
  let priceToy = Number(input[2]);

  let money = 0;
  let toy = 0;
  let currentMoney = 10;

  for (let i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      money += currentMoney;
      currentMoney += 10;
      money -= 1;
    } else {
      toy++;
    }
  }
  let totalMoney = toy * priceToy + money;

  let diff = Math.abs(priceWashingMachine - totalMoney);

  if (totalMoney >= priceWashingMachine) {
    console.log(`Yes! ${diff.toFixed(2)}`);
  } else {
    console.log(`No! ${diff.toFixed(2)}`);
  }
}
lily(["10", "170.00", "6"]);
