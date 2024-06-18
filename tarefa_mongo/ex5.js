/**
 * Busque o serviço com o _id sendo ObjectId('62ad05c4fc13ae06ae00000a') e faça um lookup para trazer os dados do animal,
 * outro lookup para os dados do cliente, e um Project para que sejam mostrados somente
 * os dados "animal.nome", "animal.tipo", "animal._id", "cliente.nome", "cliente._id", "forma_pagamento" e "status"
 */

db.servicos.aggregate(
    [
        {
            $match:{
                "_id":"ObjectId('62ad05c4fc13ae06ae00000a')"
            }
        },
        {
            $lookup:{
                from:"servicos",
                localField:""



            }
        }
    ]
)