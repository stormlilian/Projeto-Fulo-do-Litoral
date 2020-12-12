const app = require("./src/app")
const PORT = 3030

app.listen(process.env.PORT || 3030, function(){
    console.log(`O APP ta rodando na porta ${PORT}`)
})