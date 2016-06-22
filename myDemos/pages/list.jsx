/**
 * Created by xiaogang on 2016/6/20.
 */
"use strict";

import {Component, PropTypes} from 'react';
import {requireCss, setClassName} from '../components/mixins';

import List from '../components/List';

export default class PageList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static defaultProps = {};

    static propTypes = {};

    render() {
        return <div className="personal-page">
             <List />
             <List  listObj={{key:"list",val:"value"}}/>
            <List  listObj={{key:"input",val:"value"}} type="5"/>
        </div>
    }
}
module.exports = PageList;