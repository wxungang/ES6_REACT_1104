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
        let _listsArr = this.props.listArr;
        console.log(classNames);
        return (
            <div className={classNames}>{
                _listsArr.map((item, index)=> {
                    const _className = index ? "p-lists-item" : "p-lists-item p-lists-title";
                    if (item instanceof Array) {
                        return <li key={index} className={_className}>
                            {item.className ? item.text.map((_item, _index)=><span className={item.className[_index]}>{_item}</span>) : item.text.map((_item, _index)=><span>{_item}</span>)}
                        </li>
                    } else {
                        return <li key={index} className={_className}>
                            <span className={item.className}>{item.text}</span>
                        </li>
                    }
                })
            }</div>
        );
    }
}
