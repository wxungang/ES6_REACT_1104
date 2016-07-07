/**
 * Created by xiaogang on 2016/5/31.
 * 功能：集中管理样式文件的加载问题
 */
"use strict";
let pre="pure";

export function requireCss(pack,folder) {
  require(`./${folder||pre}/${pack}.less`);
}

export function setTheme (theme) {
  pre = theme;
}
