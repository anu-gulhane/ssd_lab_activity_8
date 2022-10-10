const mongoose=require('mongoose')
const FeedbackSchema= new mongoose.Schema({
    ExamName:{
        type:String,
        required:true
    },
    CourseName:{
        type:String,
        required:true
    },
    QuestionNo:{
        type:String,
        required:true
    },
    TARoll:{
        type:String,
        required:true
    },
    Comment:{
        type:String,
        required:true
    }
})
const Feedback=mongoose.model('Feedback',FeedbackSchema)
module.exports=Feedback