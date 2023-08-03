import React from 'react'
import Product from '../components/Product'

const ProductsScreen = () => {
  return (
    <div className='container'>
        <Product title="Документы" price="30" img="./public/productIco/docs.svg"/>
        <Product title="Пустые Console" price="50" img="./public/productIco/console.svg"/>
        <Product title="Аккаунты" price="100" img="./public/productIco/acc.svg"/>
    </div>
  )
}

export default ProductsScreen