/**
 * Created by xiaogang on 2016/6/22.
 */
"use strict";
import {Component, PropTypes} from 'react';
import {requireCss, setClassName} from "./mixins";
let prefix = 'Button';
requireCss("Button");


export default class Button extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        text: "确定",
        clickHandler: function () {
            alert(['you have clicked the ', this.text, ' button'].join(" "));
        }
    };
    static propTypes = {
        text: PropTypes.string,
        clickHandler:PropTypes.func
    };

    clickHandler() {
        this.props.clickHandler();
    };

    render() {
        const classNames = setClassName(
            "personal-button",
            this.props.className
        );
        return (
            <div className={classNames} onClick={this.clickHandler.bind(this)}>
                {this.props.text}
            </div>
        )
    }
}