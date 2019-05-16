const express = require("express")

// Request listener
const servidor = express()

servidor.set("view engine", "ejs")

require("./routes/home")(servidor)
require("./routes/produtos")(servidor)

servidor.use(express.static('./static'))

servidor.use(function responde404(request, resposta) {
    resposta
        .status(404)
        .render("erros/erro", {erro: "404 - Página não encontrada"})
})

module.exports = servidor
