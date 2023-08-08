import React, { useState, useEffect } from 'react';
import axios from "axios";
import Product from '../components/Product'

const ProductsScreen = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://kanatlead-default-rtdb.firebaseio.com/products.json");
        const productsArray = Object.values(response.data);
        setProducts(productsArray );
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container'>

    {loading ? (
        <p>Loading...</p>
        ) 
        : 
        products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            img={product.imgUrl}
          />
        ))}
    </div>
  )
}

export default ProductsScreen