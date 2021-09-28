import React from 'react';
import Home from './Components/Home/Home';
import SideBar from './Components/SideBar/SideBar';
import './GlobalStyle.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <div className="side-bar">
          <SideBar />
        </div>
        <div className="content">
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};
export default App;
