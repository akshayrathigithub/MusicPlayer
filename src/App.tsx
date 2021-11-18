import React, { useEffect } from 'react';
import Home from './Components/Home/Home';
import SideBar from './Components/SideBar/SideBar';
import './GlobalStyle.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Browse from './Components/Browse/Browse';
import { PAGE_ROUTES } from './Constants/PageRoute';
import { Artists } from './Components/Artists/Artists';
import { Albums } from './Components/Albums/Albums';

const App: React.FC = () => {
  useEffect(() => {
    return () => {
      // cleanup
    };
  }, []);
  return (
    <Router>
      <div className="app">
        <div className="side-bar">
          <SideBar />
        </div>
        <div className="content">
          <NavBar />
          <Switch>
            <Route exact path={PAGE_ROUTES.HOME}>
              <Home />
            </Route>
            <Route exact path={PAGE_ROUTES.BROWSE}>
              <Browse />
            </Route>
            <Route exact path={PAGE_ROUTES.ARTISTS}>
              <Artists />
            </Route>
            <Route exact path={PAGE_ROUTES.ALBUMS}>
              <Albums />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};
export default App;
