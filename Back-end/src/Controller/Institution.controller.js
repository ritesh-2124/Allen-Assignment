const express = require("express")
const Router = express.Router()

const InstituteData = require("../Models/Institution.Model")


Router.get("" , async(req , res) =>{
    try {
        const products = await InstituteData.find().lean().exec()
        res.send(products)
    } catch (error) {
        res.status(201).send(error)
    }
})

Router.post("" , async(req , res) =>{
    try {
        const products = await InstituteData.create(req.body)
        res.status(200).send(products)
    } catch (error) {
        res.status(201).send(error)
    }
})

Router.get("/:id" , async(req , res) =>{
    try {
        const products = await InstituteData.findById(req.params.id).lean().exec()
        res.send(products)
    } catch (error) {
        res.status(201).send(error)
    }
})




module.exports  = Router