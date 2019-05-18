var Promise = require("bluebird");

function Livros(conexao) {
    // const this = {}
    this.conexao = conexao
    // retuurn this
}

Livros.prototype.lista = function listalivros() {
    const queryPromsificada = Promise.promisify(this.conexao.query).bind(this.conexao)                
    return queryPromsificada("SELECT * FROM livros")
}

Livros.prototype.cadastra = function cadastraLivro(livroNovo) {
    const queryPromsificada = Promise.promisify(this.conexao.query).bind(this.conexao)                
    return queryPromsificada(`INSERT INTO livros SET ?`, livroNovo)
}

// função construtora
// classe
module.exports = Livros