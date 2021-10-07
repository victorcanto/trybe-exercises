const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
const arr = Object.values(order);
  return `Olá ${arr[3].delivery.deliveryPerson} , entrega para: ${arr[0]}, Telefone: ${arr[1]}, R. ${arr[2].street}, N°: ${arr[2].number}, AP: ${arr[2].apartment}`
}
customerInfo(order);

const orderModifier = (order) => {
  const orderValues = Object.values(order);
  const pizzaKeys = Object.keys(orderValues[3].pizza)
  const drinkKeys = Object.keys(orderValues[3].drinks)
  const payamentValue = Object.values(orderValues[4]);
  return ` Olá ${orderValues[0]}, o total do seu pedido de ${pizzaKeys[0]}, ${pizzaKeys[1]} e ${drinkKeys[0]} é R$ ${payamentValue[0]},00`
  
}
orderModifier(order);