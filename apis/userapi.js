const exp = require("express")
const userapi = exp.Router()

const User = require("../models/users")

//register

//http://localhost:4000/user/register

userapi.post("/register" , async (req,res) =>{
    const {username,password} = req.body
    console.log(username,password)
    const existing = await User.findOne({username})
    console.log(existing)
    if(existing){
        res.send({message:"username already exists"})
    }
    else{
        const newuser = new User({
            username,
            password
        })

        //to add to th adatabase
        newuser.save((err) =>{
            if(err){
                res.send({message:"some error occured"})
            }
            else{
                res.send({message:"user added"})

            }
        })
    }

})

userapi.post("/login", async(req,res) =>{
    const {username,password} = req.body
    console.log(username,password)
    const user =await User.findOne({username})
    console.log(user)
    if(user){
        if(user.password == password){
            res.send({message:"logged in"})
        }
        else{
            res.send({message:"Password is incorect"})
        }
    }
    else{
        res.send({message:"user doesnot eexist"})
    }
})

userapi.get("/", async(req,res)=>{
    const users = await User.find()
    res.send({users})
})

module.exports = userapi