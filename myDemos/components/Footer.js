/**
 * Created by xiaogang on 2016/6/29.
 */
"use strict";
import {Component, PropTypes} from 'react';
import {requireCss, setClassName} from "./mixins";
let prefix = 'Footer';
requireCss("Footer");

export default class Footer extends Component {
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
    };
    /**
     * props 的类型校验
     */
    static propTypes = {
    };

    clickHandler=(e)=>{
        e.preventDefault();
        console.log("you have click footer tap");
        console.log(arguments);
        console.log(e.target.attributes["key"]);
    };

    render() {
        //临时变量和方法
        const classNames = setClassName(
            "personal-footer",
            this.props.className,
            this.props.type?"p-footer-lineHeight":""
        );
        const _iconFontClass=setClassName(
            "iconfont "
        );
        // const _footerClass={
        //     lineHeight:inherit
        // };
        let _listArr=this.props.listArr;
        let _type=this.props.type;
        let _iconFont= "icon-unie913";//默认图标
        return ((_listArr, _type)=> {
              if(_type){
                  return <div className={classNames} style={this.props.style}>{
                      _listArr.map((item,index)=><a key={index}  className="p-footer-tap" href={item.link||"#"} onClick={this.clickHandler}><span className={_iconFontClass + (item.iconFont||_iconFont)}> </span><p>{item.text}</p></a>)
                  }
                  </div>
              }else {
                  return <div className={classNames}>{
                      _listArr.map((item,index)=><a key={index}  className="p-footer-tap" href={item.link||"#"} onClick={this.clickHandler}>{item.text}</a>)
                  }
                  </div>
              }
        })(this.props.listArr, this.props.type);
    }


}

module.exports = Footer;

