/**
 * Created by xiaogang on 2016/5/27.
 */
"use strict";
import {Component, PropTypes} from 'react';
import {requireCss, setClassName} from "./mixins";
let prefix = 'Header';
requireCss("Header");

class Header extends Component {
  //初始化 组件 属性和状态
  constructor(props) {
    console.log(props);
    super(props);
  }

  static defaultProps = {
    title: "首页"
  };

  static propTypes = {
    title: PropTypes.string
  };

  render() {
    const classNames = setClassName(
      "personal-header",
      this.props.className
    );
    return (
      <div className={classNames}>
        <span className="personal-header-home"> </span><p>{this.props.title}</p> <span
        className="personal-header-setting"> </span>
      </div>
    )
  };
}
module.exports = Header;
