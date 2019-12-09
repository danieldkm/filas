const mongoose = require('mongoose')
const Schema = mongoose.Schema
const pontoDataSchema = new Schema({  
    nome: {type: Object, required: true},  
    email: String,  
    telefone: String  
}, {collection: 'pontos'});
const Pontos = mongoose.model('Pontos2',pontoDataSchema)
module.exports = Pontos