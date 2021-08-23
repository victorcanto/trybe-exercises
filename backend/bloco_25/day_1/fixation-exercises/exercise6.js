// Selecione o valor total de transações;
use('agg_example');

db.transactions.aggregate([
  {
    $group: {
      _id: '$bank',
      totalValue: { $sum: '$value' },
    },
  },
]);
