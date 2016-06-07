/**
 * Created by xiaogang on 2016/5/31.
 * 功能：统一管理 UI 组件所需要的外部 插件或者自封装的功能模块
 */
"use strict";
//样式管理功能模块
import {requireCss, setTheme} from "../styles/requireCss";
//处理样式文件的类名的统一管理
import classNames from 'classnames';


module.exports = {
  "requireCss": requireCss,
  "setTheme": setTheme,
  "setClassName": classNames
};
