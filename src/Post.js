import React, { useReducer, forwardRef } from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

const Post = forwardRef(({ name, description, message, photoUrl}, ref) => {

  

  return (
    <div ref={ref} className='post'>
    <div className="post__header">
      <Avatar src={photoUrl}>{name[0]}</Avatar>
      <div className="post__info">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post___buttons">
        <InputOption Icon={ThumbUpOffAltIcon} 
        title='Like'
        color='Gray'
        />
        <InputOption Icon={CommentOutlinedIcon} 
        title='Comment'
        color='Gray'
        />
        <InputOption Icon={SyncOutlinedIcon} 
        title='Repost'
        color='Gray'        
        />
        <InputOption Icon={SendOutlinedIcon} 
        title='Share'
        color='Gray'        
        />

      </div>
    </div>
  )
})

export default Post
