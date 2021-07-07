require("dotenv").config()

const exp = require("express")
const app = exp()

const userapi = require("./apis/userapi")
const taskapi = require("./apis/taskapi")

const mongoose = require("mongoose")

//connect to mongoose
mongoose.connect(process.env.MONOGO_URL , {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:true
})
.then(() => {console.log("Mongoose Up")})


app.use(exp.json())

app.use("/user",userapi)
app.use("/task",taskapi)

app.listen(process.env.PORT_NUMBER, () =>{
    console.log("Server up")
})