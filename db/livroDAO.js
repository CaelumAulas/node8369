var Promise = require("bluebird");

function listalivros(conexao) {
    const queryPromsificada = Promise.promisify(conexao.query).bind(conexao)                
    return queryPromsificada("SELECT * FROM livros")
}

function cadastraLivro(conexao, livroNovo) {
    const queryPromsificada = Promise.promisify(conexao.query).bind(conexao)                
    return queryPromsificada(`INSERT INTO livros SET ?`, livroNovo)
}

// função construtora
// classe
module.exports = function Livros(conexao) {
    return {
        lista: () => listalivros(conexao)
        ,cadastra: (livroNovo) => cadastraLivro(conexao, livroNovo)
    }
}