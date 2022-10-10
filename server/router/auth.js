const express=require('express');
const Feedback = require('../models/Feedback');
const User = require('../models/UserSchema');
const router=express.Router()
router.get('/',(req,res)=>{
    res.send("hello guest from backend router");
});
router.post('/register',(req,res)=>{
    const {roll,password,role}=req.body
    if(!roll || !password || !role){
        console.log("Null values");
        return;
        res.status(422).json({error:"pls fill all the data"});
    }
    User.findOne({roll:roll}).then((userExist)=>{
        if(userExist){
            console.log("error roll no exists");
            return;
            res.status(422).json({error:"Roll no exists"});
        }
        const user=new User({roll,password,role})
        user.save().then(()=>{
            console.log("yippe")
            return res.json({message:req.body});
        }).catch(()=>{
           console.log("yippe22")
        })
    }).catch((err)=>{
        console.log(err)
        return;
    })
    console.log(req.body)//gives to terminal
    return res.json({message:req.body})//gives to postman
})
router.post('/formfill',(req,res)=>{
    const {ExamName,CourseName,QuestionNo,TARoll,Comment}=req.body
    if(!ExamName || !CourseName || !QuestionNo ||!TARoll || !Comment){
        console.log("Null values");
        return;
        res.status(422).json({error:"pls fill all the data"});
    }
        const feedback=new Feedback({ExamName,CourseName,QuestionNo,TARoll,Comment});
        feedback.save().then(()=>{
            console.log("yippe")
            //res.json({message:req.body});
        }).catch((e)=>{
           console.log(e)
        });
    console.log(req.body);//gives to terminal
    return res.json({message:req.body});//gives to postman
    })



router.post('/signin', async(req,res)=>{
    try{
        const {roll,password,role}=req.body
        if(!roll || !password || !role){
            return res.status(422).json({error:"pls fill all the data"});
        }
        const userlogin= await User.findOne({roll:roll});
        //const pass=userlogin.password;
        if(userlogin!=null && password==userlogin.password){

            return res.json({message:"Signed successfully"})
            console.log("yes");
            
        }
        else{
            return res.json({message:"Nop user failed"})
            console.log("nooo")
        }
        console.log(userlogin)

    }catch(err){
        console.log(err);
    }
})



module.exports=router
