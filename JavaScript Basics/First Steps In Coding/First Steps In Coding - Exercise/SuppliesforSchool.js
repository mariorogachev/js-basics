function materiali(input){
    let broiPaketHimikali=Number(input[0]);
    let broiPaketMarkeri=Number(input[1]);
    let preparatZaPochistvane=Number(input[2]);
    let namalenie=Number(input[3]);

    let cenaZaHimikali= broiPaketHimikali*5.80;
    let cenaZaMarkeri= broiPaketMarkeri*7.20;
    let cenaZaPreparat= preparatZaPochistvane* 1.20;
    let obshtaSuma= cenaZaHimikali+cenaZaMarkeri+cenaZaPreparat;
    let cenaSNamalenie= obshtaSuma-(obshtaSuma*(input[3]/100));
    console.log(cenaSNamalenie)

}