/**
 * Created by xiaogang on 2016/6/10.
 */
"use strict";

import {Component, PropTypes} from 'react';
import {requireCss, setClassName} from '../components/mixins';

export default class PageHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static defaultProps={

    };

    static propTypes={

    };

    render(){
        return <div>header</div>
    }
}
module.exports = PageHeader;