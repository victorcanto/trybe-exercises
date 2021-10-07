// Exercício 10 : Descubra quantos clientes compraram mais de 5 vezes. Retorne um documento que contenha somente o campo clientes com o total de clientes.
db.vendas.aggregate([
  {
    $group: {
      _id: '$clienteId',
      totalCompras: {
        $sum: 1,
      },
    },
  },
  {
    $match: {
      totalCompras: { $gt: 5 },
    },
  },
  { $count: 'qtd_clientes' },
]);
