/**
 * Created by xiaogang on 2016/5/31.
 * 功能：集中管理样式文件的加载问题
 */
"use strict";
export let pre="pure";

export function requireCss(pack) {
  require(`./${pre}/${pack}.less`);
}

export function setTheme (theme) {
  pre = theme;
}
