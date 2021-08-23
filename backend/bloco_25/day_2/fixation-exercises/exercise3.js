// Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas.
db.clients.aggregate([
  {
    $match: { State: 'Florida' },
  },
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
]);
