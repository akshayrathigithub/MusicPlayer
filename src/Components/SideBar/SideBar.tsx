import React, { useState } from 'react';
import SideBarItem from '../../SharedComponents/SideBarItem/SideBarItem';
import './SideBar.scss';
import ic_home from '../../Assets/Icons/ic_home.svg';
import ic_search from '../../Assets/Icons/ic_search.svg';
import ic_radio from '../../Assets/Icons/ic_radio.svg';
import { SIDEBAR_ITEMS } from '../../Constants/Enum';
import { INITIAL_STATE_SIDEBAR } from './SideBar.interface';

const SideBar: React.FC = () => {
  const [sideBarState, setSideBarState] = useState(INITIAL_STATE_SIDEBAR);
  return (
    <div className="side-bar-section">
      <div className="logo">MUSICLY</div>
      <div className="header-section">
        <SideBarItem
          iconAltName={SIDEBAR_ITEMS.HOME}
          iconSrc={ic_home}
          title="HOME"
          activeItem={sideBarState.activeItem}
        />
        <SideBarItem
          iconAltName={SIDEBAR_ITEMS.BROWSE}
          iconSrc={ic_search}
          title="BROWSE"
          activeItem={sideBarState.activeItem}
        />
        <SideBarItem
          iconAltName={SIDEBAR_ITEMS.RADIO}
          iconSrc={ic_radio}
          title="RADIO"
          activeItem={sideBarState.activeItem}
        />
      </div>
    </div>
  );
};

export default SideBar;
