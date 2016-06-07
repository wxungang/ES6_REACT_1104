/**
 * Created by xiaogang on 2016/5/26.
 */
"use strict";
import ReactDOM from 'react-dom';
// import list from "../components/Lists";
// import tap from "../components/Tap";
import pHeader from "../components/Header.js";
// var pHeader=require("../components/Header.js");
// import test from "../components/test";
// var _H1Component=require("../components/test");
console.log(pHeader);

ReactDOM.render(
  <div>
    <pHeader className="myLists" title="header">
    </pHeader>
  </div>,
  document.getElementById('body')
);
