import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed:{type:Boolean,default: false},
    user : {type: mongoose.Schema.Types.ObjectId, ref:'User'}
},{timeStamps: true});

const Task = mongoose.model('Task', taskSchema);
export default Task;