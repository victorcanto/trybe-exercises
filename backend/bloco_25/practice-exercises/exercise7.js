// Exercício 7 : Utilizando a mesma agregação do exercício anterior, adicione um estágio de projeção para modificar os documentos de saída
db.clientes.aggregate([
  {
    $group: {
      _id: {
        sexo: '$sexo',
        uf: '$endereco.uf',
      },
      total: { $sum: 1 },
    },
  },
  {
    $project: {
      _id: 0,
      estado: '$_id.uf',
      sexo: '$_id.sexo',
      total: '$total',
    },
  },
]);
