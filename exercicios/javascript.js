
//Exercício 1: O Orçamento Básico (Variáveis e Matemática)
//Cenário: Um cliente quer cobrir uma garagem com o piso modular. Você precisa calcular o preço total baseando-se na área.
//Crie uma variável para a largura (ex: 3m) e outra para o comprimento (ex: 5m).
//Crie uma variável precoPorMetro (ex: R$ 90,00).
// Calcule a área total e o preço final.
//Exiba no console: "O orçamento para x m² ficou em R$ y". //


var largura = 3;
var comprimento = 5;
var precoPorMetro = 90;

var areaTotal = (largura * comprimento);
var precoFinal = (areaTotal * precoPorMetro);

console.log(`O orçamento para ${areaTotal}m² ficou em R$ ${precoFinal}`);