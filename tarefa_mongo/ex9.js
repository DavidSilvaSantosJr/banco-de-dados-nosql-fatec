/*
 * Faça uma busca considerando somente os serviços Concluídos de 01/janeiro/22 a 30/junho/22, 
 * e traga os dados do animal e do dono, ordenando pelo valor do serviço mais caro e limitando a apenas 1 documento de retorno dessa query. 
 * Ou seja, queremos saber os dados do serviço mais caro nesse período, qual é o tipo de animal e qual o nome os dados do dono.
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

    }
])