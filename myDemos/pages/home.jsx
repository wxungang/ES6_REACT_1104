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
        super(props);
        this.state={

        };
    }

    static defaultProps={

    };
    static propTypes={

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
        let uiLists=pageLists.map((list,index)=><List key={index} path={list.path} listObj={{key:list.text}} />);

        return <div className="personal-home">{uiLists}</div>
    }


}