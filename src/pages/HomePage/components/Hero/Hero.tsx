import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../../../components/Container/Container';
import MainButton from '../../../../components/MainButton/MainButton';
import './hero.scss';

const Hero = () => {
  return (
    <section className='hero_home'>
      <Container>
        <div className="hero__wrapper">
            <div className="hero__content">
                <h1 className='hero__title'>
                    Your Products are great.
                </h1>
                <Link to={'/shop'}>
                <MainButton text='shop product'/>
                </Link>
            </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
