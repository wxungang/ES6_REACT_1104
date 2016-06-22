/**
 * Created by xiaogang on 2016/6/8.
 */
"use strict";
import {Component, PropTypes} from 'react';
import {requireCss, setClassName} from '../components/mixins';
import Head from '../components/Header';

require('./css/page.less');

let prefix = 'index';
// requireCss();

export default class PageIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "index",
            iconFont:"icon-unie679"
        };
    }

    static defaultProps = {
        iconFont:"icon-unie679"
    };
    static propTypes = {
        children: PropTypes.any,
        iconFont:PropTypes.string
    };

    setTitle = (path,iconFont)=> {
        console.log(path);
        this.setState({
            title: path || "index",
            iconFont:iconFont===""?"iconfont":this.props.iconFont
        });
    };

    render() {
        return (
            <div className="personal-1104">
                <Head title={this.state.title} iconFont={this.state.iconFont} ref="header"/>
                <div className="personal-main">
                    {this.props.children && React.cloneElement(this.props.children, {
                        setTitle: this.setTitle
                    })}
                </div>
            </div>
        );
    }
}



