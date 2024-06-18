/*
 Considerando apenas os serviços com status de concluído, qual é o tipo de serviço mais realizado de junho/22?
 (Dica: Use o estágio $unwind para desconstruir os documentos de "$servicos" )
*/

db.servicos.aggregate(
    [
        {
            $match:{
                "data_atendimento":{
                    $gte: ISODate("2022-06-01"),
                    $lt: ISODate("2022-07-01")
                },
                "status":"Concluído"

            }
        },
        {$unwind: "$servicos"},
        {
            $group:{
                _id:"$servicos.nome",
                quantidade: {$sum: 1}
            }
        }
    ]
)