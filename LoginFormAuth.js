import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Navigate } from "react-router-dom";

class LoginForm extends React.Component{

    state={
        users:[],
        useremail:"",
        userpassword:"",
        accountMessage:""
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(
            res=>{
                let tempData = res.data;
                this.setState({ users:tempData });
            }    
        );
    }

    authenticateUser = (e)=>{
        e.preventDefault();
        let flag=0;
        this.state.users.forEach(user => {
            if(user.email==this.state.useremail && user.address.suite==this.state.userpassword){
                flag=1;
            }
        });
        if(flag==1){
            this.setState({accountMessage:"Valid details"});
            window.location.href = '/dashboard';
            }
        else{
            this.setState({accountMessage:"Invalid details"});
            }   
    }

    render(){
        return(
            <section id="loginbox">
                <form action="#" name="loginForm" onSubmit={this.authenticateUser}>
                    <input type="text" placeholder="Username" onChange={(e)=>{
                        this.setState({useremail:e.target.value})
                    }}/><br/>
                    <input type="password" required name="userPassword" placeholder="Password" onChange={(e)=>{
                        this.setState({userpassword:e.target.value})
                    }}/><br/>
                    <p id="passwordErrorLC"></p>
                    <p id="passwordErrorUC"></p>
                    <p id="passwordErrorN"></p>
                    <input type="submit"/>
                   
                </form>  
                <p>{this.state.accountMessage}</p>      
                <a href="">Forgot ID/Password</a> <br/>
                <a href="">Security & Help</a> <br/>
                <a href="">Enroll</a> <br/>
                <Link to="/signup">Open an Account</Link>
            </section>
        );
    }
}

export default LoginForm; 
