import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const notaSchema = new Schema({
    nombre: {type: String, required:[true, 'nombre obligatorio']},
    descricion: String,
    usuarioId: String,
    date: {type: Date, required, default: Date.now},
    activo: {type: Boolean, default:true }
});

// Convertir a un modelo
const Nota = mongoose.model('Nota', notaSchema);
export default Nota;