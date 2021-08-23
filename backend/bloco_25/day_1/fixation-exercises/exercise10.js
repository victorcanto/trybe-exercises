// Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas.
use('agg_example');

db.clients.aggregate([
  {
    $match: { State: 'Florida' },
  },
  {
    $lookup: {
      from: 'transactions',
      localField: 'name',
      foreignField: 'to',
      as: 'clients_received_transactions',
    },
  },
]);
