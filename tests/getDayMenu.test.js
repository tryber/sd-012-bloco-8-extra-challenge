const { it, expect } = require('@jest/globals');
const data = require('../data');
const { getDayMenu } = require('../src/challenges')



describe('3. Calcular menu com promoção baseado no dia', () => {
  it('should return common menu', () => {
    expect(getDayMenu('Friday')).toEqual(data.menu);
  })

  it('should return discounted menu', () => {
    const discountedMenu = {
      pizzas: [
        {
          name: 'Calabresa',
          price: 27,
          id: 'a82291d3-a866-4e3e-9e99-b9e92cd25319'
        },
        {
          name: 'Nordestina',
          price: 31.5,
          id: '3dd9b397-ccfa-48e4-a819-c2a69861217c'
        }
      ],
      drinks: [
        {
          name: 'Coca 1L',
          price: 7,
          id: 'ede6545e-0017-405e-90c1-3871405d4392'
        },
        {
          name: 'Água mineral',
          price: 5,
          id: '9541f304-0b91-482b-8d3f-94aebb5031e8'
        }
      ],
      sandwichItems: [
        {
          id: '14cb8e71-c752-49dc-a9d6-6bf6bad33939',
          name: 'Integral',
          price: 5.49,
          type: 'Bread'
        },
        {
          id: '6df584a9-6a18-4af5-b42c-736d82c29cbc',
          name: 'Mil Grãos',
          price: 5.49,
          type: 'Bread'
        },
        {
          id: '55d1264f-61a5-4a8d-9773-d2a12da0250c',
          name: 'Quatro Queijos',
          price: 5.49,
          type: 'Bread'
        },
        {
          id: 'ccfbc858-387f-4c74-970d-baeb2e895988',
          name: 'Cheddar',
          price: 5.49,
          type: 'Cheese'
        },
        {
          id: 'a91c1514-02d1-422f-9e3e-f9c784313371',
          name: 'Prato',
          price: 5.49,
          type: 'Cheese'
        },
        {
          id: '3bd1ab5b-6867-470e-b736-3b22ade4dd41',
          name: 'Suíço',
          price: 5.49,
          type: 'Cheese'
        },
        {
          id: 'c8c13b14-0914-4a87-8145-2cf9a5f86481',
          name: 'Carne',
          price: 5.49,
          type: 'Flavor'
        },
        {
          id: '1212297c-eb02-446d-8a15-acc563242303',
          name: 'Peixe',
          price: 5.49,
          type: 'Flavor'
        },
        {
          id: '8746e4f0-25c5-461c-b805-1102162085cb',
          name: 'Frango',
          price: 5.49,
          type: 'Flavor'
        }
      ]
    };

    expect(getDayMenu('Monday')).toEqual(discountedMenu);
  })
})