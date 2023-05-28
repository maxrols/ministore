import React from 'react'
import Hero from '../../components/Hero/Hero'
import InstaPosts from '../../components/InstaPosts/InstaPosts'
import Subscribe from '../../components/Subscribe/Subscribe'
import CartList from './components/CartList/CartList'
import CartTotal from './components/CartTotal/CartTotal';
import {useSelector} from 'react-redux';
import { RootState } from '../../app/store'
import Container from '../../components/Container/Container'

const CartPage = () => {

  const cartList = useSelector((state: RootState) => state.cart.cartList);

  return (
    <div>
      <Hero pageName='cart'/>
      {cartList.length < 1 
      ? <section className='section'>
        <Container>
          <h2 className='title'>THE CART IS EMPTY</h2>
        </Container>
      </section>
      : <><CartList/>
      <CartTotal/></>}
      <Subscribe/>
      <InstaPosts/>
    </div>
  )
}

export default CartPage
