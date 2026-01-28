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

 function cor