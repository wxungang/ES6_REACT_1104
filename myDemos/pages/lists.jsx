/**
 * Created by xiaogang on 2016/7/1.
 */
"use strict";
import {Component, PropTypes} from 'react';
import {requireCss, setClassName} from '../components/mixins';

import Lists from '../components/Lists';

export default class PageLists extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    static defaultProps = {

    };

    static propTypes = {

    };
    // 组件调用代码
    render(){
       return <div className="personal-page">
            <Lists listArr={[{text:"lists title"},{text:["key:","value"]}]} />
            <Lists listArr={[{text:["lists title"]},{text:["key:","value","more value"],className:["key","value","more"]},{text:["key:","value"]}]} />
       </div>
    }
}
module.exports = PageLists;
