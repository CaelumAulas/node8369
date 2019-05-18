var Promise = require("bluebird");

module.exports = class Livros {
    constructor(conexao) {
        this.conexao = conexao
    }
    
    lista() {
        return new Promise((resolve, reject) => {
            this.conexao.query("SELECT * FROM livros", function(erroMysql, resultado) {
                try {
                    if(erroMysql) throw erroMysql
                    resolve(resultado)
                } catch(erro) {
                    reject(erro)
                }
            })
        })
    }
    
    cadastra(livroNovo) {
        return new Promise((resolve, reject) => {
            this.conexao.query(`INSERT INTO livros SET ?`, livroNovo, function(erroMysql) {
                if(erroMysql) reject(erroMysql)
                resolve()
            })
        })
    }
    
}
