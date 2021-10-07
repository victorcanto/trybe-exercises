// Utilizando o banco de dados storage , faça o seguinte exercício:
// Calcule qual será o preço de venda de cada produto caso haja uma promoção de 50% de desconto.
db.products.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      new_sale_price: {
        $subtract: [
          '$sale_price',
          {
            $multiply: [{ $divide: [50, 100] }, '$sale_price'],
          },
        ],
      },
    },
  },
]);
