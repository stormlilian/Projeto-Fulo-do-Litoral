const mongoose = require("mongoose")
const Schema = mongoose.Schema

const artSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    artesanato: {
        type: String,
        required: false,
    },
    cidade: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true,
    }
})

const artCollections = mongoose.model('artesa', artSchema)

module.exports = artCollections