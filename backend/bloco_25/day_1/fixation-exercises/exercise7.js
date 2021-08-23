// Selecione os bancos que têm o valor total de transações maior que 1000.
use('agg_example');

db.transactions.aggregate([
  { $match: { value: { $gt: 1000 } } },
  {
    $group: {
      _id: '$bank',
      totalValue: { $sum: '$value' },
    },
  },
]);
