import React, { Component } from 'react'

export class Query1 extends Component {

    constructor(props) {
        super(props)
      console.log(props);
        this.state = {
           ExamName:"",
           CourseName:"",
           QuestionNo:"",
           TARoll:"",
           Comment:""
        }
      }



      async Postdata1(e){
        
        e.preventDefault();
        //console.log(this.state.role);
        const res=await fetch('http://localhost:3000/formfill',{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                "ExamName":this.state.ExamName,
                "CourseName":this.state.CourseName,
                "QuestionNo":this.state.QuestionNo,
                "TARoll":this.state.TARoll,
                "Comment":this.state.Comment
            })

        });
        const data =await res.json();
        console.log(data);
        window.alert("Query Submitted");
        window.location.reload();
      }
      eventhandler1(e){
        this.setState({
          
            ExamName: e.target.value
        })
        console.log(this.state.ExamName)
    }
      eventhandler2(e){
        this.setState({
          
            CourseName: e.target.value
        })
    }
    eventhandler3(e){
      this.setState({
        
          QuestionNo: e.target.value
      })
  }
  eventhandler4(e){
    this.setState({
      
        TARoll: e.target.value
    })
}
eventhandler5(e){
    this.setState({
      
        Comment: e.target.value
    })
}
  render() {
    return (
      <div>
        <h1>Query Form</h1>
      <form method='POST'>
        <label>Exam Name </label>
        <input value={this.state.ExamName} onChange={(e)=>this.eventhandler1(e)}></input>

        <br></br>
        <label>Course Name </label>
        <input value={this.state.CourseName} onChange={(e)=>this.eventhandler2(e)}></input>
        <br></br>
        <label>Question No </label>
        <input value={this.state.QuestionNo} onChange={(e)=>this.eventhandler3(e)}></input>
        <br></br>
        <label>TA's Name </label>
        <input value={this.state.TARoll} onChange={(e)=>this.eventhandler4(e)}></input>
        <br></br>
        <label>Comments </label>
        <input value={this.state.Comment} onChange={(e)=>this.eventhandler5(e)}></input>
        <br></br>
        
        <br></br>
        <br></br>
        <button type="submit" onClick={this.Postdata1.bind(this)}>Submit Form</button>
      </form>
      </div>
    )
  }
}

export default Query1
