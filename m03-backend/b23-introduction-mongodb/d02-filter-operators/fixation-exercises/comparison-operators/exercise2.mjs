// Selecione e faça a contagem dos restaurantes que não possuem culinária do tipo American . (utilizando o atributo cuisine )

db.restaurants.find({ cuisine: { $ne: 'American' } }).count();
