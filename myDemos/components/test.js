/**
 * Created by xiaogang on 2016/6/8.
 */
"use strict";
import {Component, PropTypes} from 'react';

export default class Test extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return <div>test {this.props.name }</div>
    }
}