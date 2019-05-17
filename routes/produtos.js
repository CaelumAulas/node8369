const getConnection = require("../db/getConnection")

module.exports = function (servidor) {
    
    servidor.get("/produtos", function respondeProdutos(request, resposta, next) {
        
        const conexao = getConnection()
                
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

    // servidor.post("/produtos", function montaBody(request, resposta, next) {
    //     const queryString = require('query-string');

    //     request.body = ''
    //     request.on("data", function trataChunk(chunk) {
    //         request.body += chunk
    //     })

    //     request.on("end", function() {
    //         if(request.header("Content-Type") == "application/json") {
    //             request.body = JSON.parse(request.body)
    //         } else {
    //             request.body = queryString.parse(request.body)
    //         }
    //         next()
    //     })
    // })

    // servidor.post("/produtos", bodyParser.urlencoded())
    // servidor.post("/produtos", bodyParser.json())

    servidor.post("/produtos", function(request, resposta, next) {
        const conexao = getConnection()
        const livroNovo = request.body

        // Se estiver inválido
        // resposta.render("produtos/form", { validationErrors: [] })

        conexao.query(`INSERT INTO livros SET ?`, livroNovo, function(erroMysql) {
            try {
                if(erroMysql) throw erroMysql
                resposta.redirect("/produtos")
            } catch (erro) {
                next(erro)
            }
        })
    })
}
