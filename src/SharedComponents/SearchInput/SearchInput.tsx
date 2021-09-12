import React from 'react';
import SVGIcon from '../SVGIcon/SVGIcon';
import './SearchInput.scss';
import ic_search from '../../Assets/Icons/ic_search.svg';

const SearchInput: React.FC = () => {
  return (
    <div className="input-wrapper">
      <div className="search-icon-wrapper">
        <SVGIcon svgPath={ic_search} altName="search" />
      </div>
      <input className="input" placeholder="Search for artist, songs etc..." />
    </div>
  );
};

export default SearchInput;
