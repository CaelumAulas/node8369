const mysql = require("mysql")

module.exports = function (servidor) {
    servidor.get("/produtos", function respondeProdutos(request, resposta) {
    
        const conexao =  mysql.createConnection({
            host: "tcp://0.tcp.ngrok.io",
            user: "root",
            password: "",
            database: "cdc",
            port: 18195
        })

       conexao.query("SELECT * FROM livros", function respostaBanco(erro, resultado) {
        console.log(resultado)
        resposta.render("produtos/lista", {livros: resultado})
        
        conexao.end()
       })

    })

    servidor.get("/produtos/form", function(req, res){
        res.render("produtos/form", { validationErrors: [] })
    })
}
