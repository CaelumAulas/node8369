const express = require("express")

const expressValidator = require("express-validator")

// Request listener
const servidor = express()


servidor.set("view engine", "ejs")

servidor.use(express.urlencoded())
servidor.use(express.json())

servidor.use(expressValidator())

require("./routes/home")(servidor)
require("./routes/produtos")(servidor)

servidor.use(express.static('./static'))

servidor.use(function responde404(request, resposta, next) {
    resposta.status(404).format({
        html: () =>  resposta.render("erros/erro", {erro: "404 - Página não encontrada"})
        ,json: () => resposta.send({erro: "404 - Página não encontrada"})
    })
})

servidor.use(function trataErro(erro, request, resposta, next){
    console.error("Endereço: " + request.url)
    console.error(erro)
    resposta.status(500).format({
        html: () =>  resposta.render("erros/erro", { erro })
        ,json: () => resposta.send(erro)
    })
})

module.exports = servidor
