function solve(input){
    let cenaNaEkskurziq=Number(input[0]);
    let puzeli=Number(input[1]);
    let govKukli=Number(input[2]);
    let mecheta= Number(input[3]);
    let minions= Number(input[4]);
    let kamion= Number(input[5]);
    

    let totalPrice= (puzeli*2.6)+(govKukli*3)+(mecheta*4.1)+(minions*8.2)+(kamion*2);
    let totalToys= puzeli+govKukli+mecheta+minions+kamion;

    if(totalToys>=50){
        totalPrice= totalPrice*0.75;
    }


    totalPrice= totalPrice*0.9;
    let diff= Math.abs(totalPrice-cenaNaEkskurziq)
    if(totalPrice>=cenaNaEkskurziq){
        console.log(`Yes! ${diff.toFixed(2)} lv left.`)
    }else{
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
    }

}