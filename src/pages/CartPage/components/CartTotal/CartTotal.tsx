import React from 'react'
import Container from '../../../../components/Container/Container';
import './cartTotal.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { Link } from 'react-router-dom';

const CartTotal = () => {

    const cartList = useSelector((state: RootState) => state.cart.cartList);

    const getTotalPrice = () => {
        return cartList.reduce((sum, cur) => sum + cur.price * cur.quantity, 0);
    }

  return (
    <section className='total-sec section'>
      <Container>
        <h2 className="total-sec__title title">
            CART TOTAL
        </h2>
        <div className="total-info">
            <h4 className="total-info__title">
                Total
            </h4>
            <span className="cart-item__price">
                ${getTotalPrice()}
            </span>
        </div>
        <div className="total-btns">
            <Link to={'/shop'} className="total-btn">Continue shopping</Link>
            <Link to={'/checkout'} className="total-btn">Proceed to checkout</Link>
        </div>
      </Container>
    </section>
  )
}

export default CartTotal
