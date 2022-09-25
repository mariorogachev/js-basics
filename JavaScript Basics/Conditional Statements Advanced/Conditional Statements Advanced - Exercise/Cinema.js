function cinema(input) {
  let type = input[0];
  let rows = Number(input[1]);
  let columns = Number(input[2]);

  let kinti = 0;

  if (type === "Premiere") {
    kinti = rows * columns * 12;
  } else if (type === "Normal") {
    kinti = rows * columns * 7.5;
  } else if (type === "Discount") {
    kinti = rows * columns * 5;
  }
  console.log(`${kinti.toFixed(2)} leva`);
}

cinema(["Premiere", "10", "12"]);
