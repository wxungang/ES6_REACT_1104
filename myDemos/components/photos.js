/**
 * Created by xiaogang on 2016/7/6.
 */
"use strict";
import {Component, PropTypes} from 'react';
import {requireCss, setClassName} from "./mixins";
let prefix = 'Photos';
requireCss("Photos");

export default class Photos extends Component{
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



    render(){
        //临时变量和方法
        const classNames = setClassName(
            "personal-photos",
            this.props.className
        );
        let _listsArr = this.props.listArr;
        const _photoDom=_listsArr.map((item, index)=> {
            const _className = "p-photo-"+index;
            if (item.text instanceof Array) {
                return <li key={index} className={_className}>
                    {item.className ? item.text.map((_item, _index)=><span key={_index} className={item.className[_index]}>{_item}</span>) : item.text.map((_item, _index)=><span key={_index}>{_item}</span>)}
                </li>
            } else {
                return <li key={index} className={_className}>
                    <span className={item.className}>{item.text}</span>
                </li>
            }
        });
        return <div className={classNames}>
            <img src={this.props.imUrl}/>
            {_photoDom}
        </div>
    }

}
module.exports=Photos;


