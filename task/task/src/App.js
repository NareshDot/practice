import React from "react";
import First from './component/first.js'
import Second from './component/second.js'
import shadows from "@material-ui/core/styles/shadows";

export default class App extends React.Component {
    
    render(){
        return(
            <div>
                <First/>
                <Second/>
            </div>
        )
    }
    
    
    
}