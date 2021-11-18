import React from 'react';
import SVGIcon from '../../SharedComponents/SVGIcon/SVGIcon';
import './Artists.scss';
import LeftSliderIcon from '../../Assets/Icons/ic_chevron_left.svg';
import RightSliderIcon from '../../Assets/Icons/ic_chevron_right.svg';

export const Artists: React.FC = () => {
  return (
    <div className="artists">
      <div className="top-section">
        <div className="info">
          <div className="top-artists">Top Artists</div>
          <div className="total-artists">125 artists</div>
        </div>
        <div className="end-section">
          <div className="btn all-artists">
            <div>All</div>
          </div>
          <div
            className="controls"
            role="presentation"
            onClick={() => {
              console.log('hello');
            }}
          >
            <div className="btn control-btn">
              <SVGIcon svgPath={LeftSliderIcon} altName={'LeftSlider'} />
            </div>
            <div className="btn control-btn">
              <SVGIcon svgPath={RightSliderIcon} altName={'RightSliderIcon'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
