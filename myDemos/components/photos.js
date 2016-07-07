/**
 * Created by xiaogang on 2016/7/6.
 */
"use strict";
import {Component, PropTypes} from 'react';
import {requireCss, setClassName} from "./mixins";
let prefix = 'Photos';
requireCss("Photos");

export default class Photos extends Component {
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
            "personal-photos",
            this.props.className
        );
        //@formatter:off
        let _listsArr = this.props.listArr;
        let _type=this.props.type;
        let _photoDom=(photoArr)=>{
            return photoArr instanceof Array?photoArr.map((item, index)=> {
                const _className = "p-photo-"+index;
                if (item.text instanceof Array) {
                    return <p key={index} className={_className}>
                        {item.className ? item.text.map((_item, _index)=><span key={_index} className={item.className[_index]}>{_item}</span>) : item.text.map((_item, _index)=><span key={_index}>{_item}</span>)}
                    </p>
                } else {
                    return <p key={index} className={_className}>
                        <span className={item.className}>{item.text}</span>
                    </p>
                }
            }):<p><span className={photoArr.className}>{photoArr.text||photoArr}</span></p>;
        };
        //@formatter:on
        return <div className={classNames}>
            {_listsArr.map((item, index)=> {
                let _style = {
                    width: item.width + "%"
                };
                switch(_type||item.type){
                    case 2:{
                        return <div className="personal-photo" key={index} style={_style}>
                               { _photoDom(item.desc) }
                                <img src={item.imgUrl}/>
                        </div>
                    }
                    default:{
                        return <div className="personal-photo" key={index} style={_style}>
                            <img src={item.imgUrl}/>
                            { _photoDom(item.desc) }
                        </div>
                    }
                }
            })}
        </div>
    }
}
module.exports = Photos;


