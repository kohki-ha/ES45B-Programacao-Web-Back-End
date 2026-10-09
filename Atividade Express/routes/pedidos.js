const express = require('express');
const { produtos, pedidos } = require('../dados');

const router = express.Router();

// 4.3
router.post('/', (req, res) => {
    const { cliente, itens } = req.body || {};

    if (!cliente || !Array.isArray(itens) || itens.length === 0) {
        return res.status(400).json({ erro: 'Informe o cliente e pelo menos um item' });
    }

    const itensPedido = [];
    let subtotal = 0;

    for (const item of itens) {
        const produto = produtos.find((produto) => produto.id === Number(item.id));

        if (!produto) {
            return res.status(404).json({ erro: 'Produto não encontrado' });
        }

        if (item.quantidade > produto.estoque) {
            return res.status(400).json({ erro: `Estoque insuficiente para ${produto.nome}` });
        }

        const totalItem = produto.preco * item.quantidade;
        subtotal += totalItem;
        itensPedido.push({
            id: produto.id,
            nome: produto.nome,
            quantidade: item.quantidade,
            preco: produto.preco,
            total: totalItem
        });
    }

    subtotal = Number(subtotal.toFixed(2));
    const desconto = subtotal >= 30 ? Number((subtotal * 0.1).toFixed(2)) : 0;
    const total = Number((subtotal - desconto).toFixed(2));

    for (const item of itensPedido) {
        const produto = produtos.find((produto) => produto.id === item.id);
        produto.estoque -= item.quantidade;
    }

    const pedido = {
        id: pedidos.length + 1,
        cliente,
        itens: itensPedido,
        subtotal,
        desconto,
        total
    };

    pedidos.push(pedido);
    res.status(201).json(pedido);
});

// B2
router.get('/relatorio', (req, res) => {
    const faturamentoTotal = Number(pedidos.reduce((total, pedido) => total + pedido.total, 0).toFixed(2));
    const quantidadesVendidas = {};

    pedidos.forEach((pedido) => {
        pedido.itens.forEach((item) => {
            if (quantidadesVendidas[item.nome] === undefined) {
                quantidadesVendidas[item.nome] = 0;
            }

            quantidadesVendidas[item.nome] += item.quantidade;
        });
    });

    let produtoMaisVendido = null;
    let maiorQuantidade = 0;

    Object.entries(quantidadesVendidas).forEach(([nome, quantidade]) => {
        if (quantidade > maiorQuantidade) {
            produtoMaisVendido = nome;
            maiorQuantidade = quantidade;
        }
    });

    res.json({
        totalPedidos: pedidos.length,
        faturamentoTotal,
        produtoMaisVendido
    });
});

module.exports = router;
