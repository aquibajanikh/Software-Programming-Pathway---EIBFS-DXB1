import React from "react";
import axios from "axios";

class SignupForm extends React.Component{

  state={
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    dateofbirth:''
  }

  storeUserData = (e)=>{
    e.preventDefault();

    let newUser = {
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      email:this.state.email,
      password:this.state.password,
      dateofbirth:this.state.dateofbirth
    }

    console.log(newUser);

    
    axios.post('https://crudcrud.com/api/a6d087ea01ba4b9682e19885fa018749/users', {newUser})
        .then(
            res=>{
              console.log(res);
                console.log(res.data);
            }    
        );
  }

render(){
    return(
    <div class="wrapper">
    <h2>Registration Form</h2>
    <form action="#" name="signupForm" onSubmit={this.storeUserData}>
      <div class="input-box">
        <input type="text" placeholder="Enter your name" required minlength="3" maxlength="20" onChange={(e)=>{
          this.setState({firstName:e.target.value})
        }}/>
      </div>
      <div class="input-box">
        <input type="text" placeholder="Enter your Last name" required minlength="3" maxlength="20" onChange={(e)=>{
          this.setState({lastName:e.target.value})
        }}/>
      </div>
      <div class="input-box">
        <input type="email" placeholder="Enter your email" required minlength="7" onChange={(e)=>{
          this.setState({email:e.target.value})
        }}/>
      </div>
      <div class="input-box">
        <input type="password" placeholder="Create password" required name="userPassword" onkeyup="validatePassword()" id="createpassword" minlength="10" onChange={(e)=>{
          this.setState({password:e.target.value})
        }}/>
        <p id="passwordErrorLC"></p>
          <p id="passwordErrorUC"></p>
          <p id="passwordErrorN"></p>
      </div>
      <div class="input-box">
        <input type="password" placeholder="Confirm password" required minlength="10" />
      </div>
      <label for="Date of birth">Date of birth:</label>
      <input type="date" id="birthday" name="birthday" required onChange={(e)=>{
          this.setState({dateofbirth:e.target.value})
        }}/>
      <div class="policy">
        <input type="checkbox" required/>
        <h3>I accept all terms & condition</h3>
      </div>
      <div class="input-box button">
        <input type="Submit" value="Register Now"/>
      </div>
      <div class="text">
        <h3>Already have an account? <a href="#">Login now</a></h3>
      </div>
    </form>
  </div>
  );
}
}

export default SignupForm;