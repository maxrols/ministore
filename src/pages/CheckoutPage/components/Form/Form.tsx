import React from 'react';
import MainButton from '../../../../components/MainButton/MainButton';
import './form.scss';

const Form = () => {
  return (
    <section className="section check">
        <div className="container">
          <div className="check__wrapper">
            <form className='formc'>
              <h2 className="formc__title title">
                Billing Details
              </h2>
              <label>First Name*  
              <input type="text" className='formc__input' required/>
              </label>
              <label>Last name *  
              <input type="text" className='formc__input' required/>
              </label>
              <label>Company name (optional)  
              <input type="text" className='formc__input' required/>
              </label>
              <label>Country / Region *  
              <input type="text" className='formc__input' placeholder='United States (US)' required/>
              </label>
              <label>Street address *
              <input type="text" className='formc__input' required/>
              </label>
              <label>Town / City *  
              <input type="text" className='formc__input' required/>
              </label>
              <label>State *  
              <input type="text" className='formc__input' placeholder='Florida' required/>
              </label>
              <label>ZIP Code * 
              <input type="text" className='formc__input' required/>
              </label>
              <label>Phone *
              <input type="phone" className='formc__input' required/>
              </label>
              <label>Email address *  
              <input type="email" className='formc__input' required/>
              </label>
            </form>
            <form className='formc'>
              <h2 className="formc__title title">
                Additional Information
              </h2>
              <label>Order notes (optional) 
              <input type="text" className='formc__input' placeholder='Notes about your order. Like special notes for delivery.'/>
              </label>
            </form>
          </div>
          <MainButton text='Place An Order'/>
        </div>
      </section>
  )
}

export default Form
