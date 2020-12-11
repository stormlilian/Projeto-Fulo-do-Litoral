const express = require("express")
const router = express.Router()

router.get("/", function(request, response){
    response.status(200).send({
        titulo: "Cadastro de artesãos - Projeto final Reprograma",
        version: "1.0.0"
    })
})

module.exports = router