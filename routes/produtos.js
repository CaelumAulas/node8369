module.exports = function (servidor) {
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

        resposta.render("produtos/lista", {livros: listaDoBanco})
    })

    servidor.get("/produtos/form", function(req, res){
        res.render("produtos/form", { validationErrors: [] })
    })
}
