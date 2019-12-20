import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: "",
      confirmpass: "",
      match: false,
      submitted: false
    };
  }

  handleChange = prop => event => {
    this.setState({ ...this.state, [prop]: event.target.value },()=>{
      if (this.state.password === this.state.confirmpass) {
        this.setState({ match: true },()=>{
          console.log(this.state)
        });
      }
    });
  };

  signup = e => {
 
    let cred = {
      eMail: this.state.email,
      username: this.state.userName,
      password: this.state.Password
    };
    e.preventDefault();
    axios
      .post("http://localhost:3030/api/users/signup", cred)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    console.log(cred);
    this.setState({
      submitted: true
    });
    console.log("state", this.state);
  };

  render() {
    if (this.state.submitted) {
      return <Redirect to="/" />;
    }
   
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h4>SignUp</h4>
            <br />
            <form>
              <div className="form-group">
                <input
                  type="text"
                  onChange={this.handleChange('email')}
                  placeholder="e-mail"
                  className="form-control"
                  required
                  />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  onChange={this.handleChange('username')}
                  placeholder="UserName"
                  className="form-control"
                  required
                  />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  onChange={this.handleChange('password')}
                  placeholder="Password"
                  className="form-control"
                  required
                  />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  onChange={this.handleChange('confirmpass')}
                  placeholder="Confirm-Password"
                  className="form-control"
                  required
                  />
              </div>
              <br />
              {this.state.match ? (
                <button onClick={this.signup} className="btn btn-primary">
                  SignUp
                </button>
              ) : (
                <button type="submit" className="btn btn-primary" disabled>
                  SignUp
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }
}
