const express = require('express');
const { produtos } = require('../dados');

const router = express.Router();

// 3.2
router.get('/', (req, res) => {
    const { categoria, precoMax } = req.query;
    const precoMaximo = Number(precoMax);

    let resultado = produtos;

    if (categoria) {
        resultado = resultado.filter((produto) => produto.categoria === categoria);
    }

    if (precoMax !== undefined) {
        resultado = resultado.filter((produto) => produto.preco <= precoMaximo);
    }

    res.json(resultado);
});

// 3.4
router.get('/resumo', (req, res) => {
    const totalProdutos = produtos.length;
    const valorEmEstoque = produtos.reduce((total, produto) => total + produto.preco * produto.estoque, 0);
    const somaPrecos = produtos.reduce((total, produto) => total + produto.preco, 0);
    const precoMedio = Number((somaPrecos / totalProdutos).toFixed(2));
    const semEstoque = produtos
        .filter((produto) => produto.estoque === 0)
        .map((produto) => produto.nome);

    res.json({
        totalProdutos,
        valorEmEstoque,
        precoMedio,
        semEstoque
    });
});

// 3.3
router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const produto = produtos.find((produto) => produto.id === id);

    if (!produto) {
        return res.status(404).json({ erro: 'Produto não encontrado' });
    }

    res.json(produto);
});

// 4.2
router.post('/', (req, res) => {
    const { nome, categoria, preco, estoque } = req.body || {};
    const erros = [];

    if (!nome) {
        erros.push('nome é obrigatório');
    }

    if (!['salgado', 'bebida', 'doce'].includes(categoria)) {
        erros.push('categoria deve ser salgado, bebida ou doce');
    }

    if (typeof preco !== 'number' || preco <= 0) {
        erros.push('preco deve ser um número maior que zero');
    }

    if (!Number.isInteger(estoque) || estoque < 0) {
        erros.push('estoque deve ser um inteiro maior ou igual a zero');
    }

    if (erros.length > 0) {
        return res.status(400).json({ erros });
    }

    const novoProduto = {
        id: produtos.length + 1,
        nome,
        categoria,
        preco,
        estoque
    };

    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
});

// B3
router.post('/:id/repor', (req, res) => {
    const id = Number(req.params.id);
    const produto = produtos.find((produto) => produto.id === id);
    const quantidade = req.body && req.body.quantidade;

    if (!produto) {
        return res.status(404).json({ erro: 'Produto não encontrado' });
    }

    if (!Number.isInteger(quantidade) || quantidade <= 0) {
        return res.status(400).json({ erro: 'quantidade deve ser um inteiro positivo' });
    }

    produto.estoque += quantidade;
    res.json(produto);
});

module.exports = router;
