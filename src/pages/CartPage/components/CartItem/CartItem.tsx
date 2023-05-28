import React, { useState, useEffect } from 'react';
import './cartItem.scss';
import closeIcon from '../../assets/icons/close.svg';
import { CartItemObj } from '../../../../models/CartItemObj';
import { useDispatch } from 'react-redux';
import { decreaseQunatity, increaseQunatity, removeProduct } from '../../../../features/cart/cartSlice';

type CartItemProps = {
    item: CartItemObj
}

const CartItem = ({item}: CartItemProps) => {
    const [isDisabled, setIsDisabled] = useState(true);
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(removeProduct(item.id));
    }

    const handleIncrease = () => {
        dispatch(increaseQunatity(item.id));
    }
    
    const handleDecrease = () => {
        dispatch(decreaseQunatity(item.id))
    }

    useEffect(() => {
        item.quantity > 1 ? setIsDisabled(false) : setIsDisabled(true);
    }, [item.quantity])

    return (
        <li className='cart-item'>
            <div className="cart-item__info">
                <img src={item.img} alt={item.title} className='cart-item__img'/>
                <div className="cart-item__text">
                    <h3 className="cart-item__title">
                        {item.title}
                    </h3>
                    <span className='cart-item__price'>
                    ${item.price}
                    </span>
                </div>
            </div>
            <div className="quantity">
                <button className='quantity__btn' onClick={handleDecrease} disabled={isDisabled}>-</button>
                <span className='quantity__count'>{item.quantity}</span>
                <button className='quantity__btn' onClick={handleIncrease}>+</button>
            </div>
            <div className="total">
                <span className='total__price'>${item.price * item.quantity}</span>
                <button className='close-btn' onClick={handleDelete}>
                    <img src={closeIcon} alt="close icon" className="close-btn__img" />
                </button>
            </div>
        </li>
    )
}

export default CartItem
