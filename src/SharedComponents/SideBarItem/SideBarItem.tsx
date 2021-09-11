import React, { ReactElement } from 'react';
import './SideBarItem.scss';
import SVGIcon from '../SVGIcon/SVGIcon';
import { SideBarItemProps } from './SideBarItem.interface';

const SideBarItem: React.FC<SideBarItemProps> = (props): ReactElement => {
  return (
    <div
      className={`sidebar-item-section ${
        props.iconAltName === props.activeItem ? 'active' : ''
      }`}
    >
      <div className="block"></div>
      <div className="icon">
        <SVGIcon svgPath={props.iconSrc} altName={props.iconAltName} />
      </div>
      <div className="text">{props.title}</div>
    </div>
  );
};

export default SideBarItem;
