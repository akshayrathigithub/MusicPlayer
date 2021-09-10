import React from 'react';
import SideBar from './Components/SideBar/SideBar';
import './GlobalStyle.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="side-bar">
        <SideBar />
      </div>
      <div className="content"></div>
    </div>
  );
};
export default App;
