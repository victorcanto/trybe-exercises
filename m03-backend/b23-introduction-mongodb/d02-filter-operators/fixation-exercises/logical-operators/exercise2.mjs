// Selecione e faça a contagem dos restaurantes em que a avaliação seja maior ou igual a 6 , ou restaurantes localizados no bairro Brooklyn .

db.restaurants
  .find({ $or: [{ rating: { $gte: 6 } }, { borough: 'Brooklyn' }] })
  .count();
