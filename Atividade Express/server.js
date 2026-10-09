const express = require('express');
const { produtos } = require('./dados');
const produtosRouter = require('./routes/produtos');
const pedidosRouter = require('./routes/pedidos');

const app = express()

app.use(express.json())

// 3.1
app.get('/', (req, res) => {
    res.json({
        mensagem: 'API da Lanchonete do Campus',
        versao: '1.0.0',
        rotas: [
            'GET /',
            'GET /produtos',
            'GET /produtos/resumo',
            'GET /produtos/:id',
            'POST /produtos',
            'POST /produtos/:id/repor',
            'POST /estoque/repor',
            'POST /pedidos',
            'GET /pedidos/relatorio'
        ]
    })
})

// 4.1
app.post('/estoque/repor', (req, res) => {
    const produtosRepostos = produtos.filter((produto) => produto.estoque === 0);

    produtosRepostos.forEach((produto) => {
        produto.estoque = 10;
    });

    res.json({
        mensagem: `${produtosRepostos.length} produto(s) reposto(s)`,
        produtos: produtosRepostos.map((produto) => produto.nome)
    });
});

app.use('/produtos', produtosRouter)
app.use('/pedidos', pedidosRouter)

app.listen(3000, () => {
    console.log('Servidor em http://localhost:3000')
})
