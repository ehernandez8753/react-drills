import React, {Component} from "react";

class Todo extends Component{


    render(){
        return(
            <div>
                <br/> 
                {this.props.task} 
                <br/>
            </div>
            
        )
    }
}

export default Todo;