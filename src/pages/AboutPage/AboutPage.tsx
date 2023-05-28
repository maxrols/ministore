import React from 'react'
import Hero from '../../components/Hero/Hero'
import InstaPosts from '../../components/InstaPosts/InstaPosts'
import Subscribe from '../../components/Subscribe/Subscribe'
import Info from './components/Info/Info'

const AboutPage = () => {
  return (
    <div>
      <Hero pageName='about us'/>
      <Info/>
      <Subscribe/>
      <InstaPosts/>
    </div>
  )
}

export default AboutPage
