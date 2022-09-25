function solve(input){
    let budget= Number(input[0])
    let statistCount= Number(input[1])
    let oblekloStatist= Number(input[2])

    let dekorPrice = budget*0.1;
    let oblekloPrice= statistCount*oblekloStatist;
    if(statistCount>=150){
        oblekloPrice=oblekloPrice*0.9;
    }

    let totalPrice= oblekloPrice+dekorPrice;
    let diff=Math.abs(totalPrice-budget)
    if(totalPrice>budget){
        console.log("Not enough money!")
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`)
    }else{
        console.log("Action!")
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`)
    }

}