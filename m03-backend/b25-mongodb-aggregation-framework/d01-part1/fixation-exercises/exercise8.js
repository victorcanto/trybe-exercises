// Selecione todos os clientes com as suas respectivas transações feitas;
use('agg_example');

db.clients.aggregate([
  {
    $lookup: {
      from: 'transactions',
      localField: 'name',
      foreignField: 'from',
      as: 'clients_and_transations',
    },
  },
]);
