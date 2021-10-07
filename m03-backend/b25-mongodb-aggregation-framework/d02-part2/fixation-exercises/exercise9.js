// Utilizando o banco de dados storage
// Calcule qual o valor total em estoque de cada produto, considerando o preço de venda e a quantidade;
db.products.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      total_profit: {
        $multiply: ['$sale_price', '$quantify'],
      },
    },
  },
]);
