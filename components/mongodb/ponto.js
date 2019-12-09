const mongoose = require("mongoose")
const Schema = mongoose.Schema
const pontoDataSchema = new Schema({
	ponto: { 
		type: Object,
		// {
		// 	type_event: {
		// 		type: String, 
		// 		required: true
		// 	} 
		// }, 
		required: true
	},
	publishied_at: Date,
	updated_at: {type: Date, required: true},
	created_at: {type: Date, required: true} 
}, {collection: "pontos"})
const Pontos = mongoose.model("Pontos",pontoDataSchema)
module.exports = Pontos