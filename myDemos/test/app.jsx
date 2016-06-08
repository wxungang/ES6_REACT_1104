/**
 * Created by xiaogang on 2016/5/26.
 */
"use strict";
import ReactDOM from 'react-dom';
// import list from "../components/Lists";
// import tap from "../components/Tap";
import pHeader from "../components/Header";
// var pHeader=require("../components/Header.js");
import test from "../components/test";
console.log(test);

ReactDOM.render(
  <div>
    <test className="myLists" title="header">
    </test>
  </div>,
  document.getElementById('body')
);
