const mongoose = require('mongoose')
const Schema = mongoose.Schema
const pontoDataSchema = new Schema({  
    nome: {type: String, required: true},  
    email: String,  
    telefone: String  
}, {collection: 'pontos'});
const Pontos = mongoose.model('Pontos',pontoDataSchema)
module.exports = Pontos