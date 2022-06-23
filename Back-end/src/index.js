const express = require("express")
const env = require("dotenv")
const cors = require("cors")
const App = express()
App.use(cors())
env.config()
App.use(express.json())
const connect = require("./db")
const InstituteController = require("./Controller/Institution.controller")

App.use("/institution" , InstituteController)





App.listen( 8085, async()=>{
    try {
     await connect()
    console.log("server in running " , `${8085}`)   
    } catch (error) {
      console.log(error)  
    }
    
})