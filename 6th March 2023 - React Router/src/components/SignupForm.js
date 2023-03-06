import React from "react";

class SignupForm extends React.Component{
render(){
    return(<div class="wrapper">
    <h2>Registration Form</h2>
    <form action="#" name="signupForm">
      <div class="input-box">
        <input type="text" placeholder="Enter your name" required minlength="3" maxlength="20"/>
      </div>
      <div class="input-box">
        <input type="text" placeholder="Enter your Last name" required minlength="3" maxlength="20"/>
      </div>
      <div class="input-box">
        <input type="email" placeholder="Enter your email" required minlength="7" />
      </div>
      <div class="input-box">
        <input type="password" placeholder="Create password" required name="userPassword" onkeyup="validatePassword()" id="createpassword" minlength="10" />
        <p id="passwordErrorLC"></p>
          <p id="passwordErrorUC"></p>
          <p id="passwordErrorN"></p>
      </div>
      <div class="input-box">
        <input type="password" placeholder="Confirm password" required minlength="10" />
      </div>
      <label for="Date of birth">Date of birth:</label>
<input type="date" id="birthday" name="birthday" required/>
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