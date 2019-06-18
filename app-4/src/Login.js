import React, {Component} from "react";

class Login extends Component{
    constructor(){
        super();

        this.state = {
            username: "",
            password: ""
        }
    }

    handleLoginUsername(typedUsername){
        this.setState({
            username: typedUsername
        });
    }
    handleLoginPassword(typedPassword){
        this.setState({
            password: typedPassword
        });
    }

    loginAlert(){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    }
    
    render(){
        return(
            <div>
                <input onChange={(event) => this.handleLoginUsername(event.target.value)}></input>
                <input onChange={(event) => this.handleLoginPassword(event.target.value)}></input>
                <button onClick={()=> this.loginAlert()}>Login</button>
            </div>
        )
    }
}

export default Login;