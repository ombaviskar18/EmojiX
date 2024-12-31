import React, { useState } from 'react';
import './Home.css';
import beer from '../assets/beer.png';
import wine from '../assets/wine.png';
import car from '../assets/car.png';
import cocktail from '../assets/cocktail.png';
import gm from '../assets/gm.png';
import gn from '../assets/gn.png';
import enjoy from '../assets/enjoy.png';
import hbd from '../assets/hbd.png';
import kiss from '../assets/kiss.png';
import ly from '../assets/ly.png';
import movie from '../assets/movie.png';
import trip from '../assets/trip.png';
import coffee from '../assets/coffee.png';
import cry from '../assets/cry.png';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [balance, setBalance] = useState(50.0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [customQuantity, setCustomQuantity] = useState('');
  const [activeMenuItem, setActiveMenuItem] = useState('');

  const sliderItems = [
    { image: beer, name: 'Beer', price: 8.0 },
    { image: wine, name: 'Wine', price: 12.0 },
    { image: cocktail, name: 'Cocktail', price: 10.0 },
    { image: gm, name: 'Good Morning', price: 15.0 },
    { image: gn, name: 'Good Night', price: 15.0 },
    { image: coffee, name: 'Coffee', price: 7.0 },
    { image: kiss, name: 'Kiss', price: 5.0 },
    { image: ly, name: 'I Love You', price: 25.0 },
    { image: trip, name: 'Trip', price: 100.0 },
    { image: movie, name: 'Movie', price: 5.0 },
    { image: cry, name: 'Cry', price: 10.0 },
    { image: hbd, name: 'Happy Birthday', price: 50.0 },
    { image: enjoy, name: 'Party', price: 30.0 },
    { image: car, name: 'Car', price: 75.0 },
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderItems.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderItems.length) % sliderItems.length);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (item) => {
    setActiveMenuItem(item);
    setIsMenuOpen(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="card-container">
      {isMenuOpen ? (
        <div className="menu">
          <button className="back-btn" onClick={handleMenuToggle}>←</button>
          <center><h2>EmojiX 😎</h2></center>
          <ul>
            <li onClick={() => handleMenuItemClick('send')}>🚀 Send</li>
            <li onClick={() => handleMenuItemClick('deposit')}>💵 Deposit</li>
            <li onClick={() => handleMenuItemClick('withdraw')}>🔄 Withdraw</li>
            <li onClick={() => handleMenuItemClick('history')}>📜 History</li>
            <li onClick={() => handleMenuItemClick('about')}>ℹ️ About</li>
            <li onClick={() => handleMenuItemClick('logout')}>⏏️ Logout</li>
          </ul>
        </div>
      ) : (
        <>
          <div className="top-section">
            <button className="nav-btn" onClick={handleMenuToggle}>☰</button>
            {isLoggedIn && <div className="balance">${balance.toFixed(2)}</div>}
          </div>
          {activeMenuItem === 'deposit' && (
            <div className="deposit-section">
              <h3>Deposit Funds</h3>
              <form>
                <label>
                  Amount:
                  <input type="number" min="1" />
                </label>
                <button type="submit">Deposit</button>
              </form>
            </div>
          )}
          {activeMenuItem === 'about' && (
            <div className="about-section">
              <h2>Send Your Friends a Gift!</h2>
              <p>BeerMe transforms everyday payments into gifts...</p>
              {/* Add more About content as needed */}
            </div>
          )}
          {!activeMenuItem && (
            <>
              <div className="slider">
                <button onClick={handlePrevSlide}>❮</button>
                <div className="slider-item">
                  <h3>{sliderItems[currentSlide].name} = ${sliderItems[currentSlide].price.toFixed(2)}</h3>
                  <img src={sliderItems[currentSlide].image} alt={sliderItems[currentSlide].name} />
                </div>
                <input
                  type="number"
                  value={customQuantity}
                  onChange={(e) => setCustomQuantity(e.target.value)}
                  min="1"
                  placeholder="0"
                />
                <button onClick={handleNextSlide}>❯</button>
              </div>
              <div className="actions">
                {isLoggedIn ? (
                  <>
                    <button className="action-btn">Buy</button>
                    <button className="action-btn">Send</button>
                    <button className="action-btn">Redeem</button>
                  </>
                ) : (
                  <button className="action-btn" onClick={handleLogin}>Login</button>
                )}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
