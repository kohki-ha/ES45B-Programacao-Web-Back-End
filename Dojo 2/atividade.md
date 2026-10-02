## Descrição da atividade

Você deverá criar um pequeno projeto em NodeJS no Visual Studio Code, seguindo as instruções:

## 1. Preparar o ambiente

Certifique-se de que o Node.js e NPM está instalado.

No terminal do VS Code, digite:

```bash
node -v
npm -v
```

Se aparecerem as versões, está tudo certo.

## 2. Criar a pasta do projeto

No computador, crie uma pasta chamada `meu-projeto-node`.

Abra o VS Code.

Clique em **File > Open Folder** e selecione `meu-projeto-node`.

## 3. Inicializar o projeto Node

No terminal integrado do VS Code (`Ctrl + '`), digite:

```bash
npm init -y
```

Será criado o arquivo `package.json`.

Abra esse arquivo no VS Code e edite o campo `"author"` para colocar o seu nome.

## 4. Criar módulo de operações

Crie um app contendo as rotas no arquivo `operacoes.js`:

- `POST: /adição(a, b)` - retorna o resultado de `a+b`;
- `GET: /adicao` - exibe a mensagem `"Você esta na rota adição"`;
- `POST: /subtração(a, b)` - retorna o resultado de `a-b`;
- `GET: /adicao` - exibe a mensagem `"Você esta na rota subtração"`;
- `POST: /multiplicacao(a, b)` - retorna o resultado de `a*b`;
- `GET: /multiplicacao` - exibe a mensagem `"Você esta na rota multiplicação"`;
- `POST: /divisão(a, b)` - por padrão retorna o resultado de `a/b` OU se `b=0` deve retornar `"Erro: divisão por zero!"`;
- `GET: /divisao` - exibe a mensagem `"Você esta na rota divisão"`.

Exporte todas as funções com `module.exports`.

## 5. Criar arquivo principal

Crie um arquivo chamado `app.js`.

Importe o módulo `operacoes.js`.

Imprima no console os resultados das operações:

- `8 + 4`
- `15 - 7`
- `6 * 3`
- `20 / 5`
- `10 / 0`

## 6. Usar pacote externo

Instale o Lodash com:

```bash
npm install lodash
```

No `app.js`, use `_.random(1, 30)` para exibir um número aleatório entre 1 e 30.

## Entrega

Esta atividade será desenvolvida de forma colaborativa em sala de aula.

Desenvolva o formulário solicitado e o arquivo JavaScript solicitado em casa, faça commit do código no GitHub. Envie como resposta o link para a pasta do GitHub com a atividade.

Na aula de quinta-feira 24/09/2026 alguns alunos serão sorteados para desenvolver uma parte do código no computador projetado para os colegas. A atividade é avaliativa, o envio do código não computa nota, apenas a apresentação.

Os alunos que não apresentarem nesta aula, farão a atividade nas próximas rodadas do mesmo formato.

Envie o arquivo `.zip` pelo Moodle até o dia **24/09/2026 às 21h20**.
