/**
 * Created by xiaogang on 2016/7/6.
 */
"use strict";
import {Component, PropTypes} from 'react';
import {requireCss, setClassName} from '../components/mixins';

import Photos from '../components/Photos';

export default class PagePhotos extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static defaultProps = {};

    static propTypes = {};
    // 组件调用代码
    render() {
        let listArr = [{
            desc: [{text: "photo wall"}, {
                text: ["$100", "已售1104件"]
            }],
            imgUrl: require("./img/banner.jpg")
        },{
            desc: [{text: "photo wall"}, {
                text: ["$100", "已售1104件"]
            }],
            imgUrl: require("./img/banner.jpg")
        },{
            desc: [{text: "photo wall"}, {
                text: ["$100", "已售1104件"]
            }],
            imgUrl: require("./img/banner.jpg")
        }];
        return <div className="personal-page">
            <Photos listArr={[{desc:[{text:["default"]}],imgUrl:require("./img/weiXin/1.jpg")},{desc:[{text:"default"}],imgUrl:require("./img/weiXin/2.jpg")},{desc:[{text:"default"}],imgUrl:require("./img/weiXin/3.jpg")},{desc:[{text:"default"}],imgUrl:require("./img/weiXin/4.jpg")}]}/>
            <Photos className="p-photos-margin" listArr={[{desc:[{text:"margin"}],imgUrl:require("./img/weiXin/5.jpg")},{desc:{text:"default"},imgUrl:require("./img/weiXin/6.jpg")},{desc:"default",imgUrl:require("./img/weiXin/7.jpg")},{desc:"default",imgUrl:require("./img/weiXin/8.jpg")}]}/>
            <Photos className="p-photos-border" listArr={[{desc:[{text:"border"}],imgUrl:require("./img/weiXin/9.jpg"), type:2},{desc:{text:"default"},imgUrl:require("./img/weiXin/10.jpg")},{desc:"default",imgUrl:require("./img/weiXin/11.jpg"),type:2},{desc:"default",imgUrl:require("./img/weiXin/12.jpg")}]}/>
            <Photos listArr={[{desc:[{text:["w 50"]}],imgUrl:require("./img/banner.jpg"),width:50,type:2},{desc:[{text:"w 36"}],imgUrl:require("./img/banner.jpg"),width:36}]}/>
        </div>
    }
}
module.exports = PagePhotos;