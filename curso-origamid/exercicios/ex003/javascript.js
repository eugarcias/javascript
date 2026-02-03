/* Exercício: O Validador de Cupom de Desconto
Imagine que no seu e-commerce você quer criar uma função que verifica se um cupom é válido e quanto de desconto ele dá.

Sua missão:
Crie uma função chamada validarCupom.
ELa deve receber um parâmetro chamado codigoCupom.
Dentro da função, use um let para criar uma variável chamada desconto.

A Lógica:
Se o codigoCupom for igual a "BORA10", o desconto será 10.
Se o codigoCupom for igual a "BORA20", o desconto será 20.
Se não for nenhum desses, o desconto será 0.
O Retorno: Use uma Template String (com crases e ${ }) para retornar: "Você ganhou ${desconto}% de desconto!".*/

 function validarCupom (codigoCupom){

    let desconto;

    if (codigoCupom === 'BORA10'){
        desconto = 10;
    } else if (codigoCupom === 'BORA20') {
        desconto = 20;
    } else {
         desconto = 0;
    }

    return `Você ganhou ${desconto}% de desconto!`;
 }

 console.log(validarCupom("BORA10"));
 console.log(validarCupom("CUPOM_FALSO"));