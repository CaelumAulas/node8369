const express = require("express")

// Request listener
const servidor = express()

const porta = process.env.PORTA || 3000

servidor.get("/", function respondeHome(request, resposta) {
    resposta.end("Home")
})

servidor.get("/produtos", function respondeProdutos(request, resposta) {
    resposta.end("Produtos")
})

// Assíncrono
// Listener
// Função de callback
// Handler
// Função anônima
servidor.listen(porta, function(){
    console.log("Servidor rodando na porta " + porta)
})
