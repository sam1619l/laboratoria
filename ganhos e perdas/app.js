var income = prompt (" Qual é o valor da entrada ?");
var costs = prompt (" Qual é o valolr da saida?");
var taxPercent = prompt("Qual a porcentagem dos impostos?");
var grossProfit = income - costs;
var tax = grossProfit*taxPercent/100
var netincome = grossProfit - tax ;
document.write(" Sua renda liquida é de $" + netincome);
