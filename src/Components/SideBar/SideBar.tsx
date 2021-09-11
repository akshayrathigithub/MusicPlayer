import React, { useState } from 'react';
import SideBarItem from '../../SharedComponents/SideBarItem/SideBarItem';
import './SideBar.scss';

import {
  BOT_SIDEBAR_ITEMS,
  INITIAL_STATE_SIDEBAR,
  MID_SIDEBAR_ITEMS,
  TOP_SIDEBAR_ITEMS,
} from './SideBar.interface';

const SideBar: React.FC = () => {
  const [sideBarState, setSideBarState] = useState(INITIAL_STATE_SIDEBAR);
  return (
    <div className="side-bar-section">
      <div className="logo">MUSICLY</div>
      <div className="header-section">
        {TOP_SIDEBAR_ITEMS.map((item, index) => {
          return (
            <SideBarItem
              iconAltName={item.altName}
              iconSrc={item.src}
              title={item.text}
              activeItem={sideBarState.activeItem}
              sideBarItemChanged={(action) => {
                setSideBarState({ activeItem: action });
              }}
              key={index}
            />
          );
        })}
      </div>
      <div className="mid-section">
        <div className="heading">Your Library</div>
        <div className="items">
          {MID_SIDEBAR_ITEMS.map((item, index) => {
            return (
              <SideBarItem
                iconAltName={item.altName}
                iconSrc={item.src}
                title={item.text}
                activeItem={sideBarState.activeItem}
                sideBarItemChanged={(action) => {
                  setSideBarState({ activeItem: action });
                }}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <div className="end-section">
        <div className="heading">Your Library</div>
        <div className="items">
          {BOT_SIDEBAR_ITEMS.map((item, index) => {
            return (
              <SideBarItem
                iconAltName={item.altName}
                iconSrc={item.src}
                title={item.text}
                activeItem={sideBarState.activeItem}
                sideBarItemChanged={(action) => {
                  setSideBarState({ activeItem: action });
                }}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
