// Exercício 13 : Encontre qual foi o total de vendas e a média de vendas de cada uf no ano de 2019 . Ordene os resultados pelo nome da uf .
db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate("2019-01-01"),
        $lte: ISODate("2019-12-31")
      }
    }
  },
  {
    $lookup: {
      from: "clientes",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "dadosCliente"
    }
  },
  {
    $unwind: "$dadosCliente"
  },
  {
    $group: {
      _id: "$dadosCliente.endereco.uf",
      mediaVendas: {$avg: "$valorTotal"},
      totalVendas: {$sum: 1}
    }
  },
  {
    $project: {
      _id: 0,
      uf: "$_id",
      mediaVendas: "$mediaVendas",
      totalVendas: "$totalVendas"
    }
  },
  {
    $sort: {
      uf: 1
    }
  }, 
]);
