// Selecione e faça a contagem dos restaurantes localizados nos bairros Queens , Staten Island e Broklyn e possuem avaliação maior que 4 .
db.restaurants
  .find({
    $and: [
      { borough: { $in: ['Queens', 'Staten Island', 'Broklyn'] } },
      { rating: { $gt: 4 } },
    ],
  })
  .count();
