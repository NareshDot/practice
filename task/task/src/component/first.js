import React from "react";

export default class First extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
           restaurant : "",
           select:"",
           quantity: 1,
           limit:[]
        }
    }

        selectMeal = (e) => {
            console.log(e.target.value)
            let meal = e.target.value
            this.setState({
                select:meal
            },()=>{
                console.log(this.state)
            })
        }

        componentWillMount(){
            let list = []
            for(let i=1; i<=10; i++){
                list.push(i)
            }
            this.setState({
                limit:list,
            })
        }

         selectQunatity = (e) => {
            console.log(e.target.value)
            this.setState({
                quantity:e.target.value
            })
            
        }
        
        render(){
            const mealType = ["BreakFast", "Lunch", "Dinner"];
            
            return(
                <div>
                <h1>Please Select Meal </h1>
                <select onClick={this.selectMeal} >{
                    mealType.map((mealType,index)=>{
                        return<option key={index} value={mealType}>{mealType}</option>
                    })
                }
                </select>
                <h2>Please Select Quantity</h2>
                <select onClick={this.selectQunatity}>
                {
                    this.state.limit.map((quantity,index)=>{
                        return<option key={index}  value={quantity}>{quantity}</option>
                    })
                }
                </select>
            </div>
        )
    }
}