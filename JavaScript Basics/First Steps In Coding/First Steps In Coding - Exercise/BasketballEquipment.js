function basketball(input){
    let annualTax=Number(input[0]);

    let cenaZaKecove= annualTax-(annualTax*0.4);
    let cenaZaEkip= cenaZaKecove-(cenaZaKecove*0.2);
    let cenaZaTopka= cenaZaEkip*0.25;
    let cenaZaAks= cenaZaTopka*0.2;

    let totalPrice=annualTax+cenaZaKecove+cenaZaEkip+cenaZaTopka+cenaZaAks;

    console.log(totalPrice);
}