import React, { ReactElement } from 'react';
import './SideBarItem.scss';
import SVGIcon from '../SVGIcon/SVGIcon';
import { SideBarItemProps } from './SideBarItem.interface';
import { Link } from 'react-router-dom';

const SideBarItem: React.FC<SideBarItemProps> = (props): ReactElement => {
  return (
    <Link to={props.pageRoute} className="link">
      <div
        role="presentation"
        className={`sidebar-item-section ${
          props.iconAltName === props.activeItem ? 'active' : ''
        }`}
        onClick={() => props.sideBarItemChanged(props.iconAltName)}
      >
        <div className="block"></div>
        <div className="icon">
          <SVGIcon svgPath={props.iconSrc} altName={props.iconAltName} />
        </div>
        <div className="text">{props.title}</div>
      </div>
    </Link>
  );
};

export default SideBarItem;
