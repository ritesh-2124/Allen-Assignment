const express = require("express")
const Router = express.Router()

const RagistrationData = require("../Models/Ragistration.Model")


Router.get("" , async(req , res) =>{
    try {
        const products = await RagistrationData.find().lean().exec()
        res.send(products)
    } catch (error) {
        res.status(201).send(error)
    }
})

Router.post("" , async(req , res) =>{
    try {
        const products = await RagistrationData.create(req.body)
        res.status(200).send(products)
    } catch (error) {
        res.status(201).send(error)
    }
})

Router.get("/:id" , async(req , res) =>{
    try {
        const products = await RagistrationData.findById(req.params.id).lean().exec()
        res.send(products)
    } catch (error) {
        res.status(201).send(error)
    }
})




module.exports  = Router