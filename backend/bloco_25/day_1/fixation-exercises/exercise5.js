// Selecione o valor total das transações em cada banco e quantas são;
use('agg_example');

db.transactions.aggregate([
  {
    $group: {
      _id: '$bank',
      totalValue: { $sum: '$value' },
      qtd: { $sum: 1 },
    },
  },
]);
