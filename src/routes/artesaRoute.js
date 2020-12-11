const express = require("express")
const router = express.Router()
const controller = require("../controller/artController")

router.get("/", controller.getAll)
router.post("/criar", controller.addArt)
router.get("/nome", controller.getArtPorNome)
router.get("/id", controller.getArtPorId)
router.delete("/deletar", controller.deleteArtPorId)
router.patch("/atualizar/:id", controller.atualizarArt)


module.exports = router