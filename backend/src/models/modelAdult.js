import { Schema, model } from "mongoose";

const modelAdult = new Schema(
    {
        rol: { type: String, required: true },
        nombre: { type: String, required: true },
        apodo: { type: String, required: true },
        sexo: { type: String, required: false },
        correo: { type: String, required: false },
        contrasenia: { type: String, required: false },
        cedula: { type: String, required: false },
        eps: { type: String, required: false },
        fechaNacimiento: { type: String, required: false },
        pais: { type: String, required: false },
        ciudad: { type: String, required: false },
        educacion: { type: String, required: false },
        ocupacion: { type: String, required: false },
        celular: { type: String, required: false },
        contactoEmergencia: { type: String, required: false },
        numeroEmergencia: { type: String, required: false },
        parentesco: { type: String, required: false },
        progreso: { type: String, required: false },

    }
)

export default model("Adulto", modelAdult)