
const express=require('express')
const dotenv=require('dotenv')
dotenv.config({path:'./.env'})
require('./db/conn.js')
const User=require('./models/UserSchema.js')
const Feedback=require('./models/Feedback.js')
const Query=require('./models/Query.js')
const router = require('./router/auth')
const app=express();//app will have all the methods of express now like get,post,patch etc
//here '/' indicates the root folder i.e from localhost:__ itself
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(require('./router/auth'))
app.get('/',(req,res)=>{
    res.send("hello guest from backend");
});


const middleware =(req,res,next)=>{
    console.log("hello from middleware, still authenticating");
    next();
}
app.get('/signin',(req,res)=>{
    res.send("hello guest from backend");
});

app.get('/login',(req,res)=>{
    res.send("hello user anuja from backend");
});
app.get('/register',(req,res)=>{
    res.send("hello user anuja from backend");
});
app.get('/formfill',(req,res)=>{
    res.send("hello user anuja from backend");
});
app.get('/student/Query',(req,res)=>{
    res.send("hello user anuja from backend");
});
console.log("hello anuja");
const port=process.env.PORT;
app.listen(port,()=>{
    console.log("Server is running at 3000");
});