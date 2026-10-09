# Parte 2: Conceitos de API REST

1. Uma API é uma interface que permite a comunicação entre o cliente e o servidor. Na lanchonete, o cliente é o aplicativo no celular, e o servidor é a aplicação em Node.js com Express. O aplicativo envia uma requisição GET /produtos para consultar o cardápio, e o servidor responde com a lista de produtos em JSON.

2. Stateless significa que o servidor não precisa guardar uma sessão do cliente para entender as próximas requisições. Em POST /pedidos, cada requisição envia o nome do cliente e os itens necessários para registrar o pedido. Guardar os pedidos no array é permitido, pois são dados da lanchonete, e não uma sessão do cliente.

3. req.params pega um valor que faz parte do caminho, como o id em GET /produtos/3. req.query pega filtros da URL, como categoria=bebida em GET /produtos?categoria=bebida. req.body pega os dados enviados no corpo, como nome, categoria, preço e estoque em POST /produtos.

4. app.use(express.json()) transforma o JSON enviado no corpo da requisição em um objeto disponível em req.body. Sem esse middleware, POST /produtos não consegue ler os campos enviados para validar e cadastrar o produto.

5. POST /produtos retorna 201 quando o produto é criado e 400 quando os dados enviados são inválidos. GET /produtos/:id retorna 404 quando o produto não existe. Devolver sempre 200 indicaria sucesso até nos casos de erro, dificultando o tratamento da resposta pelo aplicativo.

6. O nodemon fica em devDependencies porque reinicia o servidor quando o código muda durante o desenvolvimento. O Express fica em dependencies porque a API precisa dele para funcionar. A pasta node_modules contém os pacotes instalados e pode ser recriada com npm install a partir de package.json e package-lock.json, por isso não precisa ser entregue.
