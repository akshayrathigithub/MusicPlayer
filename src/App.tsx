import React from 'react';
import Content from './Components/ContentArea/Content';
import SideBar from './Components/SideBar/SideBar';
import './GlobalStyle.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <div className="side-bar">
          <SideBar />
        </div>
        <Switch>
          <Route exact path="/">
            <div className="content">
              <Content />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
