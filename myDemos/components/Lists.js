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
    componentDidMount(){
        console.log("componentDidMount");
    }

    render() {
        const classNames = setClassName(
            "personal-lists",
            this.props.className
        );
        const iconClass=setClassName(
            "iconfont",
            "right",
            this.props.iconFont
        );
        //lists 组件代码
        let _listsArr = this.props.listArr;
        const _listDom=_listsArr.map((item, index)=> {
            const _className = index ? "p-lists-item" : "p-lists-item p-lists-title";
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
        console.log(classNames);
        //@formatter:off
        return (
                ((imgUrl)=>{
                    if(imgUrl){
                        return <div className={classNames}>
                                    <img src={imgUrl}/>
                                   <div className="p-lists-desc">{_listDom}</div>
                            </div>
                    }else {
                        return <div className={classNames}>
                                   <span className={iconClass}></span>{_listDom}
                        </div>
                    }
                })(this.props.imgUrl)
        );
    }
}
