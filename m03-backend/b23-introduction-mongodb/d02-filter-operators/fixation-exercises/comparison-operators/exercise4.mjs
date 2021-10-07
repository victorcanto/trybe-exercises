// Selecione e faça a contagem dos restaurantes que possuem avaliação menor que 4 .

db.restaurants.find({ rating: { $lt: 4 } }).count();
