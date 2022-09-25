function solve(input){
    let recordInSeconds=Number(input[0]);
    let metres=Number(input[1]);
    let metresPerSeconds=Number(input[2]);

    let delay= Math.floor(metres/15);
    let totalDelay= delay*12.5;
    let time= metres*metresPerSeconds+totalDelay;
    

        if(time<recordInSeconds){
            console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`)
        }else{
            let diff= Math.abs(recordInSeconds-time);
            console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`)
        }

}