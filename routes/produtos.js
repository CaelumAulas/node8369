const getConnection = require("../db/getConnection")

var Promise = require("bluebird");

module.exports = function (servidor) {
    
    servidor.get("/produtos", function respondeProdutos(request, resposta, next) {
        
        const conexao = getConnection()

        const queryPromsificada = Promise.promisify(conexao.query).bind(conexao)
                
        queryPromsificada("SELECT * FROM livros")
            .then(function respostaBanco(resultado) {

                resposta.format({
                    html: () => resposta.render("produtos/lista", {livros: resultado})
                    ,json: () => resposta.send(resultado)
                    ,default: () => next(new Error("Formato não suportado"))
                })
                
                conexao.end()
            })
            .catch(next)
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

        request.assert('titulo', "Nome obrigatório").notEmpty()
        request.assert('preco', "Preço inválido").isNumeric()

        const promiseValidacao = request.asyncValidationErrors()

        promiseValidacao
            .then(function validacao(){
                const queryPromsificada = Promise.promisify(conexao.query).bind(conexao)
                
                return queryPromsificada(`INSERT INTO livros SET ?`, livroNovo)
            })
            .then(function query() {
                resposta.redirect("/produtos")
            })
            .catch(function(erro) {
                next(erro)
            })
            
        promiseValidacao.catch(function erroValidacao(validationErrors) {
            resposta.render("produtos/form", { validationErrors })
        })
    })
}
