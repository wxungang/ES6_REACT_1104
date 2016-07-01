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

    render(){
       return <div className="personal-page">
            <Lists listArr={[{text:"lists title"},{text:["keeey:","valueee"]}]} />
           <Lists listArr={[{text:["lists title"]},{text:["keyee:","valueee"],className:["keyee","valueee"]},{text:["keyee:","valueee"]}]} />
       </div>
    }
}
module.exports = PageLists;
