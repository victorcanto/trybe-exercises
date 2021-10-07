// Utilizando o banco de dados storage , faça o seguinte exercício:
// Calcule qual o lucro total de cada produto, considerando o preço de compra, os impostos e seu valor de venda.

use('storage');
// db.products.find();

db.products.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      total_profit: {
        $subtract: ['$sale_price', { $add: ['$taxes', '$purchase_price'] }],
      },
    },
  },
]);
