/*
 * Faça uma busca considerando os serviços Concluídos entre 01/maio/22 a 30/junho/22, sendo somente dos animais Coelho e Hamster
 * E agora, descubra qual o valor total gasto em serviços com esses dois tipos de animais.
 */
db.servicos.aggregate(
    [
        { //buscar data
            $match:{
                "data_atendimento":{
                    $gte:ISODate("2022-05-01"),
                    $lte:ISODate("2022-06-30")
                },
                "status":"Concluído",
            }
        },
        {//buscar coelhos e hamsters
            $lookup:{
            from:"animais",
            localField:"id_animal",
            foreignField:"_id",
            as:"tipo_animal"
            }
        },
        {//agrupar o total gasto com serviços em hamsters e coelhos
            $group:{
                _id:"$tipo_animal.tipo",
                total_gasto: {$sum : 1}
            }

        }
    ]
)