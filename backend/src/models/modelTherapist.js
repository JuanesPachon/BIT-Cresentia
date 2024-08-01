import { Schema } from "mongoose";

const modelTherapist = new Schema(
    {
        name: { type: String, required:true },
        nickname: { type: String, required:true },
        gender: { type: String, required:true },
        email: { type: String, required:true },
        password: { type: String, required:true },
        id: { type: String, required:true },
        eps: { type: String, required:true },
        birthday: { type: String, required:true },
        country: { type: String, required:true },
        city: { type: String, required:true },
        tlf: { type: String, required:true },
        description: { type: String, required:true },
    }
)

export  default model("ModelTherapist", modelTherapist)