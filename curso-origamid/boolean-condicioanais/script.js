var souFormado = true;
console.log(souFormado); // true
var possuiDoutorado = true;

if (souFormado) {
  console.log("Eu sou formado!");
} else if (possuiDoutorado) { // Agora o 'else' continua a cadeia corretamente
  console.log("Eu não sou formado!");
} else {
  console.log("Eu não sou formado e não tenho doutorado.");
}

var kgPicanha = '60' - 10;

if (kgPicanha >= 50) {
  console.log("Já pode comprar a picanha!");
} else if (kgPicanha <= 50) {
  console.log("Ainda não pode comprar a picanha!");
}

// Truthy
if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
if(!!' ') // true
if(!!'') // false
{
  
}