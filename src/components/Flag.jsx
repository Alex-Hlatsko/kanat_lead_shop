import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../store/products/productsSlice';

const Flag = ({ img, title, flag_key, productId }) => {
  const dispatch = useDispatch();
  const productCounts = useSelector(state => state.products);

  const handleIncrement = () => {
    dispatch(increment({ productId: productId, countryKey: flag_key }));
  };

  const handleDecrement = () => {
    if (productCounts.products[productId][flag_key] > 0) {
      dispatch(decrement({ productId: productId, countryKey: flag_key }));
    }
  };

  const productCount = productCounts.products[productId][flag_key];

  return (
    <div className='flag'>
      <img src={img} alt="flag" />
      <p>{title}</p>

      {productCount > 0 && 
      <div className="product_count">
        <p>{productCount}</p>
      </div>
      }

      {productCount !== 0 ? <button className='product_btn btn_del' onClick={handleDecrement}>DEL</button> : ''}
      <button className='product_btn btn_add' onClick={handleIncrement}>ADD</button>
    </div>
  );
}

export default Flag;
