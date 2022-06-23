const mongoose = require("mongoose")
const env = require("dotenv")


 const connect = ()=>{
    return mongoose.connect("mongodb+srv://Ritesh2124:ritesh1234@cluster0.w0rme.mongodb.net/Allen?retryWrites=true&w=majority")
}

module.exports = connect