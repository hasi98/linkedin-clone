import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArticleIcon from '@mui/icons-material/Article';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {

  const user = useSelector(selectUser);

    const [input, setInput] = useState('')

    const [posts, setPosts] = useState([])

useEffect(() => {
    db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) => 
        setPosts(snapshot.docs.map(doc => (
            {
                id: doc.id,
                data: doc.data(),
            }
        )))
    )
}, []);

    const sendPost = e => {
        e.preventDefault()

        db.collection('posts').add({
          name: user.displayName,
          description: user.email,
          message: input,
          photoUrl: user.photoUrl || "",
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput('')
    }

  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed_input">
            <CreateIcon />
            <form >
                <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                <button onClick={sendPost} type='submit'>Send</button>
            </form>
        </div>
        <div className="feed_inputOptions">
            <InputOption  Icon={ImageIcon} title='Photo' color='#70B5F9'/>
            <InputOption  Icon={SmartDisplayIcon} title='Video' color='#5f9b41'/>
            <InputOption  Icon={CalendarMonthIcon} title='Event' color='#c37d16'/>
            <InputOption  Icon={ArticleIcon} title='Write article' color='#e16745'/>
        </div>
      </div>
      <FlipMove>
        {posts.map(({id, data: {name, description, message, photoUrl}}) => (
            <Post 
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
            />
        ))}  
        </FlipMove>    
    </div>

  )
}

export default Feed
