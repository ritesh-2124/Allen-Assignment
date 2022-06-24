const express = require("express")
const env = require("dotenv")
const cors = require("cors")
const App = express()
App.use(cors())
env.config()
App.use(express.json())
const connect = require("./db")
const InstituteController = require("./Controller/Institution.controller")
const RagistrationController = require("./Controller/Ragistration.controller")
const {ragister, login} = require("./Controller/User.controller")


 App.post('/signup' , ragister)
 App.post('/login' , login)
App.use("/institution" , InstituteController)
App.use("/ragistration" , RagistrationController)




App.listen( 8085, async()=>{
    try {
     await connect()
    console.log("server in running " , `${8085}`)   
    } catch (error) {
      console.log(error)  
    }
    
})