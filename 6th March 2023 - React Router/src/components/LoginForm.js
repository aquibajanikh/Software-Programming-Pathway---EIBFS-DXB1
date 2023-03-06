import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component{
    render(){
        return(
            <section id="loginbox">
                <form action="#" name="loginForm">
                    <input type="text" placeholder="Username" /><br/>
                    <input type="password" required minlength="10" name="userPassword" placeholder="Password" onkeyup="validatePassword()"/><br/>
                    <p id="passwordErrorLC"></p>
                    <p id="passwordErrorUC"></p>
                    <p id="passwordErrorN"></p>
                    <input type="submit"/>
                </form>        
                <a href="">Forgot ID/Password</a> <br/>
                <a href="">Security & Help</a> <br/>
                <a href="">Enroll</a> <br/>
                <Link to="/signup">Open an Account</Link>
            </section>
        );
    }
}

export default LoginForm; 