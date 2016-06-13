/**
 * Created by xiaogang on 2016/6/1.
 */
"use strict";

import { browserHistory, Router, Route, Link, Redirect } from 'react-router'
import Index from '../pages/index';
import Home from '../pages/home';


let menulist = [];

function addMenu(list,index) {
    if (list.component) {
        menulist.push(
            <Route key={index} path={list.path} component={list.component} />
        );
    }
}
require('../pages/pageLists').forEach(function (list,index) {
    addMenu(list);
});

const AppRoutes=(
  <Router history={browserHistory}>
    <Route path="/" indexRoute={{component: Home}} component={Index}>
        <Route path="/home" component={Home}/>
        {menulist}
    </Route>
  </Router>
);
module.exports = AppRoutes;