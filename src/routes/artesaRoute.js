const express = require("express")
const router = express.Router()
const controller = require("../controller/artController")

router.get("/", controller.getAll)
router.post("/criar", controller.addArt)
router.get("/nome", controller.getArtPorNome)
router.get("/estado", controller.getArtPorEstado)
router.get("/cidade", controller.getArtPorCidade)
router.get("/arte", controller.getArtPorArtesanato)


router.get("/id", controller.getArtPorId)
router.delete("/deletar", controller.deleteArtPorId)
router.patch("/atualizar/:id", controller.atualizarArt)


module.exports = router