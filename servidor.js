const express = require("express")

// Request listener
const servidor = express()

servidor.get("/", function respondeHome(request, resposta) {
    resposta.render("home/home.ejs")
})

servidor.get("/produtos", function respondeProdutos(request, resposta) {
    const listaDoBanco = [
        {
            titulo: "Android"
            ,preco: 50
            ,descricao: "Livro teste"
        }
        ,        {
            titulo: "Node"
            ,preco: 33
            ,descricao: "Livro teste"
        }
    ]

    resposta.render("produtos/lista.ejs", {livros: listaDoBanco})
})

servidor.use(express.static('./static'))

servidor.use(function responde404(request, resposta) {
    resposta
        .status(404)
        .render("erros/erro.ejs", {erro: "404 - Página não encontrada"})
})

module.exports = servidor
