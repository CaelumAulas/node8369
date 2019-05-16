module.exports =  function(servidor){

    servidor.get("/", function respondeHome(request, resposta) {
        resposta.render("home/home")
    })

}
