/**
 * Created by xiaogang on 2016/6/1.
 */

"use strict";
import {Component, PropTypes} from 'react';
import {requireCss, setClassName} from "./mixins";
let prefix = 'Tap';
requireCss("Tap");


export default class Tap extends Component {
    /**
     * 初始化 组件 数据
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {}
    }

    /**
     * 设置默认的 props
     */
    static defaultProps = {
        text: "Tap"
    };

    /**
     * props 的类型校验
     */
    static propTypes = {
        text: PropTypes.string
    };

    render() {
        const classNames = setClassName(
            "personal-tap",
            this.props.className
        );
        let _listArr = this.props.listArr;
        let _text = this.props.text;
        
        let _style = this.props.style || {};
        console.log(_style);
        _style.width = (100 / _listArr.length) + "%";
        console.log(_style);
        _style = {
            width: (100 / _listArr.length) + "%"
        };

        //@formatter:off
        return (
            <div className={classNames} style={this.props.style}>{
                 _listArr.map((item,index)=><p key={index} style={_style}>{item.text||_text}</p>)
            }
            </div>
        );
        //@formatter:on
    }
}
