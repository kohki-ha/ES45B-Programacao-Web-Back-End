const produtos = [
    {
        id: 1,
        nome: "Coxinha",
        categoria: "salgado",
        preco: 7.5,
        estoque: 20,
    },
    {
        id: 2,
        nome: "Pão de queijo",
        categoria: "salgado",
        preco: 5.0,
        estoque: 30,
    },
    {
        id: 3,
        nome: "Suco de laranja",
        categoria: "bebida",
        preco: 8.0,
        estoque: 15,
    },
    {
        id: 4,
        nome: "Refrigerante lata",
        categoria: "bebida",
        preco: 6.0,
        estoque: 0,
    },
    { id: 5, nome: "Brigadeiro", categoria: "doce", preco: 3.5, estoque: 40 },
    {
        id: 6,
        nome: "Bolo de cenoura",
        categoria: "doce",
        preco: 6.5,
        estoque: 0,
    },
];

const pedidos = [];

module.exports = { produtos, pedidos };
