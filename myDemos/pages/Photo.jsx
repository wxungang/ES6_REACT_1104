/**
 * Created by xiaogang on 2016/7/6.
 */
"use strict";
import {Component, PropTypes} from 'react';
import {requireCss, setClassName} from '../components/mixins';

import Photo from '../components/Photo';

export default class PagePhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static defaultProps = {};

    static propTypes = {};
    /**
     * @returns {XML}
     */
    render() {
        return <div className="personal-page">
            <Photo listArr={[{text:"photo wall"}]} imgUrl={require("./img/banner.jpg")}/>
            <Photo listArr={{text:"photo wall"}} imgUrl={require("./img/banner.jpg")}/>
            <Photo listArr={"photo wall"} imgUrl={require("./img/banner.jpg")}/>
            <Photo listArr={[{text:"photo wall"},{text:["$100","1104件"],className:["left","right"]}]} imgUrl={require("./img/banner.jpg")} width={45} type={2}/>
        </div>
    }
}
module.exports = PagePhoto;