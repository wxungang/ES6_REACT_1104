/**
 * Created by xiaogang on 2016/6/1.
 */
"use strict";

import { browserHistory, Router, Route, Link, Redirect } from 'react-router'
import Index from '../pages/index';
import Home from '../pages/home';


const AppRoutes=(
  <Router history={browserHistory}>
    <Route path="/" indexRoute={{component: Home}} component={Index}>
        <Route path="/home" component={Home}/>
    </Route>
  </Router>
);
module.exports = AppRoutes;