/*
Verifique quais as modalidades de pagamento existentes (que já foram cadastradas)
por ordem de preferência (sem considerar nenhuma data). 
(Dica: Use o estágio $group e crie um campo de contador ex.: contagem: {$sum: 1} e o $sort para ordenar)
*/

db.servicos.aggregate(
    [
        {
            $group:{
                _id:"$forma_pagamento",
                "FormaPagamento":{$sum : 1}
                
            }
        },
        {
            $sort:{
                "_id.FormaPagamento" : 1
            }
        }
    ]
) 