/**
 * Busque o serviço com o _id sendo ObjectId('62ad05c4fc13ae06ae00000a')
 * e faça um lookup para trazer os dados do animal,
 * outro lookup para os dados do cliente, e um Project para que sejam mostrados somente
 * os dados "animal.nome", "animal.tipo", "animal._id", "cliente.nome", "cliente._id", "forma_pagamento" e "status"
 */

db.servicos.aggregate(
    [
        { //buscar o servico específicado
            $match:{
                _id:ObjectId('62ad05c4fc13ae06ae00000a')
            }
        },
        { // buscar os dados do animal tratado no serviço
            $lookup:{
                from:"animais", // Nome da coleção da qual você deseja obter os dados para a junção.
                localField:"id_animal", //O campo na coleção local que será usado como referência para a junção.
                foreignField: "_id", //campo na coleção externa que será usado para a junção (deve ser compatível com o localField)
                as: "animal_infos"


            }
        } 
        // trazer dados do cliente que recebeu o serviço buscado acima
        //nome do cliente e do animal, tipo do animal, id do cliente e do animal, forma de pagamento e status
    ]
)
