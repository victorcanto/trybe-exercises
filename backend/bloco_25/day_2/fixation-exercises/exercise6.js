// Utilizando o banco de dados storage , faça os seguintes exercícios:
// Retorne o menor número inteiro relativo ao preço de venda de cada produto;
db.products.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      floor_price: {
        $floor: '$sale_price',
      },
    },
  },
]);
