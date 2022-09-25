function lit(input){
    let broiNaStranici=Number(input[0]);
    let straniciNaChas=Number(input[1]);
    let dni=Number(input[2]);
    let obshtoVreme= broiNaStranici/straniciNaChas;
    let neobhodimiChasove= obshtoVreme/dni
    console.log(neobhodimiChasove)

}
lit();