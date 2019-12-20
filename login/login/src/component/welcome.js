import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import Input from './input.js'

export default class Home extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            name: "",
            login:false,
            loginrequired:false
        }
    }

    logout =(e) => {
        localStorage.removeItem("token")
    }

    componentWillMount(){
        if(localStorage.getItem("token")){
            this.setState({
                login:true
            })
            let data = JSON.parse(localStorage.getItem('token'))
            this.setState({
                name:data.username
            })
        }else{
          this.setState({loginrequired:true})
        }
    }
   
    render(){
        if(!this.state.login){
            return<Redirect to="/"></Redirect>
        }
        return(
            <div className="container">
                <h6>h! {this.state.name}</h6>
                <br/>
                {/* <input className="form-control" type="text" placeholder="Search User"/> */}
                <Input/>
                <br/>
                <Link to="/" onClick={this.logout}>logout</Link>
            </div>
        )
    }
}