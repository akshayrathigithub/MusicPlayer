import React, { useRef } from 'react';
import './Browse.scss';

const Browse: React.FC = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sliderRef = useRef<HTMLDivElement>(null);

  const slide = (action: string) => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = 'translate3d(-400px, 0px, 0px)';
    }
  };
  return (
    <div className="browse">
      <div className="head-section">
        <div className="text">Recommended Album</div>
        <div className="slider-btn">
          <button onClick={() => slide('left')}>left</button>
          <button>right</button>
        </div>
      </div>
      <div className="slider-wrapper">
        <div className="slider" ref={sliderRef}>
          {arr.map((x) => {
            return (
              <div className="card" key={x}>
                <div className="img"></div>
                <div className="lower-part">
                  <div className="head-text">Drip Too Hard</div>
                  <div className="songs-length">12 songs</div>
                  <div className="play-pause-btn">
                    <div className="icon"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Browse;
