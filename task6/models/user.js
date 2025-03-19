const mongoose=require("mongoose")
const passportLocalMongoose=require("passport-local-mongoose")

let userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    }
})
userSchema.plugin(passportLocalMongoose)

module.exports=new mongoose.model("User",userSchema);