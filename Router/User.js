//import
const express = require("express");
const User = require("../Model/User");
const router = express.Router();
//user router
router.get('/test',(req,res)=>{
    res.send("bonjour user")
})

router.post('/',async(req,res)=>{
try{
    const {email,password}=req.body
    //handling errors:email et password required
    if (!email||!password){
        res.status(400).send({msg:'Email et Password are required!!!'})
        return
    }
    //handling errors:email et unique

    const user=await User.findOne({email})
    if (user){
        res.status(400).send({msg:'User already exist!!!'})
        return
    }
    const newUser= new User({
        email,
        password
    })
    await newUser.save()
        res.status(200).send({msg:'User added successfully...',newUser})  


}catch(error){
    res.status(400).send({msg:'can not  add User',error})
} 
})
// get All user 

router.get('/',async(req,res)=>{
    try{
const listUsers=await User.find()
res.status(200).send({msg:'this is liste of all users...',listUsers})
    }catch(error){
        res.status(400).send({msg:'can not get all users',error})
    }
})   
// get user with id
router.get('/:id',async(req,res)=>{
    try{
const contactToGet=await User.findOne({_id:req.params.id})
res.status(200).send({msg:'I get the user...',contactToGet})
    }catch(error){
        res.status(400).send({msg:'I can get with user id...',contactToGet})

    }
})
// delete user
router.delete('/:_id',async(req,res)=>{
try{
    const {_id}=req.params
await User.findOneAndDelete({_id})
res.status(200).send({msg:'User Deleted... '})
}catch(error){
    res.status(400).send({msg:'can not deleted contact with this id!!',error})
}


})
// Edit user
router.put('/:_id',async(req,res)=>{
    try{
       const {_id} =req.params
        const result=await User.updateOne({_id},{$set:{...req.body}})
       res.status(200).send({msg:'User Update... '})

    }catch(error){
        res.status(400).send({msg:'can not update user with id !!!',error})
    }
})
//export
module.exports = router;
