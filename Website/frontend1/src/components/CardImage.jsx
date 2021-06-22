import React from 'react';
import '../styles.css';
const CardImage = () => {
  return (
    <div className='profileImg text-center'>
      <img
        className='rounded-circle'
        src='https://source.unsplash.com/random/200x200'
        alt='genericimg'
      />
    </div>
  );
};

export default CardImage;
