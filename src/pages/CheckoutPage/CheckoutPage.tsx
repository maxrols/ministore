import React from 'react'
import Hero from '../../components/Hero/Hero'
import InstaPosts from '../../components/InstaPosts/InstaPosts'
import Subscribe from '../../components/Subscribe/Subscribe';
import Form from './components/Form/Form';

const CheckoutPage = () => {
  return (
    <div>
      <Hero pageName='checkout'/>
      <Form></Form>
      <Subscribe/>
      <InstaPosts/>
    </div>
  )
}

export default CheckoutPage
