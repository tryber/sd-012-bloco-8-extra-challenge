# Trybe Subway

## Requisitos

### 1. Quanto custa o sanduíche trybe?
Implemente a função `getSandwichPrice`.

Ela deve receber o nome de um sanduíche e, com base nos seus ingredientes, calcula seu preço final. O preço deve ser a soma do preço de cada ingrediente.

Se não existir um sanduíche com o nome recebido, a função deve lançar um erro com a mensagem `Sanduíche não encontrado`.

### 2. Montar e validar sanduíche recebendo ingredientes e retornar o preço 
Implemente a função `makeSandwich`.

Ela deve receber um array de ingredientes e retornar o preço total do sanduíche. O preço total deverá ser a soma dos ingredientes.

Caso algum ingrediente não esteja na base de dados, a função deve lançar um erro com a mensagem `Pedido inválido`.
### 3. Calcular menu com promoção baseado no dia
Implemente a função `getDayMenu`.

Ela deve receber um dia da semana e retornar o cardápio do dia. 

- Se esse dia constar nas promoções, deverá ser retornado o menu com um desconto de 10% aplicado nas pizzas. 
- Se o dia não constar, deverá ser retornado o menu padrão.

### 4. Procurar pizzas mais baratas que X
Implemente a função `getCheapestPizza`.

Ela deve receber um valor, que representa o dinheiro que um grupo de pessoas possui. 

A função deve retornar em formato de array as pizzas que são mais baratas que o valor recebida. Caso nenhuma pizza seja encontrada, deve-se retornar um array vazio.

### 5. Calcular preço final e quanto fica pra cada amigo
Implemente a função `getSharedBill`.

Ela deve receber dois parâmetros.
  - Um array com id dos produtos pedidos
  - A quantidade de amigos

A função deve retornar o quanto cada um deve pagar.

### 6. Retornar lanches e preço dos combos
Implemente a função `getComboSandwichsAndPrices`.

Ao ser executada, deverá retornar um array de combos, com os itens que os compõem. O array deverá ser no seguinte formato:
```js
[
  {
    drink: "Bebida",
    name: "Nome do Combo",
    price: 99.99,
    sandwich: "Zoo Sandwich",
  },
]
```