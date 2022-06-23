const mongoose = require("mongoose")

const InstitutionSchema = new mongoose.Schema({
    Branch:{type:String , required:true},
    Course:{type:String , required:true},
    Fee:{type:Number , required:true},
    batch_start:{type:String , required:true},
    batch_end:{type:String , required:true},
    capacity:{type:Number , required:true}
},
 {
     versionKey:false,
     timestamps:true
 }
)

module.exports = mongoose.model("institute" , InstitutionSchema)