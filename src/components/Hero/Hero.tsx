import React from 'react';
import { Link } from 'react-router-dom';
import './hero.scss';

type HeroProps = {
  pageName: string
}

const Hero = ({pageName}: HeroProps) => {
  return (
    <section className='hero'>
      <h1 className='hero__title'>{pageName}</h1>
      <ul className="breadcrumb">
        <li className="breadcrumb__item">
            <Link to={'/'} className="breadcrumb__link">
                Home
            </Link>
        </li>
        <li className="breadcrumb__item">
            <Link to={''} className="breadcrumb__link">
                {pageName}
            </Link>
        </li>
      </ul>
    </section>
  )
}

export default Hero
