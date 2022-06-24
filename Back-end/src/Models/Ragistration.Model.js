const mongoose = require("mongoose")

const RagistrationSchema = new mongoose.Schema({
    Branch:{type:String , required:true},
    Course:{type:String , required:true},
    Fee:{type:Number , required:true},
    batch_start:{type:String , required:true},
    batch_end:{type:String , required:true},
    firstName:{type:String , required:true},
     lastName:{type:String , required:true},
     email:{type:String , required:true},
     Contect:{type:Number , required:true},
     Address:{type:String , required:true}
},
 {
     versionKey:false,
     timestamps:true
 }
)

module.exports = mongoose.model("Ragistration" , RagistrationSchema)