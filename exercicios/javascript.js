
//Objetivo: Praticar o uso do ${ } para criar mensagens personalizadas.

//Tarefa: Crie uma função chamada notificarVenda.

//Parâmetros: Ela deve receber o nomeCliente e o nomeProduto.

//Retorno: Deve retornar a frase: "Olá, ${nomeCliente}! O seu produto ${nomeProduto} já foi postado."

//Teste: Chame a função passando "Mauricio" e "Piso Modular".

function notificarVenda (nomeCliente, nomeProduto) {
    return `Olá, ${nomeCliente}! O seu produto ${nomeProduto} já foi postado.`;
}

console.log (notificarVenda("Mauricio", "Bola de Futebol"));
 