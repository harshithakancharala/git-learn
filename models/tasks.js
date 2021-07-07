const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:false
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        default:false
    },
},
{timestamps:true}
)


const Tasks = mongoose.model("Tasks",taskSchema)
module.exports = Tasks