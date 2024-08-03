import mongoose, { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const modelTherapistSchema = new mongoose.Schema(
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
);

modelTherapistSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    return;
  });
  
  const modelTherapist = mongoose.model('ModelTherapist', modelTherapistSchema);

export  default modelTherapist;