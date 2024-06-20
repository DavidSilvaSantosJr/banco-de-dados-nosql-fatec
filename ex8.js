/*
 * Qual o total de serviços concluídos e cancelados em junho/22?
 */

db.servicos.aggregate(
    [
        {//buscar serviços de junho/22
            $match:{
                "status" : {$in : ["Concluído", "Cancelado"]},
                "data_atendimento" : {
                    $gte:ISODate("2022-06-01"),
                    $lt:ISODate("2022-07-01")
                }
            }
        },
        {//total
            $group:{
                _id : "$status",
                total : {$sum : 1}
            }
        }
    ]
)