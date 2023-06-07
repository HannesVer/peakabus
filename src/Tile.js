import React from 'react';
import './all.css';

function Tile({ img, title, caption }) {
  return (
    <div className='tile' style={{ backgroundImage: `url(${img})` }}>
      <div className='tile-content'>
        <h3>{title}</h3>
      </div>
      <p className='caption'>{caption}</p>
    </div>
  );
}

export default Tile;
