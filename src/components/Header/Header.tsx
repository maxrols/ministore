import React from 'react';
import Container from '../Container/Container';
import logo from '../../assets/logo/logo.svg';
import SearchIcon from "../../assets/icons/ion_search.svg";
import PersonIcon from "../../assets/icons/ion_person.svg";
import CartIcon from "../../assets/icons/ion_cart.svg";
import './header.scss';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const Header = () => {

    const cartList = useSelector((state: RootState) => state.cart.cartList);
    const getCount = () => {
        return cartList.reduce((sum, curr) => sum + curr.quantity, 0);
    }

  return (
    <header className='header'>
        <Container>
            <div className="header__wrapper">
                <Link to={'/'}>
                    <img src={logo} alt="MiniStore logo" className='header__logo'/>
                </Link>
                <nav className='header__nav'>
                    <ul className='menu'>
                        <NavLink to={'/'} className="menu__item">
                            home
                        </NavLink>
                        <NavLink to={'/about'} className="menu__item">
                            About
                        </NavLink>
                        <NavLink to={'/shop'} className="menu__item">
                            Shop
                        </NavLink>
                    </ul>
                </nav>
                <ul className="icons__menu">
                    {/* <li className="icons__item">
                        <a href="" className="icons__link">
                            <img src={SearchIcon} alt="Search" className='icons__icon' />
                        </a>
                    </li> */}
                    {/* <li className="icons__item">
                        <a href="" className="icons__link">
                            <img src={PersonIcon} alt="My Profile" className='icons__icon' />
                        </a>
                    </li> */}
                    <li className="icons__item">
                        <Link to={'/cart'} className="icons__link cart_icon">
                            <img src={CartIcon} alt="Cart" className='icons__icon' />
                            <span>({getCount()})</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </Container>
    </header>
  )
}

export default Header
