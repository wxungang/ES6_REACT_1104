/**
 * Created by xiaogang on 2016/6/2.
 */
"use strict";
import {Component, PropTypes} from 'react';
import {requireCss, setClassName} from "./mixins";
let prefix = 'Lists';
requireCss("Lists");


export default class Lists extends Component {
  //初始化 组件 属性和状态
  constructor(props) {
    console.log("------props------");
    console.log(props);
    super(props);
  }

  static defaultProps = {};
  static propTypes = {
    listsArr: PropTypes.array
  };

  render() {
    const classNames = setClassName(
      "personal-lists",
      this.props.className
    );
    let _lists = this.props.listsArr;
    console.log(classNames);
    return (
      <div className={classNames}>{
        _lists instanceof Array ? _lists.map((val, key)=><li key={key} href={val.link}>{val.content}</li>) : this.props.children
      }</div>
    );
  }
}
