/**
 * Created by xiaogang on 2016/6/8.
 */
"use strict";
import {Component, PropTypes} from 'react';
import {requireCss,setClassName} from '../components/mixins';
import pageLists from './pageLists.jsx';

// let pageLists=[];

function addLists(listItem) {
    
}

require('./pageLists').map((list,index)=>addLists(list,index));

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

    }

    render(){
        let uiLists=pageLists.map((list,index)=>addLists(list,index))

        return <div>home</div>



    }


}