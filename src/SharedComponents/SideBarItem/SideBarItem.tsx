import React, { ReactElement } from 'react';
import './SideBarItem.scss';
import ic_home from '../../Assets/Icons/Dark/ic_home.svg';

const SideBarItem: React.FC = (): ReactElement => {
  return (
    <div className="sidebar-item-section">
      <div className="starting-block"></div>
      <div className="icon"></div>
      <div className="text">HOME</div>
    </div>
  );
};

export default SideBarItem;
