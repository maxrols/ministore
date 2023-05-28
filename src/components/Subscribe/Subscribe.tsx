import React from 'react'
import Container from '../Container/Container';
import './subscribe.scss';

const Subscribe = () => {
  return (
    <section className='subscribe section'>
      <Container>
        <div className="subscribe__wrapper">
            <div className="subscribe__content">
                <h1 className="subscribe__title title">
                    Subscribe us now
                </h1>
                <p className='subscribe__descr'>
                    Get latest news, updates and deals directly mailed to your inbox.
                </p>
            </div>
            <form className="subscribe-form">
                <input type="email" className='subscribe-form__input' placeholder='Your email address here'/>
                <button className='subscribe-form__button'>subscribe</button>
            </form>
        </div>
      </Container>
    </section>
  )
}

export default Subscribe
