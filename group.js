db.pedidos.aggregate([
    {
        $match :{
            "id_cliente" : 81
        }
    },
    {
        $group:{
            _id: {cliente: "id_cliente"},
            total: {$sum: "$valor_total"}
        }
    },
    {
        $project:{
            "data_hora_pedido":1,
            "forma_envio.endereco.cidade":1,
            "forma_pagamento":1,
            "total":1
        }
    }
])
