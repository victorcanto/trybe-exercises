// Selecione e faça a contagem dos restaurantes que possuem avaliação maior ou igual a 8 . (utilizando o atributo rating )

db.restaurants.find({ rating: { $gte: 8 } }).count();
