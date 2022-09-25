function petShop(input){
    let dogs = Number(input[0]) * 2.5;
    let cats = Number(input[1]) * 4;
    let endPrice= dogs + cats;
    console.log(` ${endPrice} lv.`);
}
petShop(["5 ",
"4 "]
);