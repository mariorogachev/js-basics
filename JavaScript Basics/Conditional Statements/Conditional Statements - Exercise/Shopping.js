function shopping(input){
    let budget= Number(input[0]);
    let cardCount= Number(input[1]);
    let processor= Number(input[2]);
    let memory= Number(input[3]);

    let cardPrice=cardCount*250;

    let processorPrice= cardPrice*0.35;
    let totalProcessor= processorPrice*processor;

    let memoryPrice= cardPrice*0.1;
    let totalMemory= memoryPrice*memory;

    let totalPrice= cardPrice+totalProcessor+totalMemory;

    if(cardCount>processor){
        totalPrice *=0.85;
    }

    let diff= Math.abs(totalPrice-budget);

    if(budget>=totalPrice){
        console.log(`You have ${diff.toFixed(2)} leva left!`)
    }else{
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`)
    }



}

shopping(["920.45",
"3",
"1",
"1"]);
