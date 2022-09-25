function skiTrip(input) {
  let days = Number(input[0]);
  let type = input[1];
  let grade = input[2];
  let sum = 0;

  switch (type) {
    case "room for one person":
      sum = (days - 1) * 18.0;
      break;
    case "apartment":
      sum = (days - 1) * 25.0;
      if (days < 10) {
        sum = sum * 0.7;
      } else if (days >= 10 && days <= 15) {
        sum = sum * 0.65;
      } else {
        sum = sum * 0.5;
      }
      break;
    case "president apartment":
      sum = (days - 1) * 35.0;
      if (days < 10) {
        sum = sum * 0.9;
      } else if (days >= 10 && days <= 15) {
        sum = sum * 0.85;
      } else {
        sum = sum * 0.8;
      }
      break;
  }
  if (grade === "positive") {
    sum = sum * 1.25;
  } else {
    sum = sum * 0.9;
  }
  console.log(sum.toFixed(2));
}
