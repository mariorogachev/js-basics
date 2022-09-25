function painting(input){
    let kolichestvoNailon=Number(input[0]);
    let kolichestvoBoq=Number(input[1]);
    let kolichestvoRazreditel=Number(input[2]);
    let hours=Number(input[3]);

    let sumaZaNailon=(kolichestvoNailon+2)*1.5;
    let sumaZaBoq=kolichestvoBoq*1.10*14.50;
    let sumaZaRazreditel=kolichestvoRazreditel*5;
    let sumaZaTorbichki= 0.4;

    let obshtaSumaZaMateriali= sumaZaBoq+sumaZaNailon+sumaZaRazreditel+sumaZaTorbichki;
    let sumaZaMaistori=(obshtaSumaZaMateriali*0.30)*hours;
    let totalPrice= sumaZaMaistori+ obshtaSumaZaMateriali;
    console.log(totalPrice);
}