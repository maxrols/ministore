import React from 'react';
import './mainButton.scss';

type MainButtonProps = {
    text: string,
}

const MainButton = ({text}: MainButtonProps) => {
  return (
    <button className='main-btn'>
        {text}
    </button>
  )
}

export default MainButton
