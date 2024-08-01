// Hi :)
import mongoose from 'mongoose';

const induccionSchema = new mongoose.Schema({
    terapeutaId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Therapist' },
    fecha: { type: Date, required: true },
    hora: { type: String, required: true },
    estado: { type: String, required: true, enum: ['pendiente', 'confirmada', 'cancelada'] }
});

const Induccion = mongoose.model('Induccion', induccionSchema);
export default Induccion;