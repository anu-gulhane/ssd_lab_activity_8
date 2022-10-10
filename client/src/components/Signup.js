import React, { Component } from 'react'

import { Navigate } from 'react-router-dom';
import Query1 from './Query1';

class Signup extends Component {
    
    constructor(props) {
        super(props)
      console.log(props);
        this.state = {
           roll:"",
           password:"",
           role:"Student"
        }
      }


      async Login(e){
        e.preventDefault();
        const res=await fetch('http://localhost:3000/signin',{
          method:"POST",
          headers:{
              "Content-type":"application/json"
          },
          body:JSON.stringify({
              "roll":this.state.roll,
              "password":this.state.password,
              "role":this.state.role
          })
          

      });
        const data =await res.json();
        console.log(data.message);
        window.alert(data.message);
      }

      async Postdata(e){
        
        e.preventDefault();
        //console.log(this.state.role);
        const res=await fetch('http://localhost:3000/register',{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                "roll":this.state.roll,
                "password":this.state.password,
                "role":this.state.role
            })

        });
        const data =await res.json();
        console.log(data);
      }
      eventhandler1(e){
        this.setState({
          
            roll: e.target.value
        })
        console.log(this.state.roll);
    }
      eventhandler2(e){
        this.setState({
          
            password: e.target.value
        })
        console.log(this.state.password);
    }
    eventhandler3(e){
      this.setState({
        
          role: e.target.value
      })
      console.log(this.state.roll);
  }
    render() {
        return(
    <div>
        <h1>RE-Eval Portal</h1>
      <form method='POST'>
        <label>Roll No </label>
        <input value={this.state.roll} onChange={(e)=>this.eventhandler1(e)}></input>

        <br></br>
        <label>Password </label>
        <input value={this.state.password} onChange={(e)=>this.eventhandler2(e)}></input>
        <br></br>
        <label>Role </label>
        <select value={this.state.role} onChange={(e)=>this.eventhandler3(e)}>
            <option>Student</option>
            <option>Teaching Assistant</option>
        </select>
        <br></br>
        <br></br>
        <button type="submit" onClick={this.Login.bind(this)}>Sign In</button>
        <button type="submit" onClick={this.Postdata.bind(this)}>Sign Up</button>
      </form>
      </div>
    
)
}
}

export default Signup
