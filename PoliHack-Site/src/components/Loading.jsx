import React from 'react';
import LogoRed from '/src/assets/Logos/LogoRed.png';
import './Loading.scss';

const Loading = ({ isLoading }) => {
  if (!isLoading) return null;
  
  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="hud-circle"></div>
        <div className="hud-circle hud-circle-2"></div>
        <div className="logo-container">
          <img src={LogoRed} alt="PoliHack Logo" className="logo" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
