var Promise = require("bluebird");

module.exports = class Livros {
    constructor(conexao) {
        this.conexao = conexao
    }
    
    lista() {
        const queryPromsificada = Promise.promisify(this.conexao.query).bind(this.conexao)                
        return queryPromsificada("SELECT * FROM livros")
    }
    
    cadastra(livroNovo) {
        const queryPromsificada = Promise.promisify(this.conexao.query).bind(this.conexao)                
        return queryPromsificada(`INSERT INTO livros SET ?`, livroNovo)
    }
}
