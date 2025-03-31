import React, { useEffect, useState } from 'react';
import bannerONE from '../Assests/BannerONE.jpeg';
import bannertwo from '../Assests/Kid-1.jpeg';
import bannerTHREE from '../Assests/BannerTHREE.jpg';
import './HeroStyle.css';

const Hero = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev === 2 ? 0 : prev + 1)); // Hardcoded for 3 banners
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <div className="banner-wrapper">
        <div
          className="banner-container"
          style={{
            transform: `translateX(-${currentBanner * 100}%)`,
            transition: 'transform 1s ease-in-out',
          }}
        >
          {/* Banner 1 */}
          <div
            className="banner"
            style={{ backgroundImage: `url(${bannerONE})` }}
          >
            <div className="banner-contentONE">
              <h1>FASHION SALE</h1>
              <p>UPTO 50% OFFER</p>
            </div>
          </div>

          {/* Banner 2 */}
          <div
            className="banner"
            style={{ backgroundImage: `url(${bannerTHREE})` }}
          >
            <div className="banner-contentTWO">
             
            </div>
          </div>

          {/* Banner 3 */}
          <div
            className="banner"
            style={{ backgroundImage: `url(${bannertwo})` }}
          >
            <div className="banner-contentTHREE">
            </div>
          </div>
        </div>
      </div>

      {/* Dots for manual navigation */}
      <div className="dots">
        <span
          className={`dot ${currentBanner === 0 ? 'active' : ''}`}
          onClick={() => setCurrentBanner(0)}
        />
        <span
          className={`dot ${currentBanner === 1 ? 'active' : ''}`}
          onClick={() => setCurrentBanner(1)}
        />
        <span
          className={`dot ${currentBanner === 2 ? 'active' : ''}`}
          onClick={() => setCurrentBanner(2)}
        />
      </div>
    </div>
  );
};

export default Hero;
