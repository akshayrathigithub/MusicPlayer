import React from 'react';
import { SVGIconProps } from './SVGIcon.interface';

const SVGIcon: React.FC<SVGIconProps> = (props) => {
  return (
    <>
      <img src={props.svgPath} alt={props.altName} />
    </>
  );
};

export default SVGIcon;
