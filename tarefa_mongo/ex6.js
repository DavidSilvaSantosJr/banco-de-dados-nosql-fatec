/*
 * Busque por todos os Serviços, fazendo um lookup para trazer os dados do animal e depois agrupe-os por tipo de animal. 
 * Ainda no group, traga também a contagem ($sum) de serviços com o tipo de animal e média ($avg) de gastos com cada tipo.
 */

db.servicos.aggregate(
    [
        { //serviços feitos
            $lookup:{
                from:"animais",
                localField:"id_animal",
                foreignField:"_id",
                as:"animais_infos"
    
            }
        },
        {//agrupar por tipo de anima
            $group:{
                _id: "$animais_infos.tipo",
                tota_servicos_tipo: {$sum : 1},
                avg_gastos_tipo: {$avg:"$valor_servico"}
            }
        }
    ]
)
