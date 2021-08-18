// Selecione quatro clientes com as suas respectivas transações recebidas;
use('agg_example');

db.clients.aggregate([
  {
    $lookup: {
      from: 'transactions',
      localField: 'name',
      foreignField: 'to',
      as: 'clients_received_transactions',
    },
  },
  { $limit: 4 },
]);
