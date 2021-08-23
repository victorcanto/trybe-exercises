// Selecione os quatro primeiros clientes com as suas respectivas transações recebidas ordenados pelo estado em ordem alfabética;
db.clients.aggregate([
  {
    $lookup: {
      from: 'transactions',
      let: { client_name: '$name' },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ['$to', '$$client_name'],
            },
          },
        },
      ],
      as: 'received_transactions',
    },
  },
  { $limit: 4 },
  { $sort: { State: 1 } },
]);
