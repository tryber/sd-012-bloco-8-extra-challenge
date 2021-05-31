const data = {
  deliver: 10,
  menu: {
    pizzas: [
      { name: 'Calabresa', price: 30, id: 'a82291d3-a866-4e3e-9e99-b9e92cd25319' },
      { name: 'Nordestina', price: 35, id: 'a82291d3-a866-4e3e-9e99-b9e92cd25319' }
    ],
    drinks: [
      { name: 'Coca 1L', price: 7, id: 'a82291d3-a866-4e3e-9e99-b9e92cd25319' },
      { name: 'Água mineral', price: 5, id: 'a82291d3-a866-4e3e-9e99-b9e92cd25319' }
    ],
    sandwichItems: [
      {
        id: 'a82291d3-a866-4e3e-9e99-b9e92cd25319',
        name: 'Integral',
        price: 5.49, 
        type: 'Bread'
      },
      {
        id: 'a82291d3-a866-4e3e-9e99-b9e92cd25319',
        name: 'Mil Grãos',
        price: 5.49,
        type: 'Bread'
      },
      {
        id: 'a82291d3-a866-4e3e-9e99-b9e92cd25319',
        name: 'Quatro Queijos',
        price: 5.49,
        type: 'Bread'
      },
      {
        id: 'a82291d3-a866-4e3e-9e99-b9e92cd25319',
        name: 'Cheddar',
        price: 5.49,
        type: 'Cheese'
      },
      {
        id: 'a82291d3-a866-4e3e-9e99-b9e92cd25319',
        name: 'Prato',
        price: 5.49,
        type: 'Cheese'
      },
      {
        id: 'a82291d3-a866-4e3e-9e99-b9e92cd25319',
        name: 'Suíço',
        price: 5.49,
        type: 'Cheese'
      },
      {
        id: 'a82291d3-a866-4e3e-9e99-b9e92cd25319',
        name: 'Carne',
        price: 5.49,
        type: 'Flavor'
      },
      {
        id: 'a82291d3-a866-4e3e-9e99-b9e92cd25319',
        name: 'Peixe',
        price: 5.49,
        type: 'Flavor'
      },
      {
        id: 'a82291d3-a866-4e3e-9e99-b9e92cd25319',
        name: 'Frango',
        price: 5.49,
        type: 'Flavor'
      },
    ]
  },
  sales: {
    monday: {
      name: 'Pizza 10% OFF',
    },
    tuesday: {
      name: 'Deliver OFF',
    },
  },
  premade: {
    sandwichs: [
      {
        id: 'a82291d3-a866-4e3e-9e99-b9e92cd25319',
        name: 'Trybe Sandwich',
        ingredients: [
          'a82291d3-a866-4e3e-9e99-b9e92cd25319',
          'a82291d3-a866-4e3e-9e99-b9e92cd25319',
          'a82291d3-a866-4e3e-9e99-b9e92cd25319'
        ]
      }
    ],
    combos: [
      {
        id: 'a82291d3-a866-4e3e-9e99-b9e92cd25319',
        name: 'Combo 01',
        items : [
          'a82291d3-a866-4e3e-9e99-b9e92cd25319',
          'a82291d3-a866-4e3e-9e99-b9e92cd25319',
          'a82291d3-a866-4e3e-9e99-b9e92cd25319'
        ]
      }
    ]
  }
}

// Quanto custa o sanduíche trybe?
// Montar e validar sanduíche recebendo ingredientes e retornar o preço 
// Calcular menu com promoção baseado no dia
// Procurar pizzas mais baratas que X
// Calcular preço final e quanto fica pra cada amigo
// Retornar lanches e preço dos combos
