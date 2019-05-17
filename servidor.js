const express = require("express")

// Request listener
const servidor = express()


servidor.set("view engine", "ejs")

servidor.use(express.urlencoded())
servidor.use(express.json())

require("./routes/home")(servidor)
require("./routes/produtos")(servidor)

servidor.use(express.static('./static'))

servidor.use(function responde404(request, resposta, next) {
    resposta
        .status(404)
        .render("erros/erro", {erro: "404 - Página não encontrada"})
})

servidor.use(function trataErro(erro, request, resposta, next){
    console.error("Endereço: " + request.url)
    console.error(erro)
    resposta
        .status(500)
        .render("erros/erro", { erro })
})

module.exports = servidor
