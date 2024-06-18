/*
Busque pelo tipo de animal "COELHO" (tudo em maiúsculo) usando o formato de busca com Expressões Regex  /palavrabuscada/ porém,
informando que a busca deve ser feita ignorando letras maiúsculas e minúsculas.
*/

db.colecao.find({ campo: { $regex: /COELHO/i } })