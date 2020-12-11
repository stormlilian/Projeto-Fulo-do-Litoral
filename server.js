const app = require("./src/app")
const PORT = 3030

app.listen(process.env.PORT || 5000, function(){
    console.log(`Bebe o APP ta rodando na porta ${PORT}`)
})