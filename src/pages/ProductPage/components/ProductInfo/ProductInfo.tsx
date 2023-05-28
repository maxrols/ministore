import React from 'react'
import Container from '../../../../components/Container/Container'
import { ProductsItem } from '../../../../models/ProductsList';
import './productInfo.scss';
import { addProduct, increaseQunatity } from '../../../../features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { CartItemObj } from '../../../../models/CartItemObj';
import { RootState } from '../../../../app/store';

type ProductInfoProps = {
  data: ProductsItem
}

const ProductInfo = ({data}:ProductInfoProps) => {
  const cartList = useSelector((state: RootState) => state.cart.cartList);
  const dispatch = useDispatch();

  const isObjectInList = () => {
    let isIn = false;
    cartList.forEach(item => {
      if (item.id === data.id) isIn = true;
    });
    return isIn;
  }

  const addToCart = () => {
    if (isObjectInList()) {
      dispatch(increaseQunatity(data.id));
    } else {
      const cartItem: CartItemObj = {
        id: data.id,
        img: data.images[0],
        title: data.title,
        price: data.price,
        quantity: 1
  
      }
      dispatch(addProduct(cartItem));
    }
  }

  return (
    <section className='product-info section'>
      <Container>
        <div className="product-info__wrapper">
            <img src={data.images[0]} alt={data.title} className='product-info__img'/>
            <div className="product-info__content">
                <h2 className="product-info__title title">
                    {data.title}
                </h2>
                <span className="product-info__rating">
                    ★ {data.rating}
                </span>
                <span className='product-info__price'>
                    {data.price}$
                </span>
                <p className="product-info__descr">
                    {data.description} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ullam voluptatum amet debitis neque natus, nam nostrum, sunt quidem nobis corrupti iure, officiis ducimus ut optio. Eius in velit doloremque.
                </p>
                <button className='product-info__btn' onClick={addToCart}>ADD TO CART</button>
            </div>
        </div>
      </Container>
    </section>
  )
}

export default ProductInfo
