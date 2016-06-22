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
        path:"/home",
        listObj:{
            key:"list demo"
        },
        parentClick:function () {
            
        }
    };
    static propTypes = {
        path:PropTypes.string,
        listObj:PropTypes.object,
        parentClick:PropTypes.func
    };
    clickHandler(){
        console.log(arguments);
        //跳转
        (this.props.path)&&(window.location.hash=this.props.path);
        //父级回调
        this.props.parentClick(this.props.listObj.key);
    }

    render() {
        const classNames = setClassName(
            "personal-list",
            this.props.className
        );
        let _listObj = this.props.listObj;
        // let _path=this.props.path;
        return (
            <div className={classNames} onClick={this.clickHandler.bind(this)}>
              <p className="p-list-key">{_listObj.key}</p><span className="iconfont icon-unie6a3 right"></span>{_listObj.val?<span class="right p-list-val">_listObj.val</span>:""}
            </div>
        );
    }
}

