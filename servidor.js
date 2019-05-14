const express = require("express")

// Request listener
const servidor = express()

// Assíncrono
// Listener
// Função de callback
// Handler
// Função anônima
servidor.listen(3000, function(){
    console.log("Servidor rodando na porta " + servidor.port)
})

