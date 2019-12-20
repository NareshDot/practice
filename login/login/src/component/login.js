import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import axios from 'axios';
export default class Login extends React.Component {
  
    constructor(props){
     super(props)
       this.state = {
        email: "",
        password:"",
        logged:false
      }
    }

    handleChange = prop => event => {
      this.setState({...this.state,[prop]:event.target.value})
    }

    handleLog = (e) => {
      e.preventDefault()
      let cred = {
        eMail : this.state.email,
        password : this.state.password
      }
      axios.post('http://localhost:3030/api/users/login',cred)
       .then((res)=>{
         let token = res.data
         if(token){
          localStorage.setItem("token", JSON.stringify(token))
          this.setState({logged:true},()=>{
           console.log(this.state.logged)
         })
         }else{
           alert ("login required")
         }
         
       })
       .catch((err)=>{
         console.log("response",err)
       })
    }
    

    render() {
      if(this.state.logged){
        return <Redirect to="/home" />
      }

      return (
       <div className="container">
         <div className="row">
           <div className="col-md-6 offset-md-3">
             <h4>Login Here</h4>
             <br/>
             <form>
               <div className="form-group">
                 <label>Email address</label>
                 <input type="text" onChange={this.handleChange('email')} placeholder="Email-id" className="form-control"/>
               </div>
               <div className="form-group">
                 <label>Password</label>
                 <input type="password" onChange={this.handleChange('password')} placeholder="password" className="form-control"/>
               </div>
                <br/>
                 <button onClick={this.handleLog} className="btn btn-primary">Login</button>
             </form>
             <br/>
             <Link to={'/signup'} className="btn btn-primary" >SignUp</Link>
           </div>
         </div>
       </div>
      );
    }
   
  }
