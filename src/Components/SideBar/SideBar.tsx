import React from 'react';
import SideBarItem from '../../SharedComponents/SideBarItem/SideBarItem';
import './SideBar.scss';
const SideBar: React.FC = () => {
  return (
    <div className="side-bar-section">
      <div className="logo">MUSICLY</div>
      <div>
        <SideBarItem />
      </div>
    </div>
  );
};

export default SideBar;
