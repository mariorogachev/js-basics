function food(input){
    let broiPileshko=Number(input[0]);
    let broiRiba=Number(input[1]);
    let broiVeg=Number(input[2]);

    let cenaPileshko=broiPileshko*10.35;
    let cenaRiba=broiRiba*12.40;
    let cenaVeg=broiVeg*8.15
    let obshtaCena=cenaPileshko+cenaRiba+cenaVeg;

    let cenaDesert=obshtaCena*0.2;

    let totalPrice=obshtaCena+cenaDesert+2.5;
    console.log(totalPrice)
}
food();