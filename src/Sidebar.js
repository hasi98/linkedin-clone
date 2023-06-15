import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function Sidebar() {

  const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItems">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )


  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img src="https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg" alt="" />
        <Avatar src={user.photoURL} className='sidebar__avatar'>
          {user.displayName[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>

      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
            <p>Who Viewed You</p>
            <p className='sidebar__statNumber'>2,453</p>
        </div>
        <div className="sidebar__stat">
            <p>Views on post</p>
            <p className='sidebar__statNumber'>3,453</p>
        </div>
      </div>

      <div className="sidebar__button">
        <p>Recent</p>
        {recentItem('react')}
        {recentItem('react')}
        {recentItem('react')}
        {recentItem('react')}
      </div>
    </div>
  )
}

export default Sidebar
