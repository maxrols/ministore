import React from 'react';
import './info.scss';
import infoImg from '../../assets/info-img.jpg'
import Container from '../../../../components/Container/Container';
import MainButton from '../../../../components/MainButton/MainButton';
import { Link } from 'react-router-dom';

const Info = () => {
  return (
    <section className='info section'>
      <Container>
        <div className="info__wrapper">
            <img src={infoImg} alt="info" className='info__img'/>
            <div className="info__content">
                <h2 className='info__title title'>
                    How was Ministore Found?
                </h2>
                <p className="info__descr">
                Risus augue curabitur diam senectus congue velit et. Sed vitae metus nibh sit era. Nulla adipiscing pharetra pellentesque maecenas odio eros at. Et libero vulputate amet duis erat volutpat vitae eget. Sed vitae metus nibh sit era. Nulla adipiscing pharetra pellentesque maecenas odio eros at. Quam libero etiam et in ac at quis. <br /><br />
                Sed vitae metus nibh sit era. Nulla adipiscing pharetra pellentesque maecenas odio eros at. Et libero vulputate amet duis erat volutpat vitae eget. Quam libero etiam et in ac at quis. Risus augue curabitur diam senectus congue velit et. 
                </p>
                <Link to={'/shop'}>
                <MainButton text='Shop our store'/></Link>
            </div>
        </div>
      </Container>
    </section>
  )
}

export default Info
