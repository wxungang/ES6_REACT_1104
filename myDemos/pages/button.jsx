/**
 * Created by xiaogang on 2016/6/22.
 */
"use strict";
import {Component, PropTypes} from 'react';
import {requireCss, setClassName} from '../components/mixins';
import Button from '../components/Button';

export default class PageButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static defaultProps = {};

    static propTypes = {};

    render() {
        return (
            <div className="personal-page">
                <Button />
                <Button text="提交"/>
            </div>
        )
    }
}
module.exports = PageButton;