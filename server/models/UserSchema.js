const mongoose=require('mongoose')
const UserSchema= new mongoose.Schema({
    roll:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    }
});
const User=mongoose.model('user',UserSchema)
module.exports=User