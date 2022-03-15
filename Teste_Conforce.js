
//Faça uma função para calcular o dobro de um número qualquer

var number = 50
var result = DoubleOfNumber(number);

function DoubleOfNumber(numberToCount) {
  x = numberToCount * 2;
  return x;
}

console.log("O dobro de " + number + " é: " + result);

 



 

// Considerando que todos os meses tenham 30 dias, calcular o total de dias de n meses

var QtyMonths = 12
var result = Total(QtyMonths);

function Total(months) {
  var days = months * 30;
  return days;
}

console.log("O número total de dias considerando " + QtyMonths + " é: " + result);

 