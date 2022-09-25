function lunchBreak(input){
    let seriesName= input[0];
    let duration= Number(input[1]);
    let durationChill= Number(input[2]);

    let lunchTime= durationChill/8;
    let otdih=durationChill/4;
    let ostanaloVreme= durationChill-lunchTime-otdih;
    let diff=Math.abs(ostanaloVreme-duration);

    if(ostanaloVreme>=duration){
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(diff)} minutes free time.`)
    }else{
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(diff)} more minutes.`)
    }
}
lunchBreak(["Teen Wolf",
"48",
"60"])
;