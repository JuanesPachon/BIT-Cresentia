import mongoose from 'mongoose';
import bcrypt from "bcryptjs";

const modelFamilySchema = new mongoose.Schema({
  name: {type: String, required: true},
  nickname: {type: String, required: true},
  avatar: {type: String, required: true},
  email : {type: String, required: true},
  password: {type: String, required: true},
  gender: {type: String, required: true},
  eps: {type: String, required: true},
  birthday: {type: String, required: true},
  country: {type: String, required: true},
  city: {type: String, required: true},
  education: {type: String, required: true},
  grade: {type: String, default: null},
  semester: {type: String, default: null},
  institute: {type: String, required: true},
  degree: {type: String, default: null},
  phoneNumber: {type: String, required: true},
});

modelFamilySchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  return;
});

const modelFamily = mongoose.model('ModelFamily', modelFamilySchema);

export default modelFamily;