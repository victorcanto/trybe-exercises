// Selecione três transações com o valor acima de 1000.

use('agg_example');

db.transactions.aggregate([
  { $match: { value: { $gt: 1000 } } },
  { $limit: 3 },
]);
