import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'

function Sidebar() {

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
        <Avatar className='sidebar__avatar'/>
        <h2>Hasith Lakshan</h2>
        <h4>hasidfgddfgdfgfgdfh@gmail.com</h4>

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
