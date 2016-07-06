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
            <Lists listArr={[{text:"lists title"},{text:["key:","default style"]}]}/>
            <Lists listArr={[{text:"lists title"},{text:["key:","value"]}]} iconFont="icon-unie6a3"/>
            <Lists iconFont="icon-unie6a3" listArr={[{text:["lists title"]},{text:["key:","value","more value"],className:["key","value","more"]},{text:["key:","value"]}]} />
            <Lists listArr={[{text:"lists title"},{text:["this is a list with picture and ","text"]}]} imgUrl={require("./img/QCode.jpg")}/>
            <Lists listArr={[{text:"lists title"},{text:["this is a list with picture and ","text"]}]} imgUrl={require("./img/banner.jpg")}/>
       </div>
    }
}
module.exports = PageLists;
