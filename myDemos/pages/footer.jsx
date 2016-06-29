/**
 * Created by xiaogang on 2016/6/29.
 */
"use strict";

import {Component, PropTypes} from 'react';
import {requireCss, setClassName} from '../components/mixins';

import Footer from '../components/Footer';

export default class PageFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static defaultProps = {
        type:0,
        listArr:[]
    };

    static propTypes = {
        type:PropTypes.number,
        listArr:PropTypes.array
    };

    render(){
        return <div className="personal-page">
            <Footer listArr={[{text:"tap",link:""},{text:"tap",link:""},{text:"tap",link:""},{text:"tap",link:""}]} type={0}> </Footer>
            <Footer style={{bottom:80}} listArr={[{text:"tap",link:"",iconFont:"icon-xiaomimi1193422easyiconnet"},{text:"tap",link:"",iconFont:"icon-wechat1193418easyiconnet"},{text:"tap",link:"",iconFont:"icon-tmall1193412easyiconnet"},{text:"tap",link:""}]} type="1"> </Footer>
        </div>
    }
}
module.exports=PageFooter;