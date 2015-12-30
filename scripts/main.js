import React  from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';

import SplashPage from './components/SplashPage.jsx'
import Landing from './components/Landing.jsx'
import BetaUser from './components/BetaUser.jsx'



var routes = (
  <Router history={createHistory()}>
    <Route path="/kitchtemp" component={SplashPage}/>
    <Route path="/kitchtemp/demo" component={Landing}/>
    <Route path="/kitchtemp/beta" component={BetaUser}/>

  </Router>
)

ReactDOM.render(routes, document.querySelector('#main'))
