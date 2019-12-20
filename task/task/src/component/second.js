import React from 'react';
import dishes from './dishes.json'

export default class Second extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           list:[],
           restaurant : "",
           meals : ""
        }
    }

    componentWillMount(){
       let dish=[]
        dish.push(dishes)
        console.log("here",dish)
        this.setState({
            list: dish
        })
        console.log("dishes",dishes)
        console.log(this.state)
    }

    restaurant = (e) => {
        console.log(e.target.value)
    }

    render(){
        return(
            <div>
                <h2>Select Restaurant</h2>
                <br/>
                {/* <select onClick={this.restaurant}>
                {
                    this.state.dishes.map((restaurant,index)=>{
                        return<option key={index}  value={restaurant}>{restaurant}</option>
                    })
                    
                }
               </select> */}
            </div>
        )
    }
}