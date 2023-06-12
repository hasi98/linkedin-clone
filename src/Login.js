import React from 'react'
import './Login.css'

function Login() {
    const loginToApp = () => {
        
    }

    const register = () => {

    }
  return (
    <div className='login'>
    <img src="https://svgshare.com/i/u1L.svg" alt="" />

      <form>
        <div className="field__holder">
            <input placeholder='Full name (required if registering)' type="text" id='name'/>
        </div>
        <div className="field__holder">
            <input placeholder='Profile pic URL (optional)' type="text" id='profilepic'/>
        </div>
        <div className="field__holder">
            <input placeholder='Email' type="email" id='email'/>
        </div>
        <div className="field__holder">
            <input placeholder='Password' type="password" id='password'/>
        </div>
        
        
        
        <button type='submit' onClick={loginToApp}>Sign Up</button>

      </form>
      <p>Not a member? 
      <span className='login__register' onClick={register}> Register Now</span>
      </p>
    </div>
  )
}

export default Login
