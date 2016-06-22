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
        path: "/home",
        listObj: {
            key: "list default"
        },
        iconFont:"icon-unie6a3",
        parentClick: function () {

        }
    };
    static propTypes = {
        path: PropTypes.string,
        listObj: PropTypes.object,
        parentClick: PropTypes.func
    };

    clickHandler() {
        console.log(arguments);
        //跳转
        (this.props.path) && (window.location.hash = this.props.path);
        //父级回调
        this.props.parentClick(this.props.listObj.key);
    }

    render() {
        let _listObj=this.props.listObj;
        const classNames = setClassName(
            "personal-list",
            this.props.className
        );
        const iconFont=setClassName(
            "iconfont right",
            this.props.iconFont
        );
        console.log(_listObj.iconFont);
        let listDom=((_listObj,_type)=>{
            if(_type){
                return <div className={classNames}>
                    <p className="p-list-key">{_listObj.key}</p><input placeholder={_listObj.val} disabled={_listObj.disabled}/>
                </div>;
            }else {
                return <div className={classNames} onClick={this.clickHandler.bind(this)}>
                    <p className="p-list-key">{_listObj.key}</p>{this.props.iconFont?<span className={iconFont}> </span>:""}{_listObj.val ?
                    <span className="right p-list-val">{_listObj.val}</span> : ""}
                </div>;
            }
        })(this.props.listObj,this.props.type);

        return (
            ((_listObj,_type)=>{
                if(_type){
                    return <div className={classNames}>
                        <p className="p-list-key">{_listObj.key}</p><input placeholder={_listObj.val} disabled={_listObj.disabled}/>
                    </div>;
                }else {
                    return <div className={classNames} onClick={this.clickHandler.bind(this)}>
                        <p className="p-list-key">{_listObj.key}</p>{this.props.iconFont?<span className={iconFont}> </span>:""}{_listObj.val ?
                        <span className="right p-list-val">{_listObj.val}</span> : ""}
                    </div>;
                }
            })(this.props.listObj,this.props.type)
        );
    }
}

