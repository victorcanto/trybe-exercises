// Selecione todos os clientes com as suas respectivas transações feitas;
db.clients.aggregate([
  {
    $lookup: {
      from: 'transactions',
      let: { client_name: '$name' },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ['$from', '$$user_name'],
            },
          },
        },
      ],
      as: 'transactions',
    },
  },
]);
