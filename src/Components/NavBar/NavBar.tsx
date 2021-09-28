import React from 'react';
import SearchInput from '../../SharedComponents/SearchInput/SearchInput';

const NavBar: React.FC = () => {
  return (
    <div className="nav-bar">
      <div className="searchable-input">
        <SearchInput />
      </div>
    </div>
  );
};

export default NavBar;
