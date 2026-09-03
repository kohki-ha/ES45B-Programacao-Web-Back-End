const usuarios = [
    { nome: "Ana", idade: 20, ativo: true, compras: [100, 50, 25] },
    { nome: "Bruno", idade: 17, ativo: false, compras: [30, 20] },
    { nome: "Carlos", idade: 32, ativo: true, compras: [200, 150, 50, 100] },
    { nome: "Diana", idade: 25, ativo: true, compras: [] },
    { nome: "Eduardo", idade: 15, ativo: false, compras: [10] }
];



// Parte 1
console.log(`Parte 1 - Total de compras por usuario:`)

usuarios.forEach((usuario) => {
    total = 0;

    usuario.compras.forEach((compra) => {
        total = total + compra;
    })

    console.log(`${usuario.nome}: total = ${total}`)
})



// Parte 2
console.log(`\nParte 2 - Usuarios ativos:`)

usuarios.forEach((usuario) => {
    if (usuario.ativo === true) {
        console.log(usuario.nome)
    }
})



// Parte 3
console.log(`\nParte 3 - Usuarios com idade >= 18:`)

usuarios.forEach((usuario) => {
    if (usuario.idade >= 18) {
        console.log(usuario.nome)
    }
})



// Parte 4
console.log(`\nParte 4 - Usuario com maior volume de compras:`)

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


// Parte 6
console.log(`\nParte 6 - Desafio Arrow Function vs Function:`)

const pessoaComFunction = {
    nome: "Maria",
    falar: function() {
        console.log(this.nome)
    }
}

pessoaComFunction.falar()

const pessoaComArrow = {
    nome: "Maria",
    falar: () => {
        console.log(this.nome)
    }
}

pessoaComArrow.falar()

// O Código 1 funciona corretamente porque a function possui seu próprio `this`.
// O Código 2 não funciona como esperado porque a arrow function não possui seu próprio `this`.
// Em arrow functions, o `this` é herdado do contexto onde a função foi criada.



// Parte 7
console.log(`\nParte 7 - Desafio Final:`)

const gerarRelatorio = () => {
    let usuariosAtivos = 0
    let usuariosInativos = 0
    let somaIdades = 0
    let maiorTotalRelatorio = 0
    let maiorCompradorRelatorio = ""

    usuarios.forEach((usuario) => {
        somaIdades = somaIdades + usuario.idade

        if (usuario.ativo === true) {
            usuariosAtivos = usuariosAtivos + 1
        } else {
            usuariosInativos = usuariosInativos + 1
        }

        total = 0

        usuario.compras.forEach((compra) => {
            total = total + compra
        })

        if (total > maiorTotalRelatorio) {
            maiorTotalRelatorio = total
            maiorCompradorRelatorio = usuario.nome
        }
    })

    return {
        totalUsuarios: usuarios.length,
        usuariosAtivos: usuariosAtivos,
        usuariosInativos: usuariosInativos,
        mediaIdade: somaIdades / usuarios.length,
        maiorComprador: maiorCompradorRelatorio
    }
}

console.log(`Relatório:`)
console.log(gerarRelatorio())



// Desafio Extra
console.log(`\nDesafio Extra:`)
const gerarDesafioExtra = () => {
    let usuarioMaisJovem = usuarios[0]
    let usuarioMaisVelho = usuarios[0]
    let totalCompras = 0

    usuarios.forEach((usuario) => {
        if (usuario.idade < usuarioMaisJovem.idade) {
            usuarioMaisJovem = usuario
        }

        if (usuario.idade > usuarioMaisVelho.idade) {
            usuarioMaisVelho = usuario
        }

        usuario.compras.forEach((compra) => {
            totalCompras = totalCompras + compra
        })
    })

    return {
        usuarioMaisJovem: usuarioMaisJovem.nome,
        usuarioMaisVelho: usuarioMaisVelho.nome,
        mediaComprasPorUsuario: totalCompras / usuarios.length
    }
}

console.log(gerarDesafioExtra())
