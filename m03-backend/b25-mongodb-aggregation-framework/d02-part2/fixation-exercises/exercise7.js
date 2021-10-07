// Utilizando o banco de dados storage:
// Retorne o maior número inteiro relativo ao lucro total sobre cada produto. Nota: Desconsiderar taxas (taxes)
db.products.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      ceil_price: {
        $ceil: {
          $subtract: ['$sale_price', '$purchase_price'],
        },
      },
    },
  },
]);
