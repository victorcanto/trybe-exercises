// Selecione todos os bancos, ou seja, valores do campo bank ;
use('agg_example');

db.transactions.aggregate([
  {
    $group: {
      _id: '$bank',
      count: { $sum: 1 },
    },
  },
]);
