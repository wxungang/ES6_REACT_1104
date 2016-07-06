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
            <Photos listA={[{desc:[]}]}/>
            <Photos listArr={[{desc:[{text:"photo wall"},{text:["$100","已售1104件"]}],imgUrl:require("./img/banner.jpg")}]}>
            </Photos>
        </div>
    }
}
module.exports = PagePhotos;