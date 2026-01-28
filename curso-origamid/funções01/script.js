function areaQuadrado(lado) {
  return lado * lado;
} 

areaQuadrado(4); // 16
areaQuadrado(5); // 25
areaQuadrado(2); // 4 

function areaRetangulo (altura, largura) {
  return altura * largura;
} 
console.log(areaRetangulo(10, 5));

function imc (peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}
 console.log(imc(80, 1.8)); // 24.69...

function pi () {
  return 3.14;
}

var total = 10 * pi(); // Parenteses são importantes para a execução da função
console.log(total);


function corFavorita(cor) { 
 if (cor == 'azul') {
  return 'Você gosta do céu';
} else if (cor == "verde") {
  return 'Você gosta da floresta';
} else {
  return 'Você não gosta de cores';
}
} corFavorita(azul); // Retorna 'Você não gosta de cores'


function terceiraIdade (idade) {
  if (Typeof idade !== 'number') {
    return 'Por favor preencha um número';
  } else if (idade >= 60) {
    return true;  
  } else {            
}
}  return false;

console.log(terceiraIdade(60));

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Faltam visitar ${totalPaises - paisesVisitados} países`;
}     