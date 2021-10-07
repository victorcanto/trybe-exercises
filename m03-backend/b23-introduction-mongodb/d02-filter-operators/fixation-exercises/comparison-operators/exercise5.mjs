// Selecione e faça a contagem dos restaurantes que não possuem as avaliações 5 , 6 e 7 .

db.restaurants.find({ rating: { $nin: [5, 6, 7] } }).count();
