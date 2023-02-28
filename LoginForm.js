import React from 'react';

class LoginForm extends React.Component{

    constructor(){
        super();
        this.state={
            userName:"",
            errorMessage:""
        }
    }

    validateUser = (e) => {
        if(e.target.value.length<10){
            this.setState({
                errorMessage:"At least 10 characters needed"
            });
        } else{
            this.setState({
                errorMessage:""
            });
        }
    }

    render(){
        return(
            <form>
                <input type="text" placeholder="Your name here" name="userName" onChange={this.validateUser}/>
                <p>{this.state.errorMessage}</p>
                <input type="submit"/>
            </form>
        );
    }
}

export default LoginForm;
