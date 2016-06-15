/**
 * Created by xiaogang on 2016/6/8.
 */
"use strict";
import {Component, PropTypes} from 'react';
import {requireCss,setClassName} from '../components/mixins';
import Head from '../components/Header';

require('./css/page.less');

let prefix='index';
// requireCss();

export default class PageIndex extends Component{
    constructor(props){
        super(props);
        this.state={

        };
    }
    static defaultProps={

    };
    static propTypes={
        children:PropTypes.any
    };

    render(){
        return (
            <div className="personal-1104">
                <Head title="index" />
                <div className="personal-main">
                    {this.props.children}
                </div>
            </div>
        );


    }
}



