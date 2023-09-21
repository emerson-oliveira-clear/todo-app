
const mongoose = require('mongoose');
const {Schema} = mongoose

const todoSchema = new Schema({ 
    description: { type: String, required: true },
    done: { type: Boolean, required: true, default: false },
    createdAt:{ type: Date, default: Date.now }
 });

 const Task = mongoose.model('Task', todoSchema)



module.exports = Task