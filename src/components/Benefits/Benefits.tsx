import React from 'react'
import Container from '../Container/Container';
import basketIcon from '../../assets/icons/basket.svg';
import qualityIcon from '../../assets/icons/quality.svg';
import offerIcon from '../../assets/icons/offer.svg';
import secureIcon from '../../assets/icons/secure.svg';
import './benefits.scss';

type benefitsItem = {
    iconUrl: string,
    title: string,
    descr: string
}

type benefitsList = benefitsItem[]

const Benefits = () => {

    const benefitsList: benefitsList = [
        {
            iconUrl: basketIcon,
            title: 'Free Delivery',
            descr: "Consectetur adipi elit lorem ipsum dolor sit amet."
        },
        {
            iconUrl: qualityIcon,
            title: 'Quality guarantee',
            descr: "Dolor sit amet orem ipsu mcons ectetur adipi elit."
        },
        {
            iconUrl: offerIcon,
            title: 'Daily offers',
            descr: "Amet consectetur adipi elit loreme ipsum dolor sit."
        },
        {
            iconUrl: secureIcon,
            title: '100% secure payment',
            descr: "Rem Lopsum dolor sit amet, consectetur adipi elit."
        }
    ]

  return (
    <section className='benefits section'>
      <Container>
        <ul className="benefits__list">
            {benefitsList.map((item, i) => (
                <li className="benefits__item" key={i}>
                    <img src={item.iconUrl} alt="delivery icon" className='benefits__icon'/>
                    <div className="benefits__text">
                        <h2 className="benefits__title">
                            {item.title}
                        </h2>
                        <p className="benefits__descr">
                            {item.descr}
                        </p>
                    </div>
                </li>
            ))}
        </ul>
      </Container>
    </section>
  )
}

export default Benefits
