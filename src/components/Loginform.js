import React from "react";

const SignIn = () => {

return (
    <div className="App">
    <h1>Login Form</h1>

    <form className='addlog'>
      <div className='formcontainer'>
      <div className='formlabel'>
      <label name="emailLogin">Email:</label>
      <label name="passwordLogin">Password:</label>
      </div>
      <div className='forminput'>
      <input placeholder='nikolatesla@gmail.com' className='inputBox' type="email" name='emailLogin' required/>
      <input placeholder='xxxxxxxxxx' className='inputBox' type="password" name='passwordLogin' required/>
      <button id="b1">SignIn</button>
      </div>
      </div>
    </form>
    </div>
  );
}

export default SignIn;