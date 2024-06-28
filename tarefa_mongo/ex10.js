/**
 *Semelhante ao item anterior, faça agora uma busca considerando o serviço mais barato realizado no período.
 */

 db.servicos.aggregate([
    {//servicos concluidos entre jan/jun 2022
        $match:{
            "status" : "Concluído",
            "data_atendimento" : {
                $gte:ISODate("2022-01-01"),
                $lte:ISODate("2022-06-30")
            }
        }
    
    },
    { // buscar os dados do animal
        $lookup:{
            from:"animais", // Nome da coleção da qual você deseja obter os dados para a junção.
            localField:"id_animal", //O campo na coleção local que será usado como referência para a junção.
            foreignField: "_id", //campo na coleção externa que será usado para a junção (deve ser compatível com o localField)
            as: "animal_infos"
        }
    },
    {
        $unwind: "$animal_infos",
    
    },
    {// trazer dados do cliente 
        $lookup:{
            from:"clientes",
            localField:"id_animal",
            foreignField:"animais.id_animal",
            as: "cliente_infos"
        }
    },
    {
        $unwind: "$cliente_infos"
    },
    {//nome do cliente e do animal, tipo do animal, id do cliente e do animal, forma de pagamento e status
        $project:{
            "animal.tipo":1,
            "cliente_infos.nome":1,
            "cliente_infos.id":1,
            valor_servico:1,
            status:1
        }
    },
    {
        $sort:{
            valor_servico:1,
        }
    },
    {$limit:1}
    ])