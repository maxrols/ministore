import React from 'react'
import Container from '../../../../components/Container/Container';
import './cartList.scss';
import CartItem from '../CartItem/CartItem';
import {useSelector, useDispatch} from 'react-redux'
import { RootState } from '../../../../app/store';


const CartList = () => {

    const cartList = useSelector((state: RootState) => state.cart.cartList);

  return (
    <section className='section cartlist'>
        <Container>
            <div className="cartlist__header">
                <h5 className='cartlist__title'>
                    Product
                </h5>
                <h5 className='cartlist__title'>
                    Quantity
                </h5>
                <h5 className='cartlist__title'>
                    Subtotal
                </h5>
            </div>
            <ul className="cart-list">
                {cartList.length > 0 && (
                    cartList.map((item, i) => (
                        <CartItem item={item} key={item.id}/>
                    ))
                )}
            </ul>
            
        </Container>
    </section>
  )
}

export default CartList
