const http = require("http")

// Request listener
const servidor = http.createServer(function responde(request, resposta) {
    if(request.url == "/produtos"){
        resposta.end("Produtos")
    }
    else if(request.url == "/") {
        resposta.end("Home")
    }

    resposta.end("404")
})

// Assíncrono
// Listener
// Função de callback
// Handler
servidor.listen(3000, function(){
    console.log("Servidor rodando na porta " + servidor.address().port)
})

