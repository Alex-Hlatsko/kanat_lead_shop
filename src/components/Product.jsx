import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/products/productsSlice';

const Product = ({id, title, price, img}) => {

  const dispatch = useDispatch();
  const productCount = useSelector((state) => state.products.products[id])
  
  return (
    <div className='product'>
        {productCount !== 0 ? <p>{productCount}</p> : ''}
        <img src={img} />
        <p>{title} ({price}$)</p>
        <button onClick={() => {dispatch(increment(id))}}>ADD</button>
        {productCount !== 0 ? <button onClick={() => {dispatch(decrement(id))}}>DEL</button> : ''}
    </div>
  )
}

export default Product