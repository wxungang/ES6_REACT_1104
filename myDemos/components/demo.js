/**
 * Created by xiaogang on 2016/6/29.
 */
"use strict";
import {Component, PropTypes} from 'react';
import {requireCss, setClassName} from "./mixins";
let prefix = 'Footer';
requireCss("Footer");

export default class Footer extends Component{
    /**
     * 初始化 组件 数据
     * @param props
     */
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    /**
     * 设置默认的 props
     */
    static defaultProps={
        myProp:"personal"
    };
    /**
     * props 的类型校验
     */
    static propTypes={
        myProp: PropTypes.string
    };

    func_bind(){
        //args=1,2,3
        //do something
    }
    func_es6=()=>{
        //do something

    };

    render(){
        //临时变量和方法
        let variable="";
        function _func(){

        }

        return <div>
            <p onclick={this.func_bind.bind(this,1,2,3)}> 使用 bind 传递 this指针 </p>
            <p onclick={this.func_es6(1,2,3)}> es6写法的 函数可以获取组件  的this 指针 </p>
        </div>
    }

}

module.exports=Footer;

