import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

const Product = ({ id, title, price, img }) => {
  const productCount = useSelector((state) => state.products.products[id])

  return (
    <div className='product'>
      {/* {productCount !== 0 ?
        <div className="product_count">
          <p>{productCount}</p>
        </div>
        :
        ''
      } */}

      <img src={img} />
      <p>{title} ({price}$)</p>
      {/* {productCount !== 0 ? <button className='product_btn btn_del' onClick={() => { dispatch(decrement(id)) }}>DEL</button> : ''} */}
      {/* <button className='product_btn btn_add' onClick={() => { dispatch(increment(id)) }}>ADD</button> */}
      <NavLink to={`/geo/${id}`} className='product_btn btn_add'>ADD</NavLink>

    </div>
  )
}

export default Product