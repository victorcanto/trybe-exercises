// Exercício 15: Selecione todos os super-heróis que pesem entre 80kg e 100kg , sejam Humanos ou Mutantes e não sejam publicados pela DC Comics .

db.superheroes.find({
  $and: [
    { 'aspects.weight': { $gt: 80.0, $lt: 100.0 } },
    { race: { $in: ['Human', 'Mutant'] } },
    { publisher: { $ne: 'DC Comics' } },
  ],
});
