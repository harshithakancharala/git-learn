const exp = require("express")
const taskapi = exp.Router()
const User = require("../models/users")
const Tasks = require("../models/tasks")
//http://localhost:4000/task/gettasks
taskapi.get("/gettasks" , async(req,res) => {
    const data = await Tasks.find()
    res.send({data:data})

})

//http://localhost:4000/task/add

taskapi.post("/add/:id" , async (req,res)=> {
    const user = await User.findById(req.params.id)
    if(user){
        const {name,description,date} = req.body
        const newtask = new Tasks({
            username:user.username,
            name,description,date
        })
        newtask.save((err) =>{
            if(err){
                res.send({mesage:"error occured"})
                console.log(err)
            }
            else{
                res.send({message:"Created"})
            }
        })
    }
    else{
        res.send({message:"user doesnot exist"})
    }
})


taskapi.put("/update/:id" ,async (req,res) =>{
    await Tasks.findByIdAndUpdate(req.params.id , {
        $set:req.body
    } , (err)=>{
        if(!err){
            res.send("done")
        }
        else{
            res.send("something happem=ned")
            console,log(err.message)
        }
    })
    
})

module.exports = taskapi