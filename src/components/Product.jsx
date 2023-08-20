import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

const Product = ({ id, title, price, img }) => {
  const products = useSelector((state) => state.products.products);
  const geolocationKeys = ['PL', 'DE', 'JP', 'BE', 'NL', 'SE'];

  const getTotalProductCount = (productId) => {
    let totalCount = 0;
    geolocationKeys.forEach((key) => {
      totalCount += products[productId][key];
    });
    return totalCount;
  };

  const totalProductCount = getTotalProductCount(id);

  return (
    <div className='product'>
      {totalProductCount !== 0 ?
        <div className="product_count">
          <p>{totalProductCount}</p>
        </div>
        :
        ''
      }

      <img src={img} />
      <p>{title} ({price}$)</p>
      {totalProductCount !== 0 ? <NavLink to={`/geo/${id}`} style={{ background: '#EA0F0F'}} className='product_btn'>DEL</NavLink> : ''}
      <NavLink to={`/geo/${id}`} className='product_btn btn_add'>ADD</NavLink>

    </div>
  )
}

export default Product