const servidor = require('./servidor')

const porta = process.env.PORTA || 3000

// Assíncrono
// Listener
// Função de callback
// Handler
// Função anônima
servidor.listen(porta, function(){
    console.log("Servidor rodando na porta " + porta)
})
