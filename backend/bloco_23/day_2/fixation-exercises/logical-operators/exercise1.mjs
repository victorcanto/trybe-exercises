// Selecione e faça a contagem dos restaurantes que não possuem avaliação menor ou igual a 5 , essa consulta também deve retornar restaurantes que não possuem o campo avaliação.

db.restaurants.find({ rating: { $not: { $gte: 5 } } }).count();
