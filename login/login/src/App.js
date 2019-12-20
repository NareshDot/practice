import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Login from './component/login'
import SignUp from './component/signup'
import Home from './component/welcome'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state= {loggedIn:true}
  }
  
  componentWillMount(){
    if(!localStorage.getItem("data")){
      this.setState({
        loggedIn:false
      })
    }
  }

  render(){
    return (
     <Router>
     <Switch>
       {<Route path="/" exact={true} component={Login}></Route>}
       <Route
         path="/" exact={true} render={()=>(
          (!this.state.loggedIn) ? (<Redirect to="/"/>) : (alert("Login Required"))
          )}>
       </Route>
       <Route path="/signup" component={SignUp}></Route>
       <Route path="/home" component={Home}></Route>
     </Switch>
     </Router>
    );
  }
 
}

export default App;
