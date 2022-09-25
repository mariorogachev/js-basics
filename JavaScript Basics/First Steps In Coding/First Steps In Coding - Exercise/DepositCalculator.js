function calculator(input){
    let depositedAmount=Number(input[0]);
    let termDeposit=Number(input[1]);
    let annualInterestRate=Number(input[2]);
    let natrupana= depositedAmount * (annualInterestRate/100);
    let lihva= natrupana/12;
    let obshto=depositedAmount+termDeposit*lihva;
    console.log(obshto);
}
calculator();