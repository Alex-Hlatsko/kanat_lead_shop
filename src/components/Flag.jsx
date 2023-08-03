import React from 'react'
import { NavLink } from 'react-router-dom'

const Flag = ({img, title}) => {
  return (
    <NavLink to="/" className='flag'>
        <img src={img} alt="flag" />
        <p>{title}</p>
    </NavLink>
  )
}

export default Flag