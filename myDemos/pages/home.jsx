/**
 * Created by xiaogang on 2016/6/8.
 */
"use strict";
import {Component, PropTypes} from 'react';
import {requireCss,setClassName} from '../components/mixins';
import List from '../components/List';
import pageLists from './pageLists.js';

export default class PageHome extends Component{
    constructor(props){
        console.log(props);
        super(props);
        this.state={
            title:"home"
        };
    }

    static defaultProps={

    };
    static propTypes={

    };

    componentWillMount(){
        this.props.setTitle(this.state.title);
    };

    /**
     * 生成 配置项展示 列表
     * @param list
     * @param index
     */
    addLists(list,index){
        return  <List key={index} path={list.path} listObj={{key:list.text}} />
    }

    render(){
        let uiLists=pageLists.map((list,index)=><List key={index} path={list.path} listObj={{key:list.text}} parentClick={this.props.setTitle}/>);

        return <div className="personal-home">{uiLists}</div>
    }
}