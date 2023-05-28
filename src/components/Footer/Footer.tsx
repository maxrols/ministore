import React from 'react'
import Container from '../Container/Container';
import logo from '../../assets/logo/logo.svg';
import './footer.scss'
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer section'>
      <Container>
        <div className="footer__wrapper">
            <div className="footer__info">
                <img src={logo} alt="ministore logo" className="footer__logo" />
                <p className="footer__descr">
                    Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit. Gravida massa volutpat aenean odio erat nullam fringilla.
                </p>
            </div>
            <div className="footer-group">
                <h3 className="footer-group__title">
                    Quick Links
                </h3>
                <Link to={'/'} className='footer-group__link'>home</Link>
                <Link to={'/about'} className='footer-group__link'>about</Link>
                <NavLink to={'/shop'} className='footer-group__link'>shop</NavLink>
            </div>
            <div className="footer-group contact">
                <h3 className="footer-group__title">
                    Contact Us
                </h3>
                <p className="footer-group__text">
                    Do you have any queries or suggestions?<br/>
                    <a href="mailto:yourinfo@gmail.com">yourinfo@gmail.com</a>
                </p>
                <p className="footer-group__text">
                    If you need support? Just give us a call. <br />
                    <a href="tel:+5511122233344">+55 111 222 333 44</a>
                </p>
            </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
