/**
 * Created by xiaogang on 2016/6/16.
 */
"use strict";
import {Component, PropTypes} from 'react';
import {requireCss, setClassName} from '../../components/mixins';
import Header from '../../components/Header';


export default class PageIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    homeHandler() {
        console.log("home");
    }

    setHandler(params) {
        console.log("setHandler");
        console.log(params);
    }


    render() {
        let _setObj = {
            params: {
                key: "setIcon"
            },
            handler: this.setHandler,
            classNames: "iconfont icon-unie913"
        };
        return <div className="personal-page">
            <Header setObj={_setObj} homeObj={{classNames:"iconfont icon-untitled67"}}/>
            <div class="personal-main">
                
            </div>
        </div>
    }
}