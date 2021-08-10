// Selecione e faça a contagem dos resturantes em que a avaliação seja maior que 6 ou menor que 10 , E esteja localizado no bairro Brooklyn , OU não possuem culinária do tipo Delicatessen .
db.restaurants
  .find({
    $and: [
      { $or: [{ rating: { $gt: 6 } }, { rating: { $lt: 10 } }] },
      { $or: [{ borough: 'Brooklyn' }, { cuisine: { $ne: 'Delicatessen' } }] },
    ],
  })
  .count();

// OU

db.restaurants
  .find({
    $and: [
      { $or: [{ rating: { $gt: 6 } }, { rating: { $lt: 10 } }] },
      {
        $or: [
          { borough: 'Brooklyn' },
          { cuisine: { $not: { $eq: 'Delicatessen' } } },
        ],
      },
    ],
  })
  .count();
