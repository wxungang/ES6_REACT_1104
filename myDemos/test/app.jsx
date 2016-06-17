/**
 * Created by xiaogang on 2016/5/26.
 */
"use strict";
import ReactDOM from 'react-dom';
/**
 * 定义全局的 加载组件函数
 * @param src
 * @returns {*}
 */
// global.uiRequire = function (src) {
//     if (src) {
//         return require('../components/' + src);
//     } else {
//         return require('../components/');
//     }
// };
const AppRoutes = require('./routes.jsx');

ReactDOM.render(
    AppRoutes,
  document.getElementById('body')
);

