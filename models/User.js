import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({
    name: String,
    email:{type: String, unique: true},
    password: String,
    role: {type: String, default:'user'}
});

//Hash Password Before Saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password'))
        return next();
    this.password = await bcrypt.hash(this.password,10);
    next();
});

userSchema.methods.matchPassword = async function (enterdPassword) {
    return await bcrypt.compare(enterdPassword,this.password);
};

const User = mongoose.model('User',userSchema);
export default User;