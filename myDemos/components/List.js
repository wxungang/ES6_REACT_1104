/**
 * Created by xiaogang on 2016/6/13.
 */
"use strict";
import {Component, PropTypes} from 'react';
import {requireCss, setClassName} from "./mixins";
let prefix = 'List';
requireCss("List");


export default class List extends Component {
    //初始化 组件 属性和状态
    constructor(props) {
        console.log("------props------");
        console.log(props);
        super(props);
    }

    static defaultProps = {};
    static propTypes = {

    };

    render() {
        const classNames = setClassName(
            "personal-list",
            this.props.className
        );
        let _listObj = this.props.listObj;
        console.log(classNames);
        return (
            <div className={classNames}>
              <p className="p-list-key">{_listObj.key}</p><span className="iconfont icon-unie6a3 right"></span>
            </div>
        );
    }
}

