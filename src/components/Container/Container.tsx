import React from 'react';
import './container.scss';

type ContainerProps = {
    children: React.ReactNode
}

const Container = ({children}: ContainerProps) => {
  return (
    <div className='container'>
      {children}
    </div>
  )
}

export default Container
