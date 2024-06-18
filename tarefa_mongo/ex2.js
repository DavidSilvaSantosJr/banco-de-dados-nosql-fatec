/*
Faça um agrupamento (group) de todos os animais pelo seu tipo e identifique qual a quantidade de animais para cada tipo
*/

db.animais.aggregate(
    [
        {
            $group:{
                _id:"$tipo",
                TotalAnimais: {$sum: 1}
            }
        }
    ]
)