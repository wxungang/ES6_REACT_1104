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
            title:"index"
        };
    }
    static defaultProps={

    };
    static propTypes={
        children:PropTypes.any
    };

    setTitle=(path)=>{
        console.log(path);
        this.setState({
            title:path||"index"
        });
    };
    render(){
        return (
            <div className="personal-1104">
                <Head title={this.state.title} ref="header"/>
                <div className="personal-main" setHeader={this.setTitle} >
                    {this.props.children && React.cloneElement(this.props.children, {
                        setTitle: this.setTitle
                    })}
                </div>
            </div>
        );
    }
}



