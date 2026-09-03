const usuarios = [
    { nome: "Ana", idade: 20, ativo: true, compras: [100, 50, 25] },
    { nome: "Bruno", idade: 17, ativo: false, compras: [30, 20] },
    { nome: "Carlos", idade: 32, ativo: true, compras: [200, 150, 50, 100] },
    { nome: "Diana", idade: 25, ativo: true, compras: [] },
    { nome: "Eduardo", idade: 15, ativo: false, compras: [10] }
];



// Parte 1
console.log(`Total de compras por usuario:`)

usuarios.forEach((usuario) => {
    total = 0;

    usuario.compras.forEach((compra) => {
        total = total + compra;
    })

    console.log(`${usuario.nome}: total = ${total}`)
})



// Parte 2
console.log(`\nUsuarios ativos:`)
usuarios.forEach((usuario) => {
    if (usuario.ativo === true) {
        console.log(usuario.nome)
    }
})



// Parte 3
console.log(`\nUsuarios com idade >= 18:`)
usuarios.forEach((usuario) => {
    if (usuario.idade >= 18) {
        console.log(usuario.nome)
    }
})



// Parte 4
console.log(`\nUsuario com maior volume de compras:`)

let maiorTotal = 0
let maiorComprador = ""

usuarios.forEach((usuario) => {
    total = 0;

    usuario.compras.forEach((compra) => {
        total = total + compra
    })

    if (total > maiorTotal) {
        maiorTotal = total;
        maiorComprador = usuario.nome
    }
})

console.log(`Usuario com maior volume: ${maiorComprador}`)
console.log(`Total: ${maiorTotal}`)



// Parte 5
// Coerção de Tipos
// 
// > 52
// O resultado é 52 porque o valor `5` é uma string e o operador `+` em
// strings é usado para concatenar strings, então o JavaScript converte o
// número 2 para string e faz uma concatenação.
//
// > 3
// O resultado é `3` porque o operador `-` só trabalha com números, por
// isso o JavaScript converte a string `5` para o número `5` e realiza a
// conta.
//
// > 2
// O resultado é `2` porque em uma operação matemática, o JavaScript
// converte booleano para número.
//
// > true
// O resultado é `true` porque o operador `==` permite coerção de tipos, o
// JavaScript converte `false` para `0` antes de fazer a comparação.
//
// > false
// O resultado é `false` porque o operador === faz uma comparação estrita,
// levando em consideração tanto o valor quanto o tipo.
//
