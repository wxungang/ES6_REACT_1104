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

    static defaultProps = {

    };
    static propTypes = {

    };
    clickHandler(){
        console.log(this);
        console.log(arguments);
        console.log(this.props.path);

        path&&(window.location.hash=path);

        console.log(this.refs.header);

        // this.context.history.pushState(null, path);
        // if (!this.context.history.isActive(path)) {
        //     this.context.history.pushState(null, path);
        // }
    }

    render() {
        const classNames = setClassName(
            "personal-list",
            this.props.className
        );
        let _listObj = this.props.listObj;
        // let _path=this.props.path;
        return (
            <div className={classNames} onClick={this.clickHandler}>
              <p className="p-list-key">{_listObj.key}</p><span className="iconfont icon-unie6a3 right"></span>
            </div>
        );
    }
}

