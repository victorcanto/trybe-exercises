// Utilizando o banco de dados storage
// Calcule qual será o lucro total de cada produto caso todo o estoque seja vendido.

db.products.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      total_profit: {
        $multiply: [
          {
            $subtract: ['$sale_price', { $add: ['$taxes', '$purchase_price'] }],
          },
          '$quantify',
        ],
      },
    },
  },
]);
