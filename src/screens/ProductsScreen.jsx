import React, { useState, useEffect } from 'react';
import axios from "axios";
import Product from '../components/Product'
import { useSelector } from 'react-redux';

const ProductsScreen = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const productCount = useSelector((state) => state.products.products)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://kanatlead-default-rtdb.firebaseio.com/products.json");
        const productsArray = Object.values(response.data);
        setProducts(productsArray);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const calculateTotalCost = () => {
    let totalCost = 0;

    for (const itemId in productCount) {
      const quantity = productCount[itemId];
      const product = products.find((item) => item.id === itemId);

      if (product) {
        totalCost += quantity * product.price;
      }
    }

    return totalCost;
  };

  return (
    <>
      <div className='container'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {products.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                img={product.imgUrl}
              />
            ))}
          </>
        )}
      </div>
      {calculateTotalCost() > 0 && (
        <div className="sell_btn">
          <p>Total Cost: {calculateTotalCost()}$</p>
        </div>
      )}
    </>

  )
}

export default ProductsScreen
