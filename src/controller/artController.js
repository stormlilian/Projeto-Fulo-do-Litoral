const artCollection = require("../models/artesaSchema")
const { request } = require("../app")
const { response } = require("express")

const getAll = (request, response)=>{
    artCollection.find((error, artesa) =>{
        if(error){
            return response.status(500).send(error)
        } else{
            return response.status(200).send({
                mensagem: "GET com sucesso",
                artesa
            })
        }
    })
}

const addArt = (request, response)=>{
    const artDoBody = request.body 
    const artesa = new artCollection(artDoBody)

    artesa.save((error)=>{
        if(error){
            return response.status(400).send(error)
        }else{
            return response.status(200).send({
                mensagem: "POST com sucesso",
                artesa
            })
        }
    })
}

const getArtPorNome = (request, response)=>{
    const nome = request.query.nome
    artCollection.find({ "nome": nome }, (error, artesa) => {
        return response.status(200).send({
            mensagem: "GET com sucesso",
            artesa
        })
    })
    
}

const getArtPorId = (request, response) => {
    const id =request.query.id
    artCollection.find ({ "_id": id}, (error, artesa) => {
        return response.status(200).send({
            mensagem: "GET com sucesso",
            artesa
        })
    })
}

const deleteArtPorId = (request, response) =>{
    const id =request.query.id
    artCollection.findByIdAndDelete(id, (error) => {
        if(error){
        return response.status(400).send(error)
    }else{
        return response.status(200).send({
            mensagem: "Deletado com sucesso",
            
        })
    }

    })

}

const atualizarArt = (request, response) =>{
    const id = request.params.id
    const bodyArt = request.body
    console.log(request.params);
    delete bodyArt["_id"]
    artCollection.findByIdAndUpdate(id, bodyArt, { "new": true }, (error, artesa) => {
        if(error)
            return response.status(500).send(error)
        if(artesa.length < 1)
            return response.status(404).send({"mensagem": "Cadastro não existe."})
        return response.status(200).send({
            mensagem: "Cadastro atualizado",
            artesa
        })
    })
        
}


module.exports = {
    getAll,
    addArt,
    getArtPorNome,
    getArtPorId,
    deleteArtPorId,
    atualizarArt
}