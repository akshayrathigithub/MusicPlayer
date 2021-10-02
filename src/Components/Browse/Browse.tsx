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
      <div className="top-songs-section">
        <div className="top-songs">Tops Songs</div>
        <div className="text active">Today</div>
        <div className="text">Week</div>
        <div className="text">Month</div>
        <div className="text">Year</div>
      </div>

      <div className="songs-list">
        <div className="head">
          <div className="song-btn"></div>
          <div className="hash">#</div>
          <div className="artist-track">Track/Artist</div>
          <div className="album">Album</div>
          <div className="time">Time</div>
          <div className="plays">Plays</div>
          <div className="add">Add</div>
        </div>
        <div className="song-details">
          <div className="song-btn"></div>
          <div className="hash">01</div>
          <div className="artist-track">
            <div className="img"></div>
            <div className="details">
              <div className="song-name">Without Me</div>
              <div className="song-artist">Connor Franklin</div>
            </div>
          </div>
          <div className="album">Shallow</div>
          <div className="time">4:30</div>
          <div className="plays">25,102</div>
          <div className="add"></div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
