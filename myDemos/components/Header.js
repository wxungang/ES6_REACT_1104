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
        this.state = {};
    }

    static defaultProps = {
        title: "首页",
        setObj:{},
        homeObj:{}
    };

    static propTypes = {
        title: PropTypes.string
    };

    homeHandler(params) {
        console.log("header homeHandler");
        if(this.props.homeObj.handler) {
            console.log(arguments);
            this.props.homeObj.handler(params);
        }
    }
    setHandler(params) {
        console.log("header setHandler");
        if(this.props.setObj.handler){
            console.log(arguments);
            this.props.setObj.handler(params)
        }
    }

    render() {
        //数据预处理[  defaultProps 中可以做一些基本的预处理 ]

        //header 相关的类和事件
        const _classNames = setClassName(
            "personal-header",
            this.props.className
        );
        const _homeClassName = setClassName(
            "personal-header-home",
            this.props.homeObj.classNames
        );
        const _setClassName = setClassName(
            "personal-header-setting",
            this.props.setObj.classNames
        );
        return (
            <div className={_classNames}>
                <span className={_homeClassName} onClick={this.homeHandler.bind(this,this.props.homeObj.params)}> </span>
                <p>{this.props.title}</p> <span className={_setClassName} onClick={this.setHandler.bind(this,this.props.setObj.params)}> </span>
            </div>
        )
    };
}
module.exports = Header;
