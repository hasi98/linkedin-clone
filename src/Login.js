import React, { useState } from 'react'
import './Login.css'
import { auth } from './firebase'
import { useDispatch } from 'react-redux';
import { login } from "./features/userSlice"

function Login() {

  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [name, setName] = useState('');
  const [profilePic, setNameProfilePic] = useState('');
  const dispatch = useDispatch()

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then((userAuth) => {
          dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
          }))
        }).catch(error => alert(error));
    }

    const register = () => {
      if (!name) {
        return alert('Please enter your Full Name');
      }
      auth.createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user.updateProfile({
          displayName: name,
          photoURL: profilePic,
        })
        .then(() => {
          dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoURL: profilePic,
          }));
        });
      }).catch((error) => alert(error));
    };
    ;
  return (
    <div className='login'>
    <img src="https://svgshare.com/i/u1L.svg" alt="" />

      <form>
        <div className="field__holder">
            <input placeholder='Full name (required if registering)' type="text" id='name' value={name} onChange={e => setName(e.target.value)}/>
        </div>
        <div className="field__holder">
            <input placeholder='Profile pic URL (optional)' type="text" id='profilepic' 
            value={profilePic} onChange={e => (setNameProfilePic(e.target.value))}/>
        </div>
        <div className="field__holder">
            <input placeholder='Email' type="email" id='email' value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className="field__holder">
            <input placeholder='Password' type="password" id='password' value={password} onChange={e => setpassword(e.target.value)}/>
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
