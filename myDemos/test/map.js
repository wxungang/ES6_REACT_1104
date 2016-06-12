/**
 * Created by xiaogang on 2016/6/9.
 */
"use strict";

var arr=[{a:1},{b:2}];

arr.map(function (val,key,item) {
    console.log(val);
    console.log(11111);
    console.log(key);
    console.log(222222);
    console.log(item);
    console.log(333333);
    console.log(this);
    console.log(444444);
},this);
