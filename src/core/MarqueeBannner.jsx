// MarqueeBanner.jsx
import React from 'react';
import './MarqueeBanner.css';

const MarqueeBanner = ({ content }) => {
  return (
    <div className="w-full bg-green-500 text-black py-4 overflow-hidden whitespace-nowrap">
      <div className="marquee-wrapper">
        <div className="marquee-track">
          <div className="marquee-content">{content}{content}</div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeBanner;
