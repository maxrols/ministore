import React from 'react'
import Hero from '../../components/Hero/Hero'
import InstaPosts from '../../components/InstaPosts/InstaPosts'
import Subscribe from '../../components/Subscribe/Subscribe'
import Products from './components/ProductsGrid/ProductsGrid';

const ShopPage = () => {
  return (
    <div>
      <Hero pageName='shop'/>
      <Products/>
      <Subscribe/>
      <InstaPosts/>
    </div>
  )
}

export default ShopPage
