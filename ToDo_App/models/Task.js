const mongoose = require('mongoose')

//?Defining the TaskSchema
const TaskSchema = new mongoose.Schema({
    taskName:{
        type:String,
    },
    dueDate:{
        type:String,
    }
},{
    timestamps: true,
});

//? Creating a model from the schema
module.exports = Task = mongoose.model('Task', TaskSchema);