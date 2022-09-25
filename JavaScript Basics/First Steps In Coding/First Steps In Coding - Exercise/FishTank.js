function fishTank(input){
    let duljina=Number(input[0]);
    let shirochina=Number(input[1]);
    let visochina=Number(input[2]);
    let procent=Number(input[3]);

    let obem=duljina*shirochina*visochina;
    let obemLitri=obem/1000;
    let nujniLitri=obemLitri*(1-0.17)

    console.log(nujniLitri);
}