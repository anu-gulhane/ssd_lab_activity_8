const mongoose=require('mongoose')
const db=process.env.DATABASE_CONNECTION_STRING;
const port=process.env.PORT;
mongoose.connect(db).then(()=>{
    console.log("Connected to db");
}).catch((err)=>{
    console.log(err);
});