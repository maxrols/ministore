import React from 'react'
import Benefits from '../../components/Benefits/Benefits'
import InstaPosts from '../../components/InstaPosts/InstaPosts'
import ProductsPreview from '../../components/ProductsPreview/ProductsPreview'
import Subscribe from '../../components/Subscribe/Subscribe'
import Hero from './components/Hero/Hero'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <Benefits/>
      <ProductsPreview category='laptops'/>
      <ProductsPreview category='mens-watches'/>
      <Subscribe/>
      <InstaPosts/>
    </div>
  )
}

export default HomePage
