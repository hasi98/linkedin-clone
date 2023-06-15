import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';
import { useEffect } from 'react';
import { login } from "./features/userSlice"
import Widgets from './Widgets';

function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user loggedin
        dispatch(
          login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        })
        );
      } else {
        // user not loggedin
        dispatch(logout());
      }
    });
}, []);

  return (
    <div className="app">
    <Header /> 
    {!user ? (
      <div>
      <Login />
      </div>

    ) : (
      <div>
           
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
        </div>
        </div>
        )}
      
    </div>
  );
}

export default App;
