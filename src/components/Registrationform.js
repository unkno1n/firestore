import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const SignUp = () => {

return (
    <div className="App">
    <h1>Registration Form</h1>

    <form className='add'>
      <div className='formcontainer'>
      <div className='formlabel'>
      <label name="fname">FirstName:</label>
      <label name="lname">LastName:</label>
      <label name="email">Email:</label>
      <label name="password">Password:</label>
      <label name="number">Contact Number:</label>
      <label name="country">Country:</label>
      <label name="logo"><AiOutlineArrowRight /></label>

      </div>
      <div className='forminput'>
      <input placeholder='Nikola' className='inputBox' type="text" name='fname' required/>
      <input placeholder='Tesla' className='inputBox' type="text" name='lname' required/>
      <input placeholder='nikolatesla@gmail.com' className='inputBox' type="email" name='email' required/>
      <input placeholder='xxxxxxxxxx' className='inputBox' type="password" name='password' required/>
      <input placeholder='03424289505' className='inputBox' type="number" name='number' required/>
      <input placeholder='America' className='inputBox' type="text" name='country' required/>
      <button id="b1">SignUp</button>
      </div>
      </div>
    </form>

    </div>
  );
}

export default SignUp;