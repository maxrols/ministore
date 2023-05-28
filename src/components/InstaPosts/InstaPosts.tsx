import React from 'react'
import Container from '../Container/Container';
import img1 from '../../assets/ig_images/img1.jpg';
import img2 from '../../assets/ig_images/img2.jpg';
import img3 from '../../assets/ig_images/img3.jpg';
import img4 from '../../assets/ig_images/img4.jpg';
import img5 from '../../assets/ig_images/img5.jpg';
import './instaPosts.scss';

const InstaPosts = () => {
  return (
    <section className='section instagram'>
      <Container>
        <h1 className='instagram__title title'>Shop our insta</h1>
        <ul className="posts-list">
            {[img1, img2, img3, img4, img5].map((img, i) => (
                <li className="post-list__item" key={i}>
                    <a href="" className="posts-list__link">
                        <img className='posts-list__image' src={img} alt={`image ${i}`} />
                    </a>
                </li>
            ))}
        </ul>
      </Container>
    </section>
  )
}

export default InstaPosts
