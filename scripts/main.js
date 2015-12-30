import React  from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';

import SplashPage from './components/SplashPage.jsx'
import Landing from './components/Landing.jsx'
import BetaUser from './components/BetaUser.jsx'



var routes = (
  <Router history={createHistory()}>
    <Route path="/" component={SplashPage}/>
    <Route path="/demo" component={Landing}/>
    <Route path="/beta" component={BetaUser}/>

  </Router>
)

ReactDOM.render(routes, document.querySelector('#main'))
