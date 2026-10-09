# Testes das rotas

Com o servidor iniciado pelo comando `npm start`, foram feitas as requisições abaixo. Os testes usam os dados iniciais do arquivo `dados.js`. Como os dados ficam em memória, reinicie o servidor para começar de novo.

## Parte 3

### 1. GET /

Requisição: `curl -i http://localhost:3000/`

Status: 200

Resposta: `{"mensagem":"API da Lanchonete do Campus","versao":"1.0.0","rotas":["GET /","GET /produtos","GET /produtos/resumo","GET /produtos/:id","POST /produtos","POST /produtos/:id/repor","POST /estoque/repor","POST /pedidos","GET /pedidos/relatorio"]}`

### 2. GET /produtos sem filtros

Requisição: `curl -i http://localhost:3000/produtos`

Status: 200

Resposta: lista com os seis produtos cadastrados inicialmente.

### 3. GET /produtos com filtros

Requisição: `curl -i "http://localhost:3000/produtos?categoria=doce&precoMax=5"`

Status: 200

Resposta: `[{"id":5,"nome":"Brigadeiro","categoria":"doce","preco":3.5,"estoque":40}]`

### 4. GET /produtos/:id

Requisição: `curl -i http://localhost:3000/produtos/1`

Status: 200

Resposta: `{"id":1,"nome":"Coxinha","categoria":"salgado","preco":7.5,"estoque":20}`

### 5. GET /produtos/resumo

Requisição: `curl -i http://localhost:3000/produtos/resumo`

Status: 200

Resposta: `{"totalProdutos":6,"valorEmEstoque":560,"precoMedio":6.08,"semEstoque":["Refrigerante lata","Bolo de cenoura"]}`

## Parte 4

### 6. POST /estoque/repor

Requisição: `curl -i -X POST http://localhost:3000/estoque/repor`

Status: 200

Resposta: `{"mensagem":"2 produto(s) reposto(s)","produtos":["Refrigerante lata","Bolo de cenoura"]}`

### 7. POST /produtos com dados válidos

Requisição:

```bash
curl -i -X POST http://localhost:3000/produtos \
  -H "Content-Type: application/json" \
  -d '{"nome":"Café","categoria":"bebida","preco":4.5,"estoque":25}'
```

Status: 201

Resposta: `{"id":7,"nome":"Café","categoria":"bebida","preco":4.5,"estoque":25}`

### 8. POST /pedidos com pedido válido

Requisição:

```bash
curl -i -X POST http://localhost:3000/pedidos \
  -H "Content-Type: application/json" \
  -d '{"cliente":"Ana","itens":[{"id":1,"quantidade":2},{"id":3,"quantidade":2}]}'
```

Status: 201

Resposta: `{"id":1,"cliente":"Ana","itens":[{"id":1,"nome":"Coxinha","quantidade":2,"preco":7.5,"total":15},{"id":3,"nome":"Suco de laranja","quantidade":2,"preco":8,"total":16}],"subtotal":31,"desconto":3.1,"total":27.9}`

### 9. GET /produtos/1 depois do pedido

Requisição: `curl -i http://localhost:3000/produtos/1`

Status: 200

Resposta: produto Coxinha com estoque 18, após a compra de duas unidades.

### 10. POST /pedidos com outro pedido válido

Requisição:

```bash
curl -i -X POST http://localhost:3000/pedidos \
  -H "Content-Type: application/json" \
  -d '{"cliente":"Bruno","itens":[{"id":1,"quantidade":1}]}'
```

Status: 201

Resposta: pedido de Bruno com subtotal e total de 7.5 e desconto 0.

## Casos de erro

### 11. GET /produtos/:id com id inexistente

Requisição: `curl -i http://localhost:3000/produtos/999`

Status: 404

Resposta: `{"erro":"Produto não encontrado"}`

### 12. POST /produtos com dados inválidos

Requisição:

```bash
curl -i -X POST http://localhost:3000/produtos \
  -H "Content-Type: application/json" \
  -d '{"nome":"","categoria":"comida","preco":-1,"estoque":-1}'
```

Status: 400

Resposta: lista de erros para nome, categoria, preço e estoque.

### 13. POST /pedidos com estoque insuficiente

Requisição:

```bash
curl -i -X POST http://localhost:3000/pedidos \
  -H "Content-Type: application/json" \
  -d '{"cliente":"Ana","itens":[{"id":3,"quantidade":100}]}'
```

Status: 400

Resposta: `{"erro":"Estoque insuficiente para Suco de laranja"}`

## Testes dos bônus

### B1. Rotas organizadas com express.Router()

Requisição: `curl -i http://localhost:3000/produtos`

Status: 200

Resposta: lista com os seis produtos, confirmando que o roteador foi registrado no servidor.

### B2. GET /pedidos/relatorio

Depois dos dois pedidos válidos usados no teste de pedidos, a requisição foi:

`curl -i http://localhost:3000/pedidos/relatorio`

Status: 200

Resposta: `{"totalPedidos":2,"faturamentoTotal":35.4,"produtoMaisVendido":"Coxinha"}`

### B3. POST /produtos/:id/repor com quantidade válida

Requisição:

```bash
curl -i -X POST http://localhost:3000/produtos/4/repor \
  -H "Content-Type: application/json" \
  -d '{"quantidade":5}'
```

Status: 200

Resposta: produto Refrigerante lata com estoque 15.

### B3. POST /produtos/:id/repor com quantidade inválida

Requisição:

```bash
curl -i -X POST http://localhost:3000/produtos/4/repor \
  -H "Content-Type: application/json" \
  -d '{"quantidade":0}'
```

Status: 400

Resposta: `{"erro":"quantidade deve ser um inteiro positivo"}`
