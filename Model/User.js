// require mongoose
const mongoose=require('mongoose')
// create User Schema
const schema=mongoose.Schema
const userSchema= new schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
       type:String,
       required:true,
       unique:true
    }
})
module.exports=User=mongoose.model('user',userSchema)