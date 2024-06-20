db.pedidos.aggregate([
    {
      $match: {
        $and: [{
          "data_hora_pedido": {
            $gte: ISODate("2021-01-01")
          }
        },
        {
          "data_hora_pedido": {
            $lte: ISODate("2022-12-31")
          }
        },
        {
          "id_cliente": 191
        }]
      }
    },
    {
      $project: {      
        "forma_pagamento": 1,
        "status": 1,
        "valor_total": 1
      }
    },
    {
      $sort: {
        "data_hora_pedido": 1
      }
    }
  ])
