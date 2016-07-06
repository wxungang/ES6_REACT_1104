/**
 * Created by xiaogang on 2016/7/6.
 */
"use strict";
import {Component, PropTypes} from 'react';
import {requireCss, setClassName} from "./mixins";
let prefix = 'Photo';
requireCss("Photo");

export default class Photo extends Component {
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
        myProp: "personal"
    };
    /**
     * props 的类型校验
     */
    static propTypes = {
        myProp: PropTypes.string
    };
    render() {
        //临时变量和方法
        const classNames = setClassName(
            "personal-photo",
            this.props.className
        );
        const _style = {
            width: this.props.width + "%"
        };
        let _listsArr = this.props.listArr;
        //@formatter:off
        const _photoDom=(_listsArr instanceof Array)?_listsArr.map((item, index)=> {
            const _className = "p-photo-p"+index;
            if (item.text instanceof Array) {
                return <p key={index} className={_className}>
                    {item.className ? item.text.map((_item, _index)=><span key={_index} className={item.className[_index]}>{_item}</span>) : item.text.map((_item, _index)=><span key={_index}>{_item}</span>)}
                </p>
            } else {
                return <p key={index} className={_className}>
                    <span className={item.className}>{item.text}</span>
                </p>
            }
        }):<p><span className={_listsArr.className}>{_listsArr.text||_listsArr}</span></p>;
        //@formatter:on
        return ((type)=> {
            switch (type) {
                case 2:
                {
                    return <div className={classNames} style={_style}>
                        {_photoDom}
                        <img src={this.props.imgUrl}/>
                    </div>
                }
                default:{
                    return <div className={classNames} style={_style}>
                        <img src={this.props.imgUrl}/>
                        {_photoDom}
                    </div>
                }
            }
        })(this.props.type)
    }
}
module.exports = Photo;


