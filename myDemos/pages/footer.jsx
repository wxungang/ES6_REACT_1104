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
            <Footer listArr={[{text:"tap",link:""},{text:"tap",link:""},{text:"tap",link:""},{text:"tap",link:""}]} type="0"> </Footer>
            <Footer listArr={[{text:"tap",link:"",iconFont:""},{text:"tap",link:"",iconFont:""},{text:"tap",link:"",iconFont:""},{text:"tap",link:"",iconFont:""}]} type="1"> </Footer>
        </div>
    }
}
module.exports=PageFooter;