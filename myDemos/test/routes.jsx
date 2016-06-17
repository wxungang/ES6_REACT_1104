/**
 * Created by xiaogang on 2016/6/1.
 */
"use strict";

import { Router, Route, IndexRoute, hashHistory } from 'react-router'
//
import createHistory from 'history/lib/createHashHistory';
const history = createHistory({ queryKey: false });

import Index from '../pages/index';
import Home from '../pages/home';

const menuLists=require('../pages/pageLists').map((list,index)=>(list.component? <Route key={index} path={list.path} component={list.component} />:"")) ;

const AppRoutes=(
    <Router history={hashHistory}>
    <Route path="/" component={Index}>
        <IndexRoute component={Home}/>
        <Route path="/home" component={Home}/>
        {menuLists}
    </Route>
  </Router>
);
module.exports = AppRoutes;