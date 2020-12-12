const mongoose = require("mongoose")
const DB_URL = "mongodb://localhost:27017/db-artesao"

const uri = process.env.MONGO_DB_URI || 'mongodb+srv://admin:lokije@clusterlilian.l2vwe.mongodb.net/artesa?retryWrites=true&w=majority';

const connect = ()=>{
    mongoose.connect(uri, { useUnifiedTopology: true })
    const connection = mongoose.connection
    connection.on('error', () => console.error('Erro ao se conectar'))
    connection.once('open',  () => console.log('Conectamos no Mongo'))
}

module.exports = { connect }