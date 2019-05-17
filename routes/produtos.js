const mysql = require("mysql")

module.exports = function (servidor) {
    
    servidor.get("/produtos", function respondeProdutos(request, resposta, next) {
        const conexao =  mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "cdc",
            port: 32769
        })

        conexao.query("SELECT * FROM livros", function respostaBanco(erroMysql, resultado) {
            try {
                if(erroMysql) throw erroMysql                    
                resposta.render("produtos/lista", {livros: resultado})                   
                conexao.end()
            } catch (erro) {
                next(erro)
            }
        })

    })

    servidor.get("/produtos/form", function(req, res){
        res.render("produtos/form", { validationErrors: [] })
    })
}
