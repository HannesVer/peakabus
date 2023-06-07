import React, { useState, useEffect } from 'react';
import Tile from './Tile';
import './all.css';

function Home() {
  const locations = ['Cambridge','Oxford','Camden', 'Hackney', 'Shoreditch', 'Fulham', 'Notting Hill', 'Chelsea', 'Tottenham', 'Sainsbury', 'Wembley', 'Mayfair', 'Hoxton'];
  const imageNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; // Assuming there are 9 images from A.png to I.png
  const tileNames = ['Buzzing', 'Glorious', 'Curious', 'Sturdy', 'Cosmic', 'Magic', 'Flaming', 'Cuddly', 'Bumbling']; // Creative names for buses

  const initialCaptions = Array(9).fill().map(() => randomLocation());
  const [captions, setCaptions] = useState(initialCaptions);
  const [countdown, setCountdown] = useState(10);

  function randomLocation() {
    const index = Math.floor(Math.random() * locations.length);
    return `Located in ${locations[index]}, London`;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCaptions(captions.map(() => randomLocation()));
      setCountdown(10);
    }, 10000);

    const countdownTimer = setInterval(() => {
      setCountdown((count) => count - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      clearInterval(countdownTimer);
    };
  }, [captions]);

  const tiles = imageNames.map((imageName, i) => {
    const imgUrl = process.env.PUBLIC_URL + `/${imageName}.png`;  // Path to the image
    return (
      <Tile
        key={i}
        img={imgUrl}
        title={`${tileNames[i]} Bus`}
        caption={captions[i]}
      />
    );
  });

  return (
    <div className='home'>
      <h1>Welcome to peekAbus!</h1>
      <div className='countdown'>
        <p>Busses moving in: {countdown}s</p>
      </div>
      <div className='grid'>
        {tiles}
      </div>
    </div>
  );
}

export default Home;
