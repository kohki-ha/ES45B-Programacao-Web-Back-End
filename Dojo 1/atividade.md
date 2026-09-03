# Desafio: Construindo um Mini Processador de Dados

Você recebeu um conjunto de dados simulando registros de usuários de um sistema.

```js
const usuarios = [
  { nome: "Ana", idade: 20, ativo: true, compras: [100, 50, 25] },
  { nome: "Bruno", idade: 17, ativo: false, compras: [30, 20] },
  { nome: "Carlos", idade: 32, ativo: true, compras: [200, 150, 50, 100] },
  { nome: "Diana", idade: 25, ativo: true, compras: [] },
  { nome: "Eduardo", idade: 15, ativo: false, compras: [10] }
];
```

Seu objetivo é desenvolver um **script Node.js** que processe esses dados e gere relatórios.

---

## Parte 1 — Total de Compras por Usuário

Utilizando **arrow functions**, calcule o valor total de compras de cada usuário.

**Resultado esperado:**

```text
Ana: total = 175
Bruno: total = 50
Carlos: total = 500
Diana: total = 0
Eduardo: total = 10
```

---

## Parte 2 — Usuários Ativos

Utilizando **arrow functions**, filtre apenas os usuários que estão **ativos**.

**Resultado esperado:**

```text
Ana
Carlos
Diana
```

---

## Parte 3 — Usuários Maiores de Idade

Liste apenas usuários com **idade >= 18**.

Utilize **arrow functions**.

---

## Parte 4 — Usuário com Maior Volume de Compras

Determine qual usuário possui o **maior total de compras**.

**Resultado esperado (aproximado):**

```text
Usuário com maior volume: Carlos
Total: 500
```

---

## Parte 5 — Desafio de Coerção de Tipos

Analise o seguinte código:

```js
console.log("5" + 2);
console.log("5" - 2);
console.log(true + 1);
console.log(false == 0);
console.log(false === 0);
```

Explique **por que cada resultado ocorre**.

**Dica:** pesquise sobre **coerção de tipos em JavaScript**.

---

## Parte 6 — Desafio Arrow Function vs Function

Observe os dois códigos:

### Código 1

```js
const pessoa = {
  nome: "Maria",
  falar: function(){
    console.log(this.nome);
  }
};

pessoa.falar();
```

### Código 2

```js
const pessoa = {
  nome: "Maria",
  falar: () => {
    console.log(this.nome);
  }
};

pessoa.falar();
```

Execute os dois exemplos e responda:

1. Qual deles funciona corretamente?
2. Por que o outro não funciona?
3. Qual é o comportamento de `this` em arrow functions?

---

## Parte 7 — Desafio Final

Crie uma função chamada `gerarRelatorio`.

Ela deve retornar um objeto contendo:

```js
{
  totalUsuarios: X,
  usuariosAtivos: X,
  usuariosInativos: X,
  mediaIdade: X,
  maiorComprador: "nome"
}
```

Utilize **arrow functions sempre que possível**.

**Exemplo de saída:**

```js
{
  totalUsuarios: 5,
  usuariosAtivos: 3,
  usuariosInativos: 2,
  mediaIdade: 21.8,
  maiorComprador: "Carlos"
}
```

---

# Regras do Desafio

- Utilize **arrow functions sempre que possível**
- Utilize **arrays e objetos**
- Utilize **console.log para exibir os resultados**
- Não utilizar bibliotecas externas

---

# Desafio Extra (para quem terminar antes)

Implemente uma função que retorne:

- o **usuário mais jovem**
- o **usuário mais velho**
- o **valor médio das compras por usuário**

Utilizando **arrow functions** e **métodos de array**.