import React from 'react'
import { NavLink } from 'react-router-dom'

const Product = ({title, price, img}) => {
  return (
    <div className='product'>
        <img src={img} />
        <p>{title} ({price}$)</p>
        <NavLink to="/geo">ADD</NavLink>
    </div>
  )
}

export default Product