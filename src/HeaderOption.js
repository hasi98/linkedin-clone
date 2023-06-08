import React from 'react'
import "./HeaderOption.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function HeaderOption({ Icon, title, avatar }) {
  return (
    <div className='headerOption'>
      {Icon && <Icon className='headerOption__icon' />}
      {avatar && <AccountCircleIcon className='headerOption__icon' src={avatar}/>}
      <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption
