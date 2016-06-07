/**
 * Created by xiaogang on 2016/6/1.
 */
"use strict";

import { browserHistory, Router, Route, Link, Redirect } from 'react-router'



const appRoutes=(
  <Router history={browserHistory}>
    <Route path="/" indexRoute={{component: Home}} component={Master}>

    </Route>
  </Router>
);
