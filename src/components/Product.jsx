import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/products/productsSlice';

const Product = ({ id, title, price, img }) => {

  const dispatch = useDispatch();
  const productCount = useSelector((state) => state.products.products[id])

  return (
    <div className='product'>
      {productCount !== 0 ?
        <div className="product_count">
          <p>{productCount}</p>
        </div>
        :
        ''
      }

      <img src={img} />
      <p>{title} ({price}$)</p>
      {productCount !== 0 ? <button className='product_btn btn_del' onClick={() => { dispatch(decrement(id)) }}>DEL</button> : ''}
      <button className='product_btn btn_add' onClick={() => { dispatch(increment(id)) }}>ADD</button>
    </div>
  )
}

export default Product