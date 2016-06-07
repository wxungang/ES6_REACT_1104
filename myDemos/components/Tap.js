/**
 * Created by xiaogang on 2016/6/1.
 */

"use strict";
import {Component, PropTypes} from 'react';
import {requireCss, setClassName} from "./mixins";
let prefix = 'Tap';
requireCss("Tap");


export default class Tap extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const classNames = setClassName(
      "personal-tap",
      this.props.className
    );
    let _lists = this.props.tapArr;
    return (
      <div className={classNames}>{
        _lists instanceof Array ? _lists.map((val, key)=><a key={key} href={val.link}>{val.content}</a>) : this.props.children
      }
      </div>
    )
  }

}
